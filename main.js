$(document).ready(function(){
   // freccia destra
   $('.next').click(function() {
     var activeImg = $('.images img.active');
         activeImg.removeClass('active');

     if (activeImg.hasClass('last')) {
        var firstImage = $('.images img.first');
        firstImage.addClass('active');
     } else {
          activeImg.removeClass('active').next().addClass('active');
     }
   })
    // freccia sinistra
   $('.prev').click(function() {
     var activeImgTwo = $('.images img.active');
     activeImgTwo.removeClass('active');

     if (activeImgTwo.hasClass('first')) {
        var lastImage = $('.images img.last');
        lastImage.addClass('active');
     } else {
       activeImgTwo.removeClass('active').prev().addClass('active');
     }
   })

   $('.next').click(function() {
     var activeDot = $('.nav .fa-circle.active');
         activeDot.removeClass('active');

     if (activeDot.hasClass('last')) {
        var firstDot = $('.nav .fa-circle.first');
        firstDot.addClass('active');
     } else {
          activeDot.removeClass('active').next().addClass('active');
     }
   })

   $('.prev').click(function() {
     var activeDotTwo = $('.nav .fa-circle.active');
     activeDotTwo.removeClass('active');

     if (activeDotTwo.hasClass('first')) {
        var lastDot = $('.nav .fa-circle.last');
        lastDot.addClass('active');
     } else {
       activeDotTwo.removeClass('active').prev().addClass('active');
     }
   })



})
