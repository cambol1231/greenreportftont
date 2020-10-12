import { TestBed } from '@angular/core/testing';

import { RecuperacionAuditoriaService } from './RecuperacionAuditoria.service';

describe('RecuperacionAuditoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecuperacionAuditoriaService = TestBed.get(RecuperacionAuditoriaService);
    expect(service).toBeTruthy();
  });
});
