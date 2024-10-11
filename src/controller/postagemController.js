import { Router } from 'express';
import {criarPostagemRepository, listarPostagem} from "../repository/postagemrepository.js"

const endpoints = Router()

endpoints.post("/postar", async (req, resp) =>{
    try {
        const postagem = req.body;
        const id_postagem = await criarPostagemRepository(postagem, 1)

        return resp.send({
            postagem: id_postagem
        })
    } catch (error) {
        return resp.status(400).send({
            error: error.mensage
        })
    }
})

endpoints.get("/postagens/:id", async (req, resp) =>{
    try {
        const { id } = req.params
        const resultado = await listarPostagem(id)

        return resp.send(resultado);
    } catch (error) {
        return resp.status(400).send({
            error: error.mensage
        })
    }
})

export default endpoints