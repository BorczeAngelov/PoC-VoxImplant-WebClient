import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoximplantLoggerComponent } from './voximplant-logger.component';

describe('VoximplantLoggerComponent', () => {
  let component: VoximplantLoggerComponent;
  let fixture: ComponentFixture<VoximplantLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoximplantLoggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoximplantLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
