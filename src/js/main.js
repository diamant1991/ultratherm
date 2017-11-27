$('.dropdown-btn').click(function(e) {
  e.preventDefault()
  var menu = $(this).next()
  if(menu.is(":hidden")){
    $(this).addClass('active')
    menu.slideDown(250)
  }
  else{
    $(this).removeClass('active')
    menu.slideUp(250)
  }
});

$.fn.equivalent = function (){
  var $blocks = $(this),
      maxH    = $blocks.eq(0).height(); 
  $blocks.each(function(){
      maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
  });

  $blocks.height(maxH); 
}
// $('.product__item').equivalent();

$("#range_01").ionRangeSlider({
    min: 0,
    max: 2100,
    max_postfix: " мм"
});
$("#range_02").ionRangeSlider({
    min: 0,
    max: 6100,
    max_postfix: " мм"
});

$('.main-slider__item .bxslider').bxSlider({
  pager: false
});

$('.card__slider__item .bxslider').bxSlider({
  pagerCustom: '#thumb',
  controls: false,
  mode: 'fade'
});

// Select
$('.slct').click(function(){
  var dropBlock = $(this).parent().find('.drop');
  var calcItem = $(this).closest('.calculation__block').next()

  if( dropBlock.is(':hidden') ) {
    dropBlock.slideDown(100);
    calcItem.addClass('low-opacity')

    $(this).addClass('active');
    $('.drop').find('li').click(function(){
      var selectResult = $(this).html();
      $(this).parent().parent().find('input').val(selectResult);
      $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

      dropBlock.slideUp(100);
      calcItem.removeClass('low-opacity')
    });
  
  } else {
    $(this).removeClass('active');
    dropBlock.slideUp(100);
    calcItem.removeClass('low-opacity')
  }

  return false;
});

$(document).mouseup(function (e) {
    var container = $(".drop");
    if (container.has(e.target).length === 0){
        container.slideUp(100);
        $('.slct').removeClass('active');
        $('.calculation__block').removeClass('low-opacity')
    }
});

var owl = $(".cutting__carousel").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  onInitialized: carouselInitialized,
  nav: true,
  navText: ["<a class='cutting__arrow__item cutting__arrow__item_up'></a>",
            "<a class='cutting__arrow__item cutting__arrow__item_bottom'></a>"],
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
});

function carouselInitialized(event){
  var activeText = $('.cutting__carousel .owl-item.active').find('.item').attr('data-text');
  $('.cutting__arrow__text').text(activeText)
}
owl.on('changed.owl.carousel',function(property){
  var current = property.item.index;
  var slideText = $(property.target).find(".owl-item").eq(current).find('.item').attr('data-text');
  $('.cutting__arrow__text').text(slideText)
});

$('.setting__title').click(function() {
  var sContent = $(this).next();
  var sHeader = $(this).closest('.setting__item');
  if(sContent.is(':hidden')){
    sContent.slideDown(250)
    sHeader.addClass('active')
  }
  else{
    sContent.slideUp(250)
    sHeader.removeClass('active')
  }
});

if($('.card-info').length){
  var blockPos, winPosMain, formItem, blockWidth, formHeight;
  blockPos = $('.card-info').offset().top;
  formHeight = $('.calculation').height();
  console.log(formHeight)
  formItem = $('.calculation').offset().top - formHeight;
  blockWidth = $('.card-info').width()

  if(window.matchMedia('(min-width: 1200px)').matches){
    $(window).scroll(function() {
      winPosMain = $(window).scrollTop();
      
      if (winPosMain >= blockPos) {
        $('.card-info').addClass('fixed')
        $('.card-info').css({
          width: blockWidth + 'px',
          padding: '10px'
        });

        if(winPosMain >= formItem){
          $('.card-info').removeClass('fixed')
          $('.card-info').css({
            width: 'auto',
            padding: '0'
          });
        }
      } 
      else {
        $('.card-info').removeClass('fixed')
        $('.card-info').css({
          width: 'auto',
          padding: '0'
        });
      }
    });
  }
}

