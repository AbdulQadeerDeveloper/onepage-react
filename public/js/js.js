$(document).ready(function () {


    // Smooth scroll to section when clicking on navbar links
    $('.nav-link').click(function (e) {
        var headerHeight = $('header nav').outerHeight();
        var href = $(this).attr('href');

        $('body, html').animate({
            scrollTop: $(href).offset().top - headerHeight // Subtract header height for accurate scrolling
        }, 1300);

        // Close the navbar menu after clicking on a link
        $('.navbar-collapse').collapse('hide');

        e.preventDefault();
    });


    $(window).scroll(function () {
        if ($(document).scrollTop() > 180) {
            $('.navbar').addClass('stick');
        } else {
            $('.navbar').removeClass('stick');
        }
    });

    $(window).scroll(function () {


        var wScroll = $(window).scrollTop();

        if (wScroll > $('.portfolio').offset().top) {
            $('.bar-1').addClass('active');
            $('.bar-2').addClass('active');
            $('.bar-3').addClass('active');
            $('.bar-4').addClass('active');
            $('.bar-5').addClass('active');
            $('.cssProgress-label-1').addClass('active');
            $('.cssProgress-label-2').addClass('active');
            $('.cssProgress-label-3').addClass('active');
            $('.cssProgress-label-4').addClass('active');
            $('.cssProgress-label-5').addClass('active');

            $('.floating-element').css({ transform: 'rotate(' + wScroll / 7 + 'deg) translate3d(0px, 85.285px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(153.219deg) scaleX(1) scaleY(1) scaleZ(1.2)' }, 4000);

        }

        $('.banner').css('background-position', 'center ' + wScroll * .5 + 'px');
        $('.intro').css({ 'margin-top': '' + wScroll / 2 + 'px' });

    });




    window.sr = ScrollReveal();
    sr.reveal('.about-text-section',
        {
            origin: 'right',
            duration: 1000,
            distance: '350px',
            easing: 'ease-in-out',
        }, 10);

    sr.reveal('.left-side',
        {
            origin: 'left',
            duration: 1000,
            distance: '400px',
            easing: 'ease-in-out',
        }, 90);

    sr.reveal('.floating-element-right',
        {
            origin: 'right',
            duration: 1000,
            distance: '100px',
            easing: 'ease-in-out',
        }, 90);




    var introSection = $('.intro'),
        introSectionHeight = introSection.height(),
        //change scaleSpeed if you want to change the speed of the scale effect
        scaleSpeed = .003,
        //change opacitySpeed if you want to change the speed of opacity reduction effect
        opacitySpeed = .1;

    //update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
    var MQ = 1170;

    triggerAnimation();
    $(window).on('resize', function () {
        triggerAnimation();
    });

    //bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
    function triggerAnimation() {
        if ($(window).width() >= MQ) {
            $(window).on('scroll', function () {
                //The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
                window.requestAnimationFrame(animateIntro);
            });
        } else {
            $(window).off('scroll');
        }
    }
    //assign a scale transformation to the introSection element and reduce its opacity
    function animateIntro() {
        var scrollPercentage = ($(window).scrollTop() / introSectionHeight).toFixed(5),
            scaleValue = 1 - scrollPercentage * scaleSpeed * 30;
        //check if the introSection is still visible
        if ($(window).scrollTop() < introSectionHeight) {
            introSection.css({
                '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
                '-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
                'transform': 'scale(' + scaleValue + ') translateZ(0)',
                'opacity': 1 - scrollPercentage * opacitySpeed,
            });
        }
    }

});



