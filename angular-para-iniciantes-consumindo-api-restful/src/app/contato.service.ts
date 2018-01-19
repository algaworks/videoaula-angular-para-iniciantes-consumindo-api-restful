import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContatoService {

  contatosUrl = 'http://localhost:8080/contatos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
