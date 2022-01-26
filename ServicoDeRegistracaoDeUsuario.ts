interface Usuario {
    email: string
    senha: string
}

interface UsuarioRepositorio {
    save(usuario: Usuario): Promise<Usuario>
}

interface ServicoDeEmail {
    enviarEmail(para: string, cabecalho: string, copo?: string): Promise<void>
}

class ServicoDeRegistracaoDeUsuario {

    constructor(
        private usarRepositorio: UsuarioRepositorio,
        private servicoDeEmail: ServicoDeEmail
    ) { }

    async registrarUsuario(email: string, senha: string) {
        await this.usarRepositorio.save({
            email,
            senha,
        })
        await this.servicoDeEmail.enviarEmail(email, 'bem vindo ao meu site!')
    }
}

test('usuario registro', async () => {
    const repositorioDeUsuarioSimulado: UsuarioRepositorio = {
        async save(usuario: Usuario) {
            return usuario
        }
    }

    const simularServicoDeEmail: ServicoDeEmail = {
        async enviarEmail(para: string, cabecalho: string, corpo?: string) { },
    }

    const servicoDeRegistracaoDeUsuario = new ServicoDeRegistracaoDeUsuario(
        repositorioDeUsuarioSimulado,
        simularServicoDeEmail
    )

    await servicoDeRegistracaoDeUsuario.registrarUsuario(
        'macienciascomp@gmail.com',
        'super-secret-password'
    )

    expect(repositorioDeUsuarioSimulado.save).toHaveBeenCalled()
    expect(simularServicoDeEmail.enviarEmail).toHaveBeenCalled()
})

import { Component, Input } from '@angular/core'

@Component({
    selector: 'bemvindo-mensagem',
    template: `<h1>Welcome {{ nome }}!</h1>`,
})
export class BemVindoMensagemComponente {
    @Input() nome: string;
}

import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

export interface Usuario2 {
    nome: string
}

@Injectable()
export class UsuarioServico {
    getUsuarios(): Observable<Usuario2[]> {
        return of([
            { nome: 'Mateus' },
            { nome: 'Diego' },
            { nome: 'Pedro' }
        ])
    }
}