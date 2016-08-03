$(document).ready(function(){


  let removeClass = function(){
    $('#test-form').removeClass('animated flip');
  }

$('#submit-form').on('click', function(){
  $('#test-form').addClass('animated flip');
  setTimeout(removeClass,1000);
})



});
