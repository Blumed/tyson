    $(document).ready(function() {
        $('.slider').slick({
        	fade: true,
            autoplay: true,
            dots: false,
  			infinite: true,
  			lazyLoad: 'ondemand',
            adaptiveHeight: true,
            autoplaySpeed: 2000,
            speed: 900,
            prevArrow: '.prev',
            nextArrow: '.next',
            mobileFirst: true
        });
    });
