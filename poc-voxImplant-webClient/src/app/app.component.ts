import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoximplantLoggerComponent } from './voximplant-logger/voximplant-logger.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VoximplantLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poc-voxImplant-webClient';
}
