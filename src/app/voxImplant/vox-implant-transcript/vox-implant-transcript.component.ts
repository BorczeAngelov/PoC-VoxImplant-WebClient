import { Component, OnInit } from '@angular/core';
import { VoxImplantWrapperService } from '../vox-implant-wrapper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vox-implant-transcript',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vox-implant-transcript.component.html',
  styleUrl: './vox-implant-transcript.component.css'
})
export class VoxImplantTranscriptComponent implements OnInit {

  messages: any[] = [];

  constructor(private voxService: VoxImplantWrapperService) { }

  ngOnInit(): void {
    this.voxService.transcriptMessages$.subscribe(messages => {
      this.messages = messages;
    });
  }
}