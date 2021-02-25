$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list li').click(function(event) {
		$(this).toggleClass('opened');

	});
	$('.footer__title').click(function(event) {
		if (document.body.clientWidth < 900) {
			$(this).toggleClass('opened').next().slideToggle(250); 
		}
	});
	window.onscroll = function showHeader() {
		var header = document.querySelector('.header');

		if(window.pageYOffset > 50) {
			header.classList.add('moving');
		} else {
			header.classList.remove('moving');
		}
	};

	let transformed = 0;
	$('.view__arrow-right').click(function(event) {
		var width = document.getElementById('view-slider').offsetWidth;
		var count = $('.view__slider').children().length;
		if(transformed > ((count-1)*(-width))) {
			transformed -= width;
			document.getElementById('view-slider').style.transform = 'translateX(' + transformed + 'px)';
			console.log(transformed);
			if (transformed == (count-1)*(-width)) {
				document.getElementById('view-right').style.display = 'none';
			}
			if(transformed != 0) {
				document.getElementById('view-left').style.display = 'block';
			}
		}
	});
	$('.view__arrow-left').click(function(event) {
		var width = document.getElementById('view-slider').offsetWidth;
		var count = $('.view__slider').children().length;
		if(transformed != 0) {
			transformed += width;
			document.getElementById('view-slider').style.transform = 'translateX(' + transformed + 'px)';
			if (transformed != (count-1)*(-width)) {
				document.getElementById('view-right').style.display = 'block';
			}
			if(transformed == 0) {
				document.getElementById('view-left').style.display = 'none';
			}
		};


		
		//var totalWidth = width*count;



	})

});