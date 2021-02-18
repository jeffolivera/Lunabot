import json from 'body-parser';
import express, { response } from 'express';
import axios from 'axios';

const app = express();
app.use(json());

// linha de código para saber se o método get está funcionando
app.get('/status', (request, response) => {
    response.json({ status: "OK" })
});