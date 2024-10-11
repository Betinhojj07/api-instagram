import { Router } from 'express';

import { criarUsuarioRepository, validarUsuarioRepository } from '../repository/usuarioRepository.js'

const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {
    try {
        const usuario = req.body;
        const id = await criarUsuarioRepository(usuario);

        return resp.send({
            novoId: id
        })
    } catch (error) {
        return resp.status(400).send({
            erro: error.message
        })
    }
});

endpoints.post('/login', async (req, resp) => {
    try {
        const usuario = req.body;
        const resposta = await validarUsuarioRepository(usuario);

        if (!resposta) {
            return resp.status(400).send({
                erro: "Usuário ou senha incorretos."
            })
        }

        return resp.send(resposta)
    } catch (error) {
        return resp.status(400).send({
            erro: error.message
        })
    }
});


export default endpoints;