$(document).ready(function(){

   $('.fa-angle-right').click(function() {
     $('img.active').removeClass('active').next().addClass('active');
     if ('active' === 'first') {
       $('first').show()
     }
   })

   $('.fa-angle-left').click(function() {
     $('img.active').removeClass('active').next().addClass('active');
     if ('active' === 'last') {
       $('last').show()
     }
   })

})
