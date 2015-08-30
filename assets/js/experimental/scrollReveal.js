$(document).ready(function(){

	$(window).on('beforeunload', function() {
	    $(window).scrollTop(0);
	});
	var img_url = $('.events').attr('img-url');
	var img_files = ['Alinabo', 'Beduya', 'Diana'];
	for(var i in img_files)
	{
		ease_val = 100 * (i + 1);
		$('.events').append(
			'<div data-sr="ease-in-out 200px reset" class="col 12">' +
				'<div class="polaroid">' +
					'<img class="img-scroll responsive-img" src="'+ img_url + 'V1_' + img_files[i] + '_Black.jpg' +'">' +
				'</div>' +
			'</div>' +
			'<div data-sr="ease-in 400px reset" class="col 12 description-container">' +
				'<div class="section">' +
					'<p class="description">' +
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis leo, elementum id nisi nec, mattis rhoncus felis.' + 
						'Praesent et lectus suscipit, bibendum tellus at, finibus metus. Nullam egestas dignissim pulvinar. Morbi rutrum dolor sed ligula maximus,' + 
					'</p>' +
				'</div>' +
			'</div>'
		);
	}
	//initialize scroll reveal
	window.sr = new scrollReveal();
});