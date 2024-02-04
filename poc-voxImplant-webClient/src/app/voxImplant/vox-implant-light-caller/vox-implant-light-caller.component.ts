import { Component } from '@angular/core';
import { VoxImplantWrapperService } from '../vox-implant-wrapper.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vox-implant-light-caller',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vox-implant-light-caller.component.html',
  styleUrl: './vox-implant-light-caller.component.css'
})
export class VoxImplantLightCallerComponent {
  username: string = '';
  password: string = '';
  callerNumber: string = '';

  constructor(private voxService: VoxImplantWrapperService) { }

  async login(): Promise<void> {
    await this.voxService.loginAsync(this.username, this.password);
  }

  async call(): Promise<void> {
    await this.voxService.callAsync(this.callerNumber);
  }

  async hangUp(): Promise<void> {
    await this.voxService.hangUpAsync();
  }
}
