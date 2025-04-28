$(document).ready(function () {
    // Mobile menu toggle (fa-bars to fa-times)
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll functionality for sticky header background change
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 35) {
            $('.header').css({'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)'});
        } else {
            $('.header').css({'background': 'none', 'box-shadow': 'none'});
        }
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 120;  // Adjust speed for counting
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc); // Rounds to the nearest whole number
                setTimeout(updateCount, 10);  // Increased timeout for smoother animation
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Owl Carousel setup
    (function ($) {
        "use strict";

        $(".clients-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {0: {items: 2}, 768: {items: 4}, 900: {items: 6}}
        });

        $(".testimonials-carousel").owlCarousel({
            autoplay: true,
            dots: true,
            loop: true,
            responsive: {0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4}}
        });

    })(jQuery);

    // Back to top button functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Accordion functionality
    $('.accordion .accordion-body').hide(); // Initially hide all accordion bodies

    $('.accordion-header').click(function () {
        // Slide up all bodies (close all)
        $('.accordion .accordion-body').slideUp(500);

        // If the clicked header's body is hidden, slide it down (open)
        if ($(this).next('.accordion-body').is(":hidden")) {
            $(this).next('.accordion-body').slideDown(500);
        }

        // Change icon to minus for the active header
        $('.accordion-header span').text('+');
        $(this).children('span').text('-');
    });

});
const track = document.getElementsByClassName("graphic-img-container")
window.onmousedown = e => {
    track.dataset.mouseD
    
ownAt = e.clientX;
}


// graphics samples
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";



