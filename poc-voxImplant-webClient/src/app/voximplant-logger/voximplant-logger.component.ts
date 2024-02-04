import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoxImplantWrapperService } from '../voxImplant/vox-implant-wrapper.service';

@Component({
  selector: 'app-voximplant-logger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voximplant-logger.component.html',
  styleUrl: './voximplant-logger.component.css'
})
export class VoximplantLoggerComponent implements OnInit {

  user: string = ''; // Bound to the username input
  password: string = ''; // Bound to the password input, if used
  callNumber: string = '';

  // Define properties to control form visibility and state
  loginFailedMessageVisible: boolean = false;
  isCallButtonHidden: boolean = false;
  isHangupButtonHidden: boolean = true;
  isAcceptButtonHidden: boolean = true;
  isDeclineButtonHidden: boolean = true;
  isIdCorrectNumberHidden: boolean = true;

  constructor(public voxImplantWrapperService: VoxImplantWrapperService) { }

  ngOnInit(): void {
    
  }

  async onAuth(): Promise<void> {
    if (!this.user || (this.password && !this.password.trim())) {
      this.loginFailedMessageVisible = true;
      return;
    }
    await this.voxImplantWrapperService.loginAsync(this.user, this.password);
  }

  // Method to start a call - placeholder
  async startCall(): Promise<void> {
    if (!this.callNumber) {
      this.isIdCorrectNumberHidden = false;
      return;
    }
    this.isCallButtonHidden = true;
    this.isHangupButtonHidden = false;
    
    await this.voxImplantWrapperService.callAsync(this.callNumber.trim());
  }

  async hangUp(): Promise<void> {
      
    await this.voxImplantWrapperService.hangUpAsync();
    // Reset buttons visibility
    this.resetButtonsVisibility();    
  }

  private resetButtonsVisibility(): void {
    this.isCallButtonHidden = false;
    this.isHangupButtonHidden = true;
    this.isAcceptButtonHidden = true;
    this.isDeclineButtonHidden = true;
  }
}
