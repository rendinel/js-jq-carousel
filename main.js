$(document).ready(function(){

   $('.next').click(function() {
     var activeImg = $('.images img.active');
     if (activeImg.hasClass('last')) {
        var firstImage = $('.images img.first');
        firstImage.addClass('active');
        activeImg.removeClass('active');
     } else {
          activeImg.removeClass('active').next().addClass('active');
     }
   })

   $('.fa-angle-left').click(function() {
     $('img.active').removeClass('active').next().addClass('active');
   })

})
