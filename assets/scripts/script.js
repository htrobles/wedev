$(document).ready(function () {
	$('.clients-slider').slick({
		dots: false,
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

const toggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

toggler.addEventListener(
	'click',
	() => {
		if (!isNavbarDark) {
			navbar.classList.toggle('dark');
		}
	},
	false
);

let isNavbarDark = false;

window.onscroll = function (event) {
	if (this.scrollY > 100) {
		if (!isNavbarDark) {
			isNavbarDark = true;
			navbar.classList.add('dark');
		}
	} else {
		if (isNavbarDark) {
			isNavbarDark = false;
			navbar.classList.remove('dark');
		}
	}
};
