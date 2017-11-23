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

$('.bxslider').bxSlider({
  pager: false
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