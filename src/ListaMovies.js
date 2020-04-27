const ListaMovies = [
    {
        id: '1',
        url: 'https://www77.o0-1.com/token=21uXbODDaG6Ms6O1R49RWw/1587822023/187.0.0.0/99/9/4a/f39139c178eba6d83831f0a26df854a9-480p.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/10/28/17/03/2119894.jpg',
        name: 'O Silêncio do Pantâno',
        subtitle: 'Em O Silêncio do Pântano, Q (Pedro Alonso) é um ex-jornalista reconvertido em um escritor de livros de romances policiais. Ele é um homem de sucesso respeitado por seus fãs mas, na vida real, Q é um psicopata de sangue frio. O escritor vive em uma compulsão por matar que, eventualmente, ele traduz a seus romances, escrevendo sobre isso como se fosse ficção.',
        backgroundImage: ''
    },
    {
        id: '2',
        url: 'https://p2p.nohost.me/download/videos/bcad8145-af7c-4b76-b426-e5fb352673b2-1080.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg',
        name: 'O Rei Leão',
        subtitle: 'Traído e exilado de seu reino, o leãozinho Simba precisa descobrir como crescer e retomar seu destino como herdeiro real nas planícies da savana africana. ',
        backgroundImage: 'https://deveserisso.com.br/blog/wp-content/uploads/2019/02/o-rei-leao-2019.jpg'
    },
    {
        id: '3',
        url: 'https://p2p.nohost.me/download/videos/67efea7e-b976-4528-a171-dd1cb14afdb9-804.mp4',
        image: 'https://upload.wikimedia.org/wikipedia/pt/9/9f/Sonic_the_Hedgehog_2019.jpg',
        name: 'Sonic: O Filme',
        subtitle: 'Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.',
        backgroundImage: 'https://images8.alphacoders.com/105/thumb-1920-1052054.jpg'
    },
    {
        id: '4',
        url: 'https://p2p.nohost.me/download/videos/3da24121-fe30-403e-9f7f-c61a2f96cdfe-536.mp4',
        image: 'https://static1.purebreak.com.br/articles/5/73/76/5/@/278584-filmagens-de-malevola-2-com-angelina-696x0-3.jpg',
        name: 'Malévola: Dona do Mal',
        subtitle: 'Malévola e sua afilhada Aurora começam a questionar os complexos laços familiares que as prendem à medida que são puxadas em direções diferentes por casamentos, aliados inesperados e novas forças sombrias em jogo',
        backgroundImage: 'https://media.metrolatam.com/2019/10/17/ang-766b210484e85c07168ea0d3cc085468-1200x600.jpg'
    },
    {
        id: '5',
        url: 'https://p2p.nohost.me/download/videos/c0a84234-86c4-42bd-887a-427ae0a445aa-720.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/12/12/22/35/3598465.jpg',
        name: 'Minha Mãe É uma Peça 3',
        subtitle: 'Dona Hermínia precisa se redescobrir e se reinventar porque seus filhos estão formando novas famílias. Marcelina está grávida e Juliano vai casar. Dona Hermínia está mais ansiosa do que nunca. Para completar as confusões, Carlos Alberto, seu ex-marido, que esteve sempre por perto, agora resolve se mudar para o apartamento ao lado',
        backgroundImage: 'https://www.diariodaamazonia.com.br/gerenciador/data/uploads/2020/01/RECORDE.jpg'
    },
    {
        id: '6',
        url: 'https://p2p.nohost.me/download/videos/9e6878cd-0602-4ab5-a4e1-6ed4e503a43c-536.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg',
        name: 'Vingadores: Ultimato',
        subtitle: 'Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.',
        backgroundImage: 'https://http2.mlstatic.com/papel-de-parede-infantil-herois-marvel-vingadores-3m-hma02-D_NQ_NP_722001-MLB31552749025_072019-F.jpg'
    },
    {
        id: '7',
        url: 'https://user-content-hot-128.molyusercontentstage.me/xqx2oa67kbokjiqbtgycn4aduhhlbbe4ykiffk7k72p7gxy6uvfgnpqapgcq/9wplixa6qxq5.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/02/21/21/08/3735597.jpg',
        name: 'Shazam!',
        subtitle: 'Billy Batson tem apenas 14 anos de idade, mas recebeu de um antigo mago o dom de se transformar em um super-herói adulto chamado Shazam. Ao gritar a palavra SHAZAM!, o adolescente se transforma nessa sua poderosa versão adulta para se divertir e testar suas habilidades. Contudo, ele precisa aprender a controlar seus poderes para enfrentar o malvado Dr. Thaddeus Sivana',
        backgroundImage: 'https://cdn.wallpapersafari.com/55/10/UfiLwO.jpg'
    },
    {
        id: '8',
        url: 'https://user-content-hot-154.molyusercontentstage.me/xqx2pbp3kbokjiqbtg3cnlihvn6udxlunfadkkfytbpdenjcitxlk4fhtfqq/dszmclcbeyvc.mp4',
        image: 'https://pad.mymovies.it/img/image/?size=400&image=https://pad.mymovies.it/cinemanews/2019/161117/locandina-ver.jpg',
        name: 'Midway - Batalha em Alto Mar',
        subtitle: 'Em quatro de julho de 1942, a marinha japonesa planeja ataques contra os navios americanos no Pacífico. Nos três dias seguintes, um esquadrão de bravos pilotos de combate enfrentam o inimigo em uma das batalhas mais importantes e decisivas da Segunda Guerra Mundial',
        backgroundImage: 'https://1.bp.blogspot.com/-MuMHrkB6Rj8/XaUNp48B3dI/AAAAAAAAMOI/0mwsGGlrpsALBVTdDci0LP-bN3ZLvLvKQCLcBGAsYHQ/s1600/midway.jpg'
    },
    {
        id: '9',
        url: 'https://user-content-hot-111.molyusercontentstorage.me/xqx2ojjbkbokjiqbtgwsnpicu3f2fumd367v7p6djjkcmmxyfey2tpsog47q/tvwytg9h0k6l.mp4',
        image: 'https://br.web.img3.acsta.net/pictures/19/09/17/19/29/5316438.jpg',
        name: 'Aves de Rapina: Arlequina e Sua Emancipação Fantabulosa',
        subtitle: 'Depois de se aventurar com o Coringa, Arlequina se junta a Canário Negro, Caçadora e Renee Montoya para salvar a vida de uma garotinha do criminoso Máscara Negra em Gotham City.',
        backgroundImage: 'https://timeline.canaltech.com.br/334175.1400/aves-de-rapina-arlequina-e-figura-central-em-novo-poster-do-filme.jpg'
    },   
];

export default ListaMovies;