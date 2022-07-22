const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
});

new Accordion('.accordion-container');



$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu-burger').toggleClass('active');
  });
});

 