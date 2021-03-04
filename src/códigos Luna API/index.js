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

    // saberListaDeJogosXBOX: variável onde armazena o parâmetro digitado pelo usuário (lista de jogos xbox)
    var saberListaDeJogosXBOX = data.queryResult.parameters.jogosXBOX;
    
    if(intentName == 'intent-lista-jogos-xbox'){

        plataformaJogos.getListaJogosXbox(saberListaDeJogosXBOX, response);
    }

    // comprarJogosBOX: variável onde armazena o parâmetro digitado pelo usuário (comprar jogo tal da lista de jogos do xbox)
    var comprarJogoXBOX = data.queryResult.parameters.compraDeJogosXbox;

    if(intentName == 'intent-comprar-jogo-xbox'){
    
        plataformaJogos.getComprarJogosXbox(comprarJogoXBOX, response);

    }

    //saberListaDeJogosPS4: variável onde armazena o parâmetro digitado pelo usuário (lista de jogos ps4)
    var saberListaDeJogosPS4 = data.queryResult.parameters.jogosPS4;

    if(intentName == 'intent-lista-jogos-ps4'){

        plataformaJogos.getListaJogosPs4(saberListaDeJogosPS4, response);
    }
    
    //saberListaDeJogosPC: variável onde armazena o parâmetro digitado pelo usuário (lista de jogos pc)
    var saberListaDeJogosPC = data.queryResult.parameters.jogosPC;

    if(intentName == 'intent-lista-jogos-pc'){
    
        plataformaJogos.getListaJogosPc(saberListaDeJogosPC, response);
    }

})

app.listen(process.env.PORT || 4200);