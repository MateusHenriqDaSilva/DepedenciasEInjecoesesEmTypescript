interface Usuario {
    email: string
    senha: string
}

interface UsuarioRepositorio {
    save(usuario: Usuario): Promise<Usuario>
}

import * as fs from 'fs';

// file usar repositorio
class FileUsuarioRepositorio implements UsuarioRepositorio {
    save(usuario: Usuario): Promise<Usuario> {
        return new Promise((resolver, rejeitar) => {
            fs.appendFile('usuario.txt', JSON.stringify(usuario), err => {
                if (err) return rejeitar(err)
                resolver(usuario)
            })
        })
    }
}

