import express from "express";
import cors from 'cors';
import { adicionarRotas } from "./rotas.js";

const app = express();
app.use(cors());
app.use(express.json());

adicionarRotas(app);

// app.get('/ping', (req,resp) => resp.send('pong'))

app.listen(3010, () => console.log("Servidor rodando"));