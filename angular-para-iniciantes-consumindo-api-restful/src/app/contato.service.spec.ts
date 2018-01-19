import { TestBed, inject } from '@angular/core/testing';

import { ContatoService } from './contato.service';

describe('ContatoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoService]
    });
  });

  it('should be created', inject([ContatoService], (service: ContatoService) => {
    expect(service).toBeTruthy();
  }));
});
