//1. Faça com que os elementos dentro do menu aparecem quando o mouse passar por eles.
//2. Os elementos devem desaparecer quando o mouse não estiver passando por eles

$(document).ready(() => {
  $(this).mouseenter(() =>{
    let ligado = true;

    if(ligado) {
      $('.menu2').css('display', 'block');
      ligado = false;
    } else {
      $('.menu2').css('display', 'none');
    }
     
  })
})