


//Image Carousel//
jQuery(document).ready(function($) {
  $('.carousel').slick({
    centerMode: true,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4500,
    variableWidth: true,
    responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
    },
    {
       breakpoint: 400,
       settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }]
});
});