import axios from 'axios';

export default class PlataformaJogos{

    getListaJogosXbox(saberListaDeJogosXBOX, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosXBOX).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosXbox;

        var listagem = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
            var listagemJogosPorNome = verListaJogos[index].nome_jogo;
            var listagemJogosPorDescr = verListaJogos[index].descricao_jogo;
    
             listagem +=  listagemJogosPorNome + ", descrição: " + listagemJogosPorDescr + "; ";

            var buscarJogos = listagem;
        }

        var responseData =
              {
                fulfillmentMessages: [{ text: { text: ["Nessa plataforma temos esses jogos: " + buscarJogos] } }]
              }
        
        responseDialogflow.json(responseData);

      })
    }

    getListaJogosPs4(saberListaDeJogosPS4, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosPS4).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosPs4;

        var listagemJogos = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
            listagemJogos += verListaJogos[index].nome_jogo + " , ";
    
            var buscaJogoNome = "Nessa plataforma temos essa lista de Jogos: " + listagemJogos;
            
        }
        var responseData =
           {
                fulfillmentMessages: [{ text: { text: [buscaJogoNome] } }]
            }
          
        responseDialogflow.json(responseData);

      })
    }

    getListaJogosPc(saberListaDeJogosPC, responseDialogflow){
        axios.get("https://games-center-api.herokuapp.com/jogos/" + saberListaDeJogosPC).then((response) => {

        var jogos = response.data;
        var verListaJogos = jogos.listaJogosPc;

        var listagemJogos = "";
        var index;
        for ( index = 0; index < verListaJogos.length; index++) {
            listagemJogos += verListaJogos[index].nome_jogo + " , ";
    
            var buscaJogoNome = "Nessa plataforma temos essa lista de Jogos: " + listagemJogos;
            
        }
        var responseData =
           {
                fulfillmentMessages: [{ text: { text: [buscaJogoNome] } }]
            }
          
        responseDialogflow.json(responseData);

      })
    }
} 