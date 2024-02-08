import { TestBed } from '@angular/core/testing';

import { VoxImplantWrapperService } from './vox-implant-wrapper.service';

describe('VoxImplantWrapperService', () => {
  let service: VoxImplantWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoxImplantWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
