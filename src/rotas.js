import usuarioController from "./controller/usuarioController.js"
import postagemController from "./controller/postagemController.js"

export function adicionarRotas(servidor){
    servidor.use(usuarioController)
    servidor.use(postagemController)
}