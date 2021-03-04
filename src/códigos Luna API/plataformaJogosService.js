import axios from 'axios';
import { response } from 'express';

export default class PlataformaJogos{

    getListaJogosXbox(saberListaDeJogosXBOX, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosXBOX).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosXbox;

        var listagem = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
            var listagemJogosPorNome = verListaJogos[index].nome_jogo;
            var listagemJogosPorPreco = verListaJogos[index].preco_jogo;
            var listagemJogosDisponiveis = verListaJogos[index].qtd_jogo;
    
             listagem +=  listagemJogosPorNome + ", valor: " + listagemJogosPorPreco + ", quantidade disponível em estoque:  " + listagemJogosDisponiveis + "; ";

            var buscarJogos = listagem;
        }

        var responseData =
              {
                fulfillmentMessages: [{ text: { text: ["Nessa plataforma temos esses jogos: " + buscarJogos] } }]
              }
        
        responseDialogflow.json(responseData);

      })
    }
    
    getComprarJogosXbox(comprarJogoXBOX, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/xbox").then((response) =>{
          
          var jogos = response.data;
          var verListaJogos = jogos.listaJogosXbox;
          
          var listagemJogosPorNome = verListaJogos.nome_jogo;
          var listagemJogosPorPreco = verListaJogos.preco_jogo;

          if(comprarJogoXBOX == listagemJogosPorNome){

             var listagem1 = listagemJogosPorNome + "por " + listagemJogosPorPreco;

             var responseData =
                {
                  fulfillmentMessages: [{ text: { text: ["Você comprou " + listagem1 + "! Obrigado pela compra!" ] } }]
                }
              responseDialogflow.json(responseData); 
          }

        })
    }

    getListaJogosPs4(saberListaDeJogosPS4, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosPS4).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosPs4;

        var listagem = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
          var listagemJogosPorNome = verListaJogos[index].nome_jogo;
          var listagemJogosPorPreco = verListaJogos[index].preco_jogo;
          var listagemJogosDisponiveis = verListaJogos[index].qtd_jogo;
  
           listagem +=  listagemJogosPorNome + ", valor: " + listagemJogosPorPreco + ", quantidade disponível em estoque:  " + listagemJogosDisponiveis + "; ";

          var buscarJogos = listagem;
      }
        var responseData =
           {
                fulfillmentMessages: [{ text: { text: ["Nessa plataforma temos esses jogos: " + buscarJogos] } }]
            }
          
        responseDialogflow.json(responseData);

      })
    }

    getListaJogosPc(saberListaDeJogosPC, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosPC).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosPc;

        var listagem = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
          var listagemJogosPorNome = verListaJogos[index].nome_jogo;
          var listagemJogosPorPreco = verListaJogos[index].preco_jogo;
          var listagemJogosDisponiveis = verListaJogos[index].qtd_jogo;
  
           listagem +=  listagemJogosPorNome + ", valor: " + listagemJogosPorPreco + ", quantidade disponível em estoque:  " + listagemJogosDisponiveis + "; ";

          var buscarJogos = listagem;
      }
        var responseData =
           {
                fulfillmentMessages: [{ text: { text: ["Nessa plataforma temos esses jogos: " + buscarJogos] } }]
            }
          
        responseDialogflow.json(responseData);

      })
    }
} 