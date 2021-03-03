import json from 'body-parser';
import express, { request, response } from 'express';
import Jogo from './jogo.js';


const app = express();
app.use(json());

// linha de código para saber se o método get está funcionando
app.get('/status', (request, response) => {
    response.json({ status: "Api Loja Games Center de está Funcionando" })
});

//*lista de jogos de xbox
app.get('/jogos/xbox', (request, response) => {
    var listaJogosXbox = [
                           new Jogo("xb_001", "Destiny 2: Além da Luz","Mergulhe na experiência gratuita de Destiny 2 e vivencie combates de tiro em primeira pessoa. Explore os mistérios do nosso sistema solar, personalize seus Guardiões com equipamentos singulares, e libere habilidades elementares contra poderosos inimigos.", 20, "R$ 200.00", "Disponível em estoque", "RPG, FPS, futurista, mundo aberto"),
                           new Jogo("xb_002", "Ryse: Son of Rome", "Em meio ao caos do fim do Império Romano, torne-se o soldado Mário Tito e embarque numa perigosa campanha para vingar a morte de sua família e defender a honra de Roma. No modo Gladiador, entre no Coliseu e lute por glória, espetáculo e diversão do público.", 30, "R$ 39.00", "Disponível em estoque", "RPG, hack and slash"),
                           new Jogo("xb_003", "Gears 5", "Invada a fortaleza inimiga com a Operação 5, disponível agora. Nossa maior atualização traz cinco mapas, sete novos personagens, uma nova arma e toneladas de novas recompensas.", 40, "R$ 250.00", "Disponível em estoque", "RPG, ação e aventura"),
                           new Jogo("xb_004", "Sea of Thieves", "Sea of Thieves oferece a experiência pirata definitiva, desde navegar e lutar até explorar e pilhar. Tudo o que você precisa para viver a vida pirata e se tornar uma lenda por seus feitos. Sem nenhum papel definido, você tem total liberdade para interagir com o mundo e os outros jogadores como preferir. Seja viajando em grupo ou velejando a sós, você certamente encontrará outras tripulações nessa aventura de mundo compartilhado - mas serão elas amigas ou inimigas, e o que você fará a respeito?", 150, "R$ 150.00", "Disponível em estoque", "RPG, ação e aventura, mundo aberto"),
                           new Jogo("xb_005","Ori and the Blind Forest", "A floresta de Nibel está morrendo. Após uma grande tempestade colocar em andamento uma série de eventos devastadores, Ori deve viajar em busca da coragem para confrontar um inimigo sombrio e salvar a floresta de Nibel. “Ori and the Blind Forest” conta a história de um jovem órfão destinado ao heroísmo, em um jogo de Ação em Plataformas com visual incrível criado pela Moon Studios. Apresentando artes pintadas à mão, personagens animados meticulosamente, uma trilha sonora totalmente orquestral e dezenas de novos recursos na Definitive Edition, “Ori and the Blind Forest” explora uma história profundamente emocional sobre amor e sacrifício e sobre a esperança que existe em todos nós.", 120, "R$ 60.00", "Disponível em estoque", "RPG, 2D, ação e aventura"),
                           new Jogo("xb_006", "Killer Instinct", "A lendária franquia de luta está de volta com novo visual, ação desenfreada, um elenco selvagem de lutadores, trilha sonora reativa com um rock bem pegado, e até C-C-C-COMBO BREAKERS!!! Escolha seu combatente supremo com animações fluídas, táticas únicas de combate e ataques especiais emocionantes. Use o sistema aberto de combos para acumular combos enormes enquanto seu oponente procura por aberturas para quebrá-lo e virar a mesa. Conecte-se para competir online contra jogadores do mundo todo ou domine as habilidades de combate com tutoriais profundos e combatentes IA inteligentes.", 50, "R$ 80.00", "Disponível em estoque", "luta")
                        ]
    response.json({listaJogosXbox})
});

// *lista de jogos ps4
app.get('/jogos/ps4', (request, response) => {

    var listaJogosPs4 = [
                         new Jogo("ps_001", "The Last of Us: Part II", "Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.", 220, "R$ 279.00", "Disponível em estoque", "RPG, ação e aventura, pós-apocalipse"),
                         new Jogo("ps_002", "Horizon: Zero Dawn Complete Edition", "Como as máquinas dominaram esse mundo e o que pretendem? O que aconteceu com a civilização que habitava esse lugar? Vasculhe cada canto de um reino repleto de relíquias antigas e construções misteriosas para desvendar o passado e desenterrar os vários segredos de uma terra esquecida.", 120, "R$ 79.00", "Disponível em estoque", "RPG, ação e aventura, pós-apocalipse"),
                         new Jogo("ps_003", "Bloodborne", "Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.", 100, "R$ 79.00", "Disponível em estoque", "RPG, ação e aventura"),
                         new Jogo("ps_004", "Uncharted 4: A Thief's End", "Vários anos após sua última aventura, o aposentado caçador de tesouros, Nathan Drake, é forçado a voltar para o mundo dos ladrões. Com riscos muito mais pessoais, Drake embarca em uma jornada pelo mundo em busca de uma conspiração histórica por trás de um famoso tesouro pirata. Sua maior aventura testará seus limites físicos, sua determinação e, finalmente, o que ele está disposto a sacrificar para salvar quem ama.", 80, "R$ 79.00", "Disponível em estoque", "RPG, ação e aventura"),
                         new Jogo("ps_005", "Little Big Planet 3", "Em LittleBigPlanet™ 3, você pode descobrir um mundo de infinitas surpresas criativas à medida que explora todos os cantos da Imagisphere. Conheça os habitantes do misterioso planeta Bunkum e enfrente o nefasto Newton neste rico e vibrante mundo.", 120, "R$ 80.00", "Disponível em estoque", "ação e aventura")
                        ]

    response.json({listaJogosPs4})
})

//*lista de jogos pc
app.get('/jogos/pc', (request, response) => {

    var listaJogosPc = [
                         new Jogo("pc_001", "Counter-Strike:Global Offensive", "Durante os últimos 12 anos, continuou a ser um dos jogos mais jogados do mundo, uma manchete em torneios de jogos competitivos que vendeu mais 25 milhões de unidades por todo o mundo. O CS: GO promete expandir a jogabilidade do galardoado CS e trazê-la para os que jogam no PC, nas consoles da geração mais recente ou no Mac.", 220, "Gratuito para download", "Disponível em estoque", "FPS, tiro"),
                         new Jogo("pc_002", "Valorant", "Mais do que armas e balas, você escolherá um Agente armado com habilidades adaptativas, rápidas e letais que criam oportunidades para deixar seu tiro brilhar. Não há dois Agentes que joguem iguais, assim como não há dois rolos de destaque iguais.", 500, "R$ Gratuito para download", "Disponível em estoque", "FPS, tiro"),
                         new Jogo("pc_003", "Hollow Knigth", "Abra seu próprio caminho em Hollow Knight! Uma aventura de ação épica através de um vasto reino em ruínas de insetos e heróis. Explore cavernas sinuosas, lute contra criaturas contaminadas e faça amizade com insetos bizarros, tudo em um estilo 2D clássico desenhado à mão.", 100, "R$ 28.00", "Disponível em estoque", "RPG, 2D, ação e aventura"),
                         new Jogo("pc_004", "Stardew Valley", "Você herdou a antiga fazenda de seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, você se prepara para começar sua nova vida. Você pode aprender a viver da terra e transformar esses campos crescidos em uma casa próspera?", 100, "R$ 25.00", "Disponível em estoque", "RPG, ação e aventura"),
                         new Jogo("pc_005", "League of Legends", "League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.", 100, "Gratuito para download", "Disponível em estoque", "RPG, MOBA, ação e aventura")
                       ]

    response.json({listaJogosPc})
})

/*

quando acabar a quantidade de um jogo, ele é deletado da lista de jogos
app.delete('/jogos/xbox, (request, response) =>{

})

diminui a quantidade de jogos disponiveis e atualiza a lista de jogos
app.put('/jogos/xbox', (request,response) =>{

})
*/



app.listen(process.env.PORT || 4200);