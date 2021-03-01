import json from 'body-parser';
import express, { response } from 'express';
import PlataformaJogos from './plataformaJogosService.js';

var plataformaJogos = new PlataformaJogos();

const app = express();
app.use(json());

// linha de código para saber se o método get está funcionando
app.get('/status', (request, response) => {
    response.json({ status: "Api de conexão está Funcionando" })
});

app.post('/webhook', (request, response) => {

    var data = request.body;

    var intentName = data.queryResult.intent.displayName;
    console.log(intentName);

    //variável onde o usuário digita jogos de x box
    var saberListaDeJogosXBOX = data.queryResult.parameters.jogosXBOX;
    plataformaJogos.getListaJogosXbox(saberListaDeJogosXBOX, response);

    //variável onde o usuário digita jogos de ps4
    var saberListaDeJogosPS4 = data.queryResult.parameters.jogosPS4;
    plataformaJogos.getListaJogosPs4(saberListaDeJogosPS4,response);
    
    //variável onde o usuário digita jogos de pc
    var saberListaDeJogosPC = data.queryResult.parameters.jogosPC;
    plataformaJogos.getListaJogosPc(saberListaDeJogosPC, response);

})

app.listen(process.env.PORT || 4200);