
$(document).ready(() => {

/*
  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"
*/
  const bodyFont = $('body');
  bodyFont.css('font-family', 'Arial, sans-serif');

/*
  2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!
*/
 const nickName = 'natxlu';
 const favorites = 'Frozen, Lion, bela e fera ';
 const city = 'São Paulo';
 const favDoMomento = 'Na natureza Selvagem';

 $('#nickname').text(nickName)
 $('#favoritos').text([favorites, favDoMomento])
 $('#cidade').text(city)
/*
  3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme
*/




/*
  3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe 'titulo' para que ele 
  fique bacanudo
*/
 $('h1')
    .text('Sobre Mim')
    .addClass('titulo')


/*
  4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
*/
$('ul').addClass('list')
$('span').addClass('item-list')
/*
  5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
*/
// $('li').removeClass('wrongClass')

$('li').eq(0).removeClass()
})
