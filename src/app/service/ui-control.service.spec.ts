import { TestBed, inject } from '@angular/core/testing';

import { UiControlService } from './ui-control.service';

describe('UiControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiControlService]
    });
  });

  it('should ...', inject([UiControlService], (service: UiControlService) => {
    expect(service).toBeTruthy();
  }));
});
