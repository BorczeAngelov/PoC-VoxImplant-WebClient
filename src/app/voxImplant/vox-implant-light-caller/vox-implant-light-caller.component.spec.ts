import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoxImplantLightCallerComponent } from './vox-implant-light-caller.component';

describe('VoxImplantLightCallerComponent', () => {
  let component: VoxImplantLightCallerComponent;
  let fixture: ComponentFixture<VoxImplantLightCallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoxImplantLightCallerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoxImplantLightCallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
