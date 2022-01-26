import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { UsuarioServico, Usuario2 } from "./UsuarioServico";

@Component({
    selector: 'Usuario-List',
    template: `
    <ul>
        <li *ngFor="deixar o usuario de (usuarios$ | async)">
            {{ Usuario2.nome}}
        </li>
        </ul>
        `
})
export class listaDeUsuarioComponent {
    readonly usuario$: Observable<Usuario2[]>

    constructor(private usuarioService: UsuarioServico) {
        this.usuario$ = usuarioService.getUsuarios()
    }
}