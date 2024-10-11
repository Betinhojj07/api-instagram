import { Router } from 'express';

import { criarUsuarioRepository } from '../repository/usuarioRepository.js'

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


export default endpoints;