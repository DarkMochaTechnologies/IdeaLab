$(document).ready(function(){
	$(".main").onepage_scroll({
		sectionContainer: "section",
		responsiveFallback: 600,
		loop: true
	});

	if(typeof $('.carousel-container').attr('img-url') != 'undefined') {
		var img_url = $('.carousel-container').attr('img-url');
		var img_files = ['Alinabo', 'Beduya', 'Diana'];
		var done = false;
		for(var i in img_files) {
			$('.carousel-container').append('<img src="'+ img_url + 'V1_' + img_files[i] + '_Black.jpg' +'">');
		}
		$('.carousel-container').slick({
		  dots: true,
		  infinite: true,
		  speed: 500,
		  fade: true,
		  arrows: true,
		  cssEase: 'linear'
		});
	}

});