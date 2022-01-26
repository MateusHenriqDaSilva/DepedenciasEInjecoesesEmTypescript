
import { Component, Input } from '@angular/core'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'bemvindo-mensagem',
    template: `<h1>Welcome {{ nome }}!</h1>`,
})
export class BemVindoMensagemComponente {
    @Input() nome: string;
}

export interface Usuario2 {
    nome: string
}

@Injectable()
export class UsuarioServico {
    constructor(private httpClient: HttpClient) { }

    getUsuarios(): Observable<Usuario2[]> {
        return this.httpClient.get<Usuario2[]>('/api/usuarios')
    }
}

