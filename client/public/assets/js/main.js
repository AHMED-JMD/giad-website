
(function ($) {
    "use strict";

    $(function(){
        AOS.init({
    offset: 170,        
 easing: 'ease-in-out',
    once: true,
    duration: '1000'
    });
    }); 
    
        $(function(){ 
        	    $(window).on('scroll', function () {
			if ($(this).scrollTop() > 150) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200);
			return false;
		});
    });
    
    /* Page Scroll to section */
        var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
    });
    
    })(jQuery);