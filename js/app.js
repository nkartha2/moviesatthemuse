$(document).ready(function(){

	$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
    return false;
	});

	$('button').click(function (){
		$('form').css('display','block');
	});

	$('form button:nth-of-type(1)').click(function(){
		$('form').css('display', 'none');
	});

});