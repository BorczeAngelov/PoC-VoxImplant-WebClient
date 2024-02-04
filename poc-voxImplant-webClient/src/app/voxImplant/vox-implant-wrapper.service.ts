import { Injectable } from '@angular/core';

declare var VoxImplant: any;

@Injectable({
  providedIn: 'root'
})
export class VoxImplantWrapperService {

  private voxSdk: any;
  private currentCall: any = null;

  constructor() {
    this.voxSdk = VoxImplant.getInstance();
  }

  async loginAsync(username: string, password: string): Promise<any> {
    try {
      const clientState = this.voxSdk.getClientState();

      if (clientState !== "CONNECTED" && clientState !== "LOGGING_IN") {
        await this.voxSdk.init({ micRequired: false });
        await this.voxSdk.connect();

        try {
          const info = await this.voxSdk.login(username, password);
          // Handle successful login here, e.g., save tokens
          console.log('Login successful', info);
        } catch (error) {
          // Handle login error here
          console.error('Login error', error);
        }
      } else {
        alert('Already logged in!');
      }
    } catch (error) {
      // Handle connection error here
      alert('Cannot connect to the Voximplant cloud');
      console.warn('Cannot connect', error);
    }
  }

  async callAsync(number: string): Promise<any> {
    if (this.currentCall) {
      console.warn("There is already an ongoing call.");
      return;
    }
    await this.voxSdk.setOperatorACDStatus(VoxImplant.OperatorACDStatuses.InService);
    this.currentCall = this.voxSdk.call(number);
    this.bindCallEvents();
    return this.currentCall;
  }

  async hangUpAsync(): Promise<void> {
    if (!this.currentCall) {
      console.warn("No current call to hang up.");
      return;
    }
    await this.currentCall.hangup();
    this.currentCall = null;

    await this.voxSdk.setOperatorACDStatus(VoxImplant.OperatorACDStatuses.Online);
    setTimeout(() => {
      this.voxSdk.setOperatorACDStatus(VoxImplant.OperatorACDStatuses.Ready);
    }, 400);
  }

  private bindCallEvents(): void {
    if (!this.currentCall) {
      console.warn("No current call to attach event listener.");
      return;
    }
    this.currentCall.on(VoxImplant.CallEvents.Connected, () => this.onConnect());
    this.currentCall.on(VoxImplant.CallEvents.Failed, () => this.onCallFailed());
    this.currentCall.on(VoxImplant.CallEvents.Disconnected, () => this.onCallDisconnected());
    this.currentCall.on(VoxImplant.CallEvents.MessageReceived, (event: any) => this.onMessageReceived(event));
  }

  private onConnect(): void {
    this.voxSdk.setOperatorACDStatus(VoxImplant.OperatorACDStatuses.InService);
    // this.isAcceptButtonHidden = true;
    // this.isHangupButtonHidden = false;
    // this.isDeclineButtonHidden = true;
  }

  private onCallDisconnected(): void {
    this.hangUpAsync(); // Optionally, trigger additional cleanup or UI updates via callbacks
  }

  private onCallFailed(): void {
    this.hangUpAsync(); // Optionally, handle call failure specifics
  }

  private onMessageReceived(event: any): void {
    try {
      const messageData = JSON.parse(event.text);
      if (messageData.action === 'log_ai_response') {
        console.log('AI Response Transcript: ', messageData.data);
      } else if (messageData.action === 'log_ai_request') {
        console.log('AI Request Transcript: ', messageData.data);
        // Handle the custom response as needed
      }
    } catch (error) {
      console.error('Error parsing AI message:', error);
    }
  }

}