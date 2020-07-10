$(document).ready(function () {
	$('.clients-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 762,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
				},
			},
		],
	});
});
