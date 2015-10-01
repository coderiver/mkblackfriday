head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	$('.js-slider').slick({
		lazyLoad: 'ondemand',
		dots: true,
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
		]
	});


	$('.js-nav').each(function() {
		var nav = $(this),
			navBtn = $('.js-nav-btn'),
			navLink = $('.js-nav a');
		navBtn.click(function() {
			nav.toggleClass('is-active');
			return false;
		});
		$('body').on('click', function() {
			nav.removeClass('is-active');			
		});
		navLink.on('click', function() {
			nav.removeClass('is-active');			
		});
		nav.on('click', function(event) {
			event.stopPropagation();
		});
	});

	//counter

	var a = new Date(); // Now
	var b = new Date(2015, 9, 30, 0, 0, 0, 0); // end date
	var seconds = Math.round((b-a)/1000); // seconds

	clock = $('.js-clock').FlipClock({
		clockFace: 'DailyCounter',
		autoStart: false,
		language: 'ru'
	});
			
	clock.setTime(seconds);
	clock.setCountdown(true);
	clock.start();

	// scroll
	if ($('.js-fixed-nav').length) {
		$(".js-anchor-link").click(function (){
			var id = $(this).data('id'),
				fixedHeight = $('.js-fixed-nav-in').outerHeight(),
				headerHeight = $('.header-fixed').outerHeight();
			$('html, body').animate({
				scrollTop: $('.js-anchor[data-anchor="' + id + '"').offset().top - fixedHeight - headerHeight
			}, 600);
			return false;
		});
		function scrollHeader() {
			if ($('.js-fixed-nav').length) {
				var fixedHeight = $('.js-fixed-nav-in').outerHeight(),
					headerHeight = $('.header-fixed').outerHeight();

				$('.js-anchor').each(function() {
					var navHeight = $('.js-fixed-nav').outerHeight();
					if ($(window).scrollTop() >= $(this).offset().top - fixedHeight - headerHeight) {
						var id = $(this).attr("data-anchor");
						$(".js-anchor-link").removeClass("is-active");
						$(".js-anchor-link[data-id='"+id+"']").addClass("is-active");
					} 
				});
			}
		}
		scrollHeader();

		$(window).resize(function() {
			$('.js-fixed-nav').css('min-height', $('.js-fixed-nav-in').outerHeight());
		});

		$(window).scroll(function() {

			var fixedHeight = $('.js-fixed-nav-in').outerHeight(),
				headerHeight = $('.header-fixed').outerHeight(),
				navTop = $('.js-fixed-nav').offset().top;

			scrollHeader();

			$('.js-fixed-nav').css('min-height', fixedHeight);

			if ($(window).scrollTop() >= navTop - headerHeight) {
				$('.js-fixed-nav .js-fixed-nav-in').addClass('is-fixed');
			}
			else {
				$('.js-fixed-nav .js-fixed-nav-in').removeClass('is-fixed');
			}
		});

		$(window).load(function() {

			var fixedHeight = $('.js-fixed-nav-in').outerHeight(),
				headerHeight = $('.header-fixed').outerHeight(),
				navTop = $('.js-fixed-nav').offset().top;

			scrollHeader();

			$('.js-fixed-nav').css('min-height', fixedHeight);

			if ($(window).scrollTop() >= navTop - headerHeight) {
				$('.js-fixed-nav .js-fixed-nav-in').addClass('is-fixed');
			}
			else {
				$('.js-fixed-nav .js-fixed-nav-in').removeClass('is-fixed');
			}
		});
	};

});