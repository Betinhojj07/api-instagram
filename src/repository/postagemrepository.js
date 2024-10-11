import db from "../db/conection.js";

export async function criarPostagemRepository(postagem, id_usuario){
    const comando = `INSERT INTO postagem (id_usuario, nm_postagem, ds_postagem, qtd_curtidas) 
                                    VALUES (?, ?, ?, ?)`

    let resposta = await db.query(comando,[id_usuario, postagem.nome, postagem.desc, postagem.curtidas])
    return resposta[0].insertId;
};

export async function listarPostagem(idUsuario){
    const comando = `SELECT * FROM postagem
                        WHERE id_usuario = ?`

    let resposta =  await db.query(comando, [idUsuario])
    return resposta[0]
};

export async function deletarPostagem(id_usuario){
    const comando =  `DELETE * FROM postagem 
                        WHERE id_usuario = ?`


    let resposta = await db.query(comando,[id_usuario])
    return resposta[0]
};

export async function alterarPostagem(postagem, id_usuario){
    const comando= `UPDATE postagem 
                        SET nm_postagem =?,
                            ds_postagem=?,
                            qtd_curtidas=?,
                                WHERE id_usuario =?`


    let resposta = await db.query (comando,[id_usuario, postagem.nome, postagem.desc, postagem.curtidas ])
    return resposta[0].affectedRows
};
