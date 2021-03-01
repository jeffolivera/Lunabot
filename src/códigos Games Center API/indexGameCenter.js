import json from 'body-parser';
import express, { request, response } from 'express';

const app = express();
app.use(json());

// linha de código para saber se o método get está funcionando
app.get('/status', (request, response) => {
    response.json({ status: "Api Loja Games Center de está Funcionando" })
});

//*lista de jogos de xbox
app.get('/jogos/xbox', (request, response) => {
    
    var listaJogosXbox = [{id_jogo:"xb_001", nome_jogo:"Destiny 2: Além da Luz", descricao_jogo: "Mergulhe na experiência gratuita de Destiny 2 e vivencie combates de tiro em primeira pessoa. Explore os mistérios do nosso sistema solar, personalize seus Guardiões com equipamentos singulares, e libere habilidades elementares contra poderosos inimigos.", qtd_jogo: 20, preco_jogo: "R$ 200.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, FPS, futurista, mundo aberto"},
                          {id_jogo:"xb_002", nome_jogo:"Ryse: Son of Rome", descricao_jogo: "Em meio ao caos do fim do Império Romano, torne-se o soldado Mário Tito e embarque numa perigosa campanha para vingar a morte de sua família e defender a honra de Roma. No modo Gladiador, entre no Coliseu e lute por glória, espetáculo e diversão do público.", qtd_jogo: 30, preco_jogo: "R$ 39.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, hack and slash"},
                          {id_jogo:"xb_003", nome_jogo:"Gears 5", descricao_jogo:"Invada a fortaleza inimiga com a Operação 5, disponível agora. Nossa maior atualização traz cinco mapas, sete novos personagens, uma nova arma e toneladas de novas recompensas.", qtd_jogo: 40, preco_jogo: "R$ 250.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura"},
                          {id_jogo:"xb_004", nome_jogo:"Sea of Thieves", descricao_jogo:"Sea of Thieves oferece a experiência pirata definitiva, desde navegar e lutar até explorar e pilhar - tudo o que você precisa para viver a vida pirata e se tornar uma lenda por seus feitos. Sem nenhum papel definido, você tem total liberdade para interagir com o mundo e os outros jogadores como preferir. Seja viajando em grupo ou velejando a sós, você certamente encontrará outras tripulações nessa aventura de mundo compartilhado - mas serão elas amigas ou inimigas, e o que você fará a respeito?", qtd_jogo: 150, preco_jogo: "R$ 150.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura, mundo aberto"},
                          {id_jogo:"xb_005", nome_jogo:"Ori and the Blind Forest", descricao_jogo:"A floresta de Nibel está morrendo. Após uma grande tempestade colocar em andamento uma série de eventos devastadores, Ori deve viajar em busca da coragem para confrontar um inimigo sombrio e salvar a floresta de Nibel. “Ori and the Blind Forest” conta a história de um jovem órfão destinado ao heroísmo, em um jogo de Ação em Plataformas com visual incrível criado pela Moon Studios. Apresentando artes pintadas à mão, personagens animados meticulosamente, uma trilha sonora totalmente orquestral e dezenas de novos recursos na Definitive Edition, “Ori and the Blind Forest” explora uma história profundamente emocional sobre amor e sacrifício e sobre a esperança que existe em todos nós.", qtd_jogo: 120, preco_jogo: "R$ 60.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, 2D, ação e aventura"},
                          {id_jogo:"xb_006", nome_jogo:"Killer Instinct", descricao_jogo:"A lendária franquia de luta está de volta com novo visual, ação desenfreada, um elenco selvagem de lutadores, trilha sonora reativa com um rock bem pegado, e até C-C-C-COMBO BREAKERS!!! Escolha seu combatente supremo com animações fluídas, táticas únicas de combate e ataques especiais emocionantes. Use o sistema aberto de combos para acumular combos enormes enquanto seu oponente procura por aberturas para quebrá-lo e virar a mesa. Conecte-se para competir online contra jogadores do mundo todo ou domine as habilidades de combate com tutoriais profundos e combatentes IA inteligentes.", qtd_jogo: 50, preco_jogo: "R$ 80.00", disponibilidade: "Disponível em estoque", categoria_jogo:"luta"}];
    
    response.json({listaJogosXbox})
});

// *lista de jogos ps4
app.get('/jogos/ps4', (request, response) => {

    var listaJogosPs4 = [{id_jogo:"ps_001", nome_jogo:"Destiny 2: Além da Luz", descricao_jogo:"Mergulhe na experiência gratuita de Destiny 2 e vivencie combates de tiro em primeira pessoa. Explore os mistérios do nosso sistema solar, personalize seus Guardiões com equipamentos singulares, e libere habilidades elementares contra poderosos inimigos.", qtd_jogo: 120, preco_jogo: "R$ 149.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, FPS, futurista, mundo aberto"},
                         {id_jogo:"ps_002", nome_jogo:"The Last of Us: Part II", descricao_jogo:"Cinco anos depois da jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabelecem em Jackson, Wyoming. A vida em uma próspera comunidade de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados. Quando um evento violento interrompe essa paz, Ellie embarca em uma jornada implacável para fazer justiça e encontrar uma solução. Enquanto vai atrás de cada um dos responsáveis, ela se confronta com as repercussões físicas e emocionais devastadoras de suas ações.", qtd_jogo: 220, preco_jogo: "R$ 279.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura, pós-apocalipse"},
                         {id_jogo:"ps_003", nome_jogo:"Horizon: Zero Dawn Complete Edition", descricao_jogo:"Como as máquinas dominaram esse mundo e o que pretendem? O que aconteceu com a civilização que habitava esse lugar? Vasculhe cada canto de um reino repleto de relíquias antigas e construções misteriosas para desvendar o passado e desenterrar os vários segredos de uma terra esquecida.", qtd_jogo: 120, preco_jogo: "R$ 79.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura, pós-apocalipse"},
                         {id_jogo:"ps_004", nome_jogo:"Bloodborne", descricao_jogo:"Enfrente seus pesadelos enquanto busca respostas na antiga cidade de Yharnam, agora amaldiçoada com uma estranha doença endêmica que se espalha pelas ruas como fogo. Perigo, morte e loucura estão em cada canto deste sombrio e horroroso mundo, e você deve descobrir seus segredos mais sombrios para sobreviver.", qtd_jogo: 100, preco_jogo: "R$ 79.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura"},
                         {id_jogo:"ps_005", nome_jogo:"Uncharted 4: A Thief's End", descricao_jogo:"Vários anos após sua última aventura, o aposentado caçador de tesouros, Nathan Drake, é forçado a voltar para o mundo dos ladrões. Com riscos muito mais pessoais, Drake embarca em uma jornada pelo mundo em busca de uma conspiração histórica por trás de um famoso tesouro pirata. Sua maior aventura testará seus limites físicos, sua determinação e, finalmente, o que ele está disposto a sacrificar para salvar quem ama.", qtd_jogo: 80, preco_jogo: "R$ 79.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura"},
                         {id_jogo:"ps_006", nome_jogo:"Little Big Planet 3", descricao_jogo:"Em LittleBigPlanet™ 3, você pode descobrir um mundo de infinitas surpresas criativas à medida que explora todos os cantos da Imagisphere. Conheça os habitantes do misterioso planeta Bunkum e enfrente o nefasto Newton neste rico e vibrante mundo.", qtd_jogo: 120, preco_jogo: "R$ 80.00", disponibilidade: "Disponível em estoque", categoria_jogo:"ação e aventura"}]

    response.json({listaJogosPs4})
})

//*lista de jogos pc
app.get('/jogos/pc', (request, response) => {

    var listaJogosPc = [{id_jogo:"pc_001", nome_jogo:"Counter-Strike:Global Offensive", descricao_jogo:"Durante os últimos 12 anos, continuou a ser um dos jogos mais jogados do mundo, uma manchete em torneios de jogos competitivos que vendeu mais 25 milhões de unidades por todo o mundo. O CS: GO promete expandir a jogabilidade do galardoado CS e trazê-la para os que jogam no PC, nas consoles da geração mais recente ou no Mac.", qtd_jogo: 220, preco_jogo: "Gratuito para download", disponibilidade: "Disponível em estoque", categoria_jogo:"FPS, tiro"},
                        {id_jogo:"pc_002", nome_jogo:"Valorant", descricao_jogo:"Mais do que armas e balas, você escolherá um Agente armado com habilidades adaptativas, rápidas e letais que criam oportunidades para deixar seu tiro brilhar. Não há dois Agentes que joguem iguais, assim como não há dois rolos de destaque iguais.", qtd_jogo: 500, preco_jogo: "R$ Gratuito para download", disponibilidade: "Disponível em estoque", categoria_jogo:"FPS, tiro"},
                        {id_jogo:"pc_003", nome_jogo:"Hollow Knigth", descricao_jogo:"Abra seu próprio caminho em Hollow Knight! Uma aventura de ação épica através de um vasto reino em ruínas de insetos e heróis. Explore cavernas sinuosas, lute contra criaturas contaminadas e faça amizade com insetos bizarros, tudo em um estilo 2D clássico desenhado à mão.", qtd_jogo: 100, preco_jogo: "R$ 28.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, 2D, ação e aventura"},
                        {id_jogo:"pc_004", nome_jogo:"Stardew Valley", descricao_jogo:"Você herdou a antiga fazenda de seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, você se prepara para começar sua nova vida. Você pode aprender a viver da terra e transformar esses campos crescidos em uma casa próspera?", qtd_jogo: 100, preco_jogo: "R$ 25.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, ação e aventura"},
                        {id_jogo:"pc_005", nome_jogo:"League of Legends", descricao_jogo:"League of Legends é um jogo de estratégia em que duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.", qtd_jogo: 100, preco_jogo: "Gratuito para download", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, MOBA, ação e aventura"},
                        {id_jogo:"pc_006", nome_jogo:"Destiny 2", descricao_jogo:"Mergulhe na experiência gratuita de Destiny 2 e vivencie combates de tiro em primeira pessoa. Explore os mistérios do nosso sistema solar, personalize seus Guardiões com equipamentos singulares, e libere habilidades elementares contra poderosos inimigos.", qtd_jogo: 500, preco_jogo: "R$ 150.00", disponibilidade: "Disponível em estoque", categoria_jogo:"RPG, FPS, futurista, mundo aberto"}]

    response.json({listaJogosPc})
})

/*atualiza a lista de jogos
app.put('/jogos/xbox', (request,response) =>{

})*/


app.listen(process.env.PORT || 4200);