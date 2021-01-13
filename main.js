$(document).ready(function(){

   $('.fas fa-angle-right').click(function() {
     $('.photo.active').removeClass('active').next().adClass('active');
   })

   $('.fas fa-angle-left').click(function() {
     $('.photo.active').removeClass('active').next().adClass('active');
   })

})
