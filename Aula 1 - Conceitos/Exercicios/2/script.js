/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/
//Jquery

$(document).ready(() => {
  
  const bodyColor = $('body');
  bodyColor.css('background', 'white');

 const changeBg = () => {
   if(bodyColor[0].style.background == 'white'){
     bodyColor.css('background', 'black')
     $('h1')
         .text('Desligado')
         .css('color','white')
     $('.imagem').attr('src','https://media.giphy.com/media/Ut1vFgEA2Zlcc/giphy.gif')
   } else {
    bodyColor.css('background', 'white')
    $('h1')
        .text('Ligado')
        .css('color','black')
    $('.imagem').attr('src','https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif')
   }
   
   
 }

 $('#botao').click(() => changeBg())

})