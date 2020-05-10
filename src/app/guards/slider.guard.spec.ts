import { TestBed, async, inject } from '@angular/core/testing';

import { SliderGuard } from './slider.guard';

describe('SliderGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SliderGuard]
    });
  });

  it('should ...', inject([SliderGuard], (guard: SliderGuard) => {
    expect(guard).toBeTruthy();
  }));
});
