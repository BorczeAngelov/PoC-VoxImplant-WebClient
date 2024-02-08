import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoxImplantLightCallerComponent } from './voxImplant/vox-implant-light-caller/vox-implant-light-caller.component';
import { VoxImplantTranscriptComponent } from './voxImplant/vox-implant-transcript/vox-implant-transcript.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VoxImplantLightCallerComponent, VoxImplantTranscriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-voxImplant-webClient';
}
