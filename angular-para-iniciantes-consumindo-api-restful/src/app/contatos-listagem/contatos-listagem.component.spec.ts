import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosListagemComponent } from './contatos-listagem.component';

describe('ContatosListagemComponent', () => {
  let component: ContatosListagemComponent;
  let fixture: ComponentFixture<ContatosListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
