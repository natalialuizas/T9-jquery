$(document).ready(() => {

$('h1').css('color', '#f66')
$('h1').css('font-size', '50px;')
$('h1').hide()
$('h1').delay('2000')
$('h1').fadeIn('slow')
$('h1').text('olá meninas')

// encadeamento de bloco
$('h1')
    .css('color', '#f66')
    .hide()
    .delay('5000')
    .fadeIn('slow')
    .text('olá meninas')

// chamando pelo classe
$('.item1').click(() => {
  $('body').css('background', 'blue')
  $('h1').css('color', '#fff')
})

// obj
$('li').css({
  color: 'red',
  display: 'flex',
  padding: '20px',

})
// chamando o id
$('#item2').css('color', 'yellow')

//chamando seletor universal
$('*').css({
  padding: '40px',
  display:'flex'
})


})



