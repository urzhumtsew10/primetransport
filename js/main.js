 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

jQuery(document).ready(function($) {

	"use strict";

	$(".loader").delay(1000).fadeOut("slow");
  $("#overlayer").delay(1000).fadeOut("slow");	


var siteMenuClone = function() {

	$('.js-clone-nav').each(function() {
		var $this = $(this);
		$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
	});

	setTimeout(function() {
		var counter = 0;
		$('.site-mobile-menu .has-children').each(function(){
			var $this = $(this);

			$this.prepend('<span class="arrow-collapse collapsed">');

			$this.find('.arrow-collapse').attr({
				'data-toggle' : 'collapse',
				'data-target' : '#collapseItem' + counter,
			});

			$this.find('> ul').attr({
				'class' : 'collapse',
				'id' : 'collapseItem' + counter,
			});

			counter++;
		});
	}, 1000);

	$('body').on('click', '.arrow-collapse', function(e) {
		var $this = $(this);
		if ( $this.closest('li').find('.collapse').hasClass('show') ) {
			$this.removeClass('active');
		} else {
			$this.addClass('active');
		}
		e.preventDefault();  
	});

	$(window).resize(function() {
		var $this = $(this),
			w = $this.width();

		if ( w > 768 ) {
			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
			}
		}
	});

	$('body').on('click', '.js-menu-toggle', function(e) {
		var $this = $(this);
		e.preventDefault();

		if ( $('body').hasClass('offcanvas-menu') ) {
			$('body').removeClass('offcanvas-menu');
			$this.removeClass('active');
		} else {
			$('body').addClass('offcanvas-menu');
			$this.addClass('active');
		}
	});

	// Click outside offcanvas
	$(document).mouseup(function(e) {
		var container = $(".site-mobile-menu");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
			}
		}
	});

	// Close offcanvas when menu item is clicked
	$('body').on('click', '.site-mobile-menu a', function(e) {
		var $this = $(this);
		if ($this.attr('href') !== '#' && !$this.closest('li').hasClass('has-children')) {
			$('body').removeClass('offcanvas-menu');
			$('.js-menu-toggle').removeClass('active');
		}
	});

}; 
siteMenuClone();

var sitePlusMinus = function() {
	$('.js-btn-minus').on('click', function(e){
		e.preventDefault();
		if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
		} else {
			$(this).closest('.input-group').find('.form-control').val(parseInt(0));
		}
	});
	$('.js-btn-plus').on('click', function(e){
		e.preventDefault();
		$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
	});
};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    smartSpeed: 1000,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	

	// var siteCountDown = function() {

	// 	$('#date-countdown').countdown('2020/10/10', function(event) {
	// 	  var $this = $(this).html(event.strftime(''
	// 	    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
	// 	    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
	// 	    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
	// 	    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
	// 	    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
	// 	});
				
	// };
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	// siteDatePicker();

	// var siteSticky = function() {
	// 	$(".js-sticky-header").sticky({topSpacing:0});
	// };
	// siteSticky();

	$(document).ready(function() {
		var siteSticky = function() {
			if ($.fn.sticky) {
				$(".js-sticky-header").sticky({topSpacing:0});
			} else {
				console.error("Sticky plugin is not loaded.");
			}
		};
		siteSticky();
	});
	
// 	// navigation
//   var OnePageNavigation = function() {
//     var navToggler = $('.site-menu-toggle');

//    	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
//       e.preventDefault();

//       var hash = this.hash;

//       $('html, body').animate({
//         'scrollTop': $(hash).offset().top - 50
//       }, 600, 'easeInOutExpo', function() {
//         // window.location.hash = hash;

//       });

//     });
//   };
//   OnePageNavigation();

  var siteScroll = function() {
  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

// numbers`s animation in the section about
  var counter = function() {
		
		$('#about-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();



});


const blocks = document.querySelectorAll('.js_images');
const texts = document.querySelectorAll('.js_text');
const section = document.querySelector('.main-section');

let currentBlockIndex = 0;
let currentImageIndex = 0;

function showNextImage() {
	const currentBlock = blocks[currentBlockIndex];
	const images = currentBlock.querySelectorAll('img');

	images[currentImageIndex].classList.remove('active');
	currentImageIndex = (currentImageIndex + 1) % images.length;
	images[currentImageIndex].classList.add('active');

	updateSectionBackground(); 
}

function showNextBlock() {
	blocks[currentBlockIndex].classList.remove('active');
	texts[currentBlockIndex].classList.remove('active');

	currentBlockIndex = (currentBlockIndex + 1) % blocks.length;

	blocks[currentBlockIndex].classList.add('active');
	texts[currentBlockIndex].classList.add('active');

	updateSectionBackground(); 
}

function showNextSlide() {
	showNextImage();

	if (currentImageIndex === 0) {
		showNextBlock();
	}
}

function updateSectionBackground() {
	const backgroundClass = `background-${(currentBlockIndex % 5) + 1}`;
	section.className = `main-section ${backgroundClass}`;
}

// Почати показ слайдів
setInterval(showNextSlide, 2000);

window.addEventListener('scroll', function() {
	const scrollPosition = window.scrollY;
	const hiddenBtnMob = document.querySelector(".hidden_btn_mob");
	
	if (scrollPosition > 500) { 
	  hiddenBtnMob.style.display = 'block';
	} else {
	  hiddenBtnMob.style.display = 'none';
	}
  });

function scrollToSection(event) {
	event.preventDefault();
	const targetId = event.target.getAttribute('href').substring(1);
	const targetElement = document.getElementById(targetId);
	const yOffset = 82.78; // Высота смещения от верха страницы в пикселях
	const y = targetElement.getBoundingClientRect().top + window.pageYOffset - yOffset;

	window.scrollTo({ top: y, behavior: 'smooth' });
}

$(document).ready(function(){
	function initOwlCarousel() {
	  var loopValue = $(window).width() >= 1000 ? false : true;
	  $('.owl-carousel').owlCarousel({
		loop: loopValue,
		margin: 10,
		nav: true,
		autoplay: true,
		autoplayTimeout: 3000, // Интервал прокрутки (3000 миллисекунд = 3 секунды)
		responsive: {
		  0: {
			items: 1
		  },
		  600: {
			items: 1
		  },
		  1000: {
			items: 3
		  }
		}
	  });
	}
  
	// Initial initialization
	initOwlCarousel();
  
	// Reinitialize on window resize
	$(window).resize(function() {
	  $('.owl-carousel').trigger('destroy.owl.carousel');
	  initOwlCarousel();
	});
  });