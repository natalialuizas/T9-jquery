$(document).ready(() => {
  $('#botaoAbrir').click(() => {
     $('#menulateral').css('display', 'block')
     $('.div-botao').css('margin-left', '250px')
  })

  $('#botaoFechar').click(() => {
    $('#menulateral').css('display', 'none')
    $('.div-botao').css('margin-left', '0')
  })

  // $("#botaoAbrir").mouseenter(() => {
  //   $('#menulateral').css('display', 'block')
  // })

  $("#menulateral").mouseleave(() => {
    $('#menulateral').css('display', 'none')
  })
})