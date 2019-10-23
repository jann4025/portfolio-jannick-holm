import Rellax from 'rellax';
('use strict');
document.addEventListener('DOMContentLoaded', start);

document.addEventListener('scroll', readScroll);

function start() {
	var rellax = new Rellax('.rellax');
	console.log('Connection between the DOM and the Script was successfull! Nice 😎');
	document.querySelector('.button_container').addEventListener('click', menuOpen);
	document.querySelectorAll('ul li a span').forEach((links) => {
		links.addEventListener('click', menuOpen);
	});

	document.addEventListener(
		'scroll',
		function() {
			let scrollTop = document.documentElement['scrollTop'] || document.body['scrollTop'];
			let scrollBottom =
				(document.documentElement['scrollHeight'] || document.body['scrollHeight']) -
				document.documentElement.clientHeight;
			let scrollPercent = scrollTop / scrollBottom * 100 + '%';
			document.getElementById('_progress').style.setProperty('--scroll', scrollPercent);
		},
		{ passive: true }
	);
}

function menuOpen() {
	document.querySelector('.button_container').classList.toggle('menu-open');
	document.querySelector('.menu').classList.toggle('open');
}

function readScroll() {
	var scrollPosY = window.pageYOffset;
	console.log(scrollPosY >= 0);

	scrollPosY >= 0 || scrollPosY < 701 ? linkChangeHome() : '';
	scrollPosY >= 701 ? portfolioLinkChange() : '';
	scrollPosY >= 3296 ? aboutLinkChane() : '';

	// if (scrollPosY > 0) {
	// 	document.querySelector('.home-link').classList.add('active');
	// } else if (scrollPosY >= 701) {
	// 	document.querySelector('.active').classList.remove('active');
	// 	document.querySelector('.portfolio-link').classList.add('active');
	// }
}

function linkChangeHome() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.home-link').classList.add('active');
}

function portfolioLinkChange() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.portfolio-link').classList.add('active');
}

function aboutLinkChane() {
	document.querySelector('.active').classList.remove('active');
	document.querySelector('.about-link').classList.add('active');
}
