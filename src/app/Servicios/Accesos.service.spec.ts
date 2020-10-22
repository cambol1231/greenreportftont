import { TestBed } from '@angular/core/testing';
import { AccesosService } from './Accesos.service';

describe('AccesosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesosService = TestBed.get(AccesosService);
    expect(service).toBeTruthy();
  });
});