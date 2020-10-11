import { TestBed } from '@angular/core/testing';

import { RecuperacionService } from './Recuperacion.service';

describe('RecuperacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperacionService = TestBed.get(RecuperacionService);
    expect(service).toBeTruthy();
  });
});
