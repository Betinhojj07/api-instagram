import db from "../db/conection.js";


export async function criarUsuarioRepository(usuario){
    const comando = `INSERT INTO usuario (nm_usuario, ds_senha)
                                    VALUES (?, ?)`;

    const resposta = await db.query(comando, [usuario.nome, usuario.senha])
    return resposta[0].insertId;
}

export async function validarUsuarioRepository(usuario){
    const comando = `SELECT 
                        id_usuario  id,
                        nm_usuario  nome
                    FROM usuario
                    WHERE nm_usuario = ? and ds_senha = ?`;

    const resposta = await db.query(comando, [usuario.nome, usuario.senha])
    return resposta[0][0]
}