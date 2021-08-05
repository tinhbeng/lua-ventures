'use strict'

jQuery(document).ready(function ($) {
    $(document).on("scroll", onScroll);
    $('.partner-box').slick({
        dots: true,
        rows: 2,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.portfolio-box').slick({
        dots: true,
        rows: 2,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.nav-icon').on('click', function () {
        let element = $(this).closest('.nav-wrap').find('.navigation');
        if (element.hasClass('show')) {
            element.removeClass("show");
        } else {
            element.addClass("show");
        }

    })
    $('.is-child').on('click', function (e) {
        e.preventDefault();
        $(this).find('> ul').toggleClass('dropdown');
    })
    $(document).mouseup(function (e) {
        var container = $(".navigation.show");
        var icon = $('.icon-mobile');

        // if the target of the click isn't the container nor a descendant of the container
        if (icon.is(e.target) === false && !container.is(e.target) && container.has(e.target).length === 0) {
            if (container.hasClass('show')) {
                container.removeClass("show");
            } else {
                container.addClass("show");
            }
        }
    });

    $(".navigation a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        let element = $(this).closest('.nav-wrap').find('.navigation');
        if (element.hasClass('show')) {
            element.removeClass("show");
        }
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            $(document).off("scroll");
            $('.navigation a').removeClass('active')
            $(this).addClass('active')
            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.navigation a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top < scrollPos && refElement.position().top + refElement.height() >= scrollPos) {
                $('.navigation a').removeClass("active");
                currLink.addClass("active");
            }
            else {
                currLink.removeClass("active");
            }
        });
    }
});