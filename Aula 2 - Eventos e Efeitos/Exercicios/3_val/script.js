$(document).ready(() => {
  
  $('#botao-replicar').click(() =>{
    const name = $('#campo-nome').val()
      $('#texto-replicado')
            .text(name);
  })})