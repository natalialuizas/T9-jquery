$(document).ready(() => {

  $('p').html(`<span class="cor">Hello</span`);

  $('li').addClass('margin')

  $('li').removeClass('item')

  $('p').click(function() {
    $(this).toggleClass("destaque")
  })
})