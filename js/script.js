/*fullPage*/

new fullpage('#fullpage', {
   autoScrolling: true
});

/*sticky-menu*/

window.addEventListener('scroll', function() {
   let topMenu = document.querySelector('.nav');
   topMenu.classList.toggle('sticky', window.scrollY > 0);
});

/*sliders*/

$('.wedding__sl').on('init', function(event, slick){
   var dots = $( '.slick-dots li' );
   console.log( 'SRANZAN VEE' );
   dots.each( function( k, v){
     $(this).find( 'button' ).addClass( 'heading'+ k );
   });
   var items = slick.$slides;
   items.each( function( k, v){
       var text = $(this).find( 'h2' ).text();
       $( '.heading' + k ).text(text);
   });
 });

$(document).ready(function() {
   $('.wedding__sl').slick({
      slidesToShow: 1,
      asNavFor: '.wedding__sl-info',
      arrows: false,
      dots: true,
      infinite: false,
      speed: 1200,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               centerMode: false,
            }
         }
      ]
   });
});

$(document).ready(function() {
   $('.wedding__sl-info').slick({
      slidesToShow: 1,
      asNavFor: '.wedding__sl',
      fade: true,
      speed: 1200,
      infinite: false,
      responsive: [
         {
            breakpoint: 770,
            settings: {
               arrows: false,
            }
         }
      ]
   });
});

$(document).ready(function() {
   $('.socials__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
      responsive: [
         {
            breakpoint: 1025,
            settings: {
               slidesToScroll: 1,
            }
         }
      ],
      responsive: [
         {
            breakpoint: 881,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ],
      responsive: [
         {
            breakpoint: 769,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ],
      responsive: [
         {
            breakpoint: 541,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         }
      ]
   });
});

$(document).ready(function() {
   $('.partners__slider').slick({
      slidesToShow: 1,
      infinite: false,
   });
});

$(document).ready(function() {
   $('.biography__slider').slick({
      slidesToShow: 1,
      infinite: false,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false,
            }
         }
      ]
   });
});

/*burger-menu*/

let burgerMenuButton = document.querySelector('.burger-menu__btn');
let navOverlay = document.querySelector('.nav-overlay');
let nav = document.querySelector('.nav');

burgerMenuButton.addEventListener('click',() => {
   burgerMenuButton.classList.toggle('burger-active');
   navOverlay.classList.toggle('overlay-active');
   nav.classList.toggle('nav-active');
});