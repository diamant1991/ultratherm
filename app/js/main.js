$(".dropdown-btn").click(function(i){i.preventDefault();var e=$(this).next();e.is(":hidden")?($(this).addClass("active"),e.slideDown(250)):($(this).removeClass("active"),e.slideUp(250))}),$.fn.equivalent=function(){var i=$(this),e=i.eq(0).height();i.each(function(){e=$(this).height()>e?$(this).height():e}),i.height(e)},$("#range_01").ionRangeSlider({min:0,max:2100,max_postfix:" мм"}),$("#range_02").ionRangeSlider({min:0,max:6100,max_postfix:" мм"}),$(".bxslider").bxSlider({pager:!1}),$(".slct").click(function(){var i=$(this).parent().find(".drop"),e=$(this).closest(".calculation__block").next();return i.is(":hidden")?(i.slideDown(100),e.addClass("low-opacity"),$(this).addClass("active"),$(".drop").find("li").click(function(){var t=$(this).html();$(this).parent().parent().find("input").val(t),$(this).parent().parent().find(".slct").removeClass("active").html(t),i.slideUp(100),e.removeClass("low-opacity")})):($(this).removeClass("active"),i.slideUp(100),e.removeClass("low-opacity")),!1}),$(document).mouseup(function(i){var e=$(".drop");0===e.has(i.target).length&&(e.slideUp(100),$(".slct").removeClass("active"),$(".calculation__block").removeClass("low-opacity"))});