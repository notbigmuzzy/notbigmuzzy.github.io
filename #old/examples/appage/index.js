$(document).ready(function() {

    // CALC MATH STUFF
    document.getElementById('calc').onload=init_calc('calc');

});

$(document).ready(
  function (){
    $('.demo-load').click(function() {
      
        $('.demo-load').css('display','none');
        $('.demo-wrapper').css('background','white');

        $('.demo-status').css('display','block');
        $('.demo-status').animate({opacity:"1"},0);
        $('.demo-status').animate({top:"0"},200);
        $('.calculator').css('display','table');
        $('.calculator').animate({opacity:"1"},0);
        $('.calculator').animate({top:"21"},0);


    });
    $('.test-button').click(function() {
      
        $('.demo-load').css('display','none');
        $('.demo-wrapper').css('background','white');

        $('.demo-status').css('display','block');
        $('.demo-status').animate({opacity:"1"},0);
        $('.demo-status').animate({top:"0"},200);
        $('.calculator').css('display','table');
        $('.calculator').animate({opacity:"1"},0);
        $('.calculator').animate({top:"21"},0);

    });
});




$(window).scroll(function(){

  var ySkrol = $(this).scrollTop();

  $('.pg1-phone').css(
      {'transform' : 'translate(0px, '+ ySkrol/10 +'%)'}
    );

});
