import jwt from 'jsonwebtoken'

const KEY = "==aula-jwt=="

export function gerarToken(payload) {
    return jwt.sign(payload, KEY)
}

export function autenticar(req, resp, next) {
    return autenticacao(req, resp, next);
}

export function autenticacao(req, resp, next){
    try {
        const token = req.headers["x-access-token"]

        if (token === undefined) {
            token = req.query["x-access-token"]
        }

        const signed = jwt.decode(token, KEY)

        req.user = signed;

        next();
    } catch (e) {
        resp.status(401).end();
    }
}