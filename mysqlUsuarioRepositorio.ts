import mysql from 'mysql'

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

class MysqlUsuarioRepositorio implements UsuarioRepositorio {
    connection = mysql.createConnection({
        // conexao detalhes
    })

    save(usuario: Usuario): Promise<Usuario> {
        return new Promise((resolver, rejeitar) => {
            return this.connection.query(
                `INSERT INTO usuarios (email, senha) VALAUES (?,?)`,
                [usuario.email, usuario.senha],
                (err, data) => {
                    if (err) return rejeitar(err)
                    resolver(data)
                }
            )
        })
    }
}