$(document).ready(() => {
  
  $('#botao-replicar').click(() =>{
    const name = $('#campo-nome').val().trim()

    if(name){
      $('#texto-replicado')
      .text('A desenvolvedora mais inscrivel desse ano será a '+ name);
    } else {
      alert('Informe o nome')
    }
      
  })
})