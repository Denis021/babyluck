$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  });
  $('.header_btn').on('click',function () {
       $('.header_bottom').stop(true,true).slideToggle(500);
    });
});

