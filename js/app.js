$(document).ready(function(){

	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
    return false;
	});

	$('article button').click(function (){
		$('form').css('display','block');
		$('form').css('position', 'fixed');
	});

	$('form button:nth-of-type(1)').click(function(){
		$('form').css('display', 'none');
	});

	$('.bxslider').bxSlider({
	  preloadImages: 'all',
	  touchEnabled: true,
	  controls: false,
	  infiniteLoop: true,
	  auto:true,
	  useCSS: false,
	  pause:4500
	});
});