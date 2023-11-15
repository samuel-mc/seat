(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });

})(jQuery);

toggleMenu = () => {
    const toggleMenu = document.querySelector('#toggleMenu');
    toggleMenu.classList.toggle('showMenu');
}

const handlereadMore1 = () => {
    const dots1 = document.querySelectorAll('.dots1');
    const moreText1 = document.querySelectorAll('.moreText1');
    const readMore1 = document.querySelectorAll('.readMore1');

    const isNone = Array.from(dots1).every(dot => dot.style.display === 'none');

    if (isNone) {
        dots1.forEach(dot => dot.style.display = 'inline');
        readMore1.forEach(read => read.innerHTML = 'Read more');
        moreText1.forEach(text => text.classList.toggle('d-none'));
    } else {
        dots1.forEach(dot => dot.style.display = 'none');
        readMore1.forEach(read => read.innerHTML = 'Read less');
        moreText1.forEach(text => text.classList.toggle('d-none'));
    }
}

const handlereadMore2 = () => {
    const dots2 = document.querySelectorAll('.dots2');
    const moreText2 = document.querySelectorAll('.moreText2');
    const readMore2 = document.querySelectorAll('.readMore2');

    const isNone = Array.from(dots2).every(dot => dot.style.display === 'none');

    if (isNone) {
        dots2.forEach(dot => dot.style.display = 'inline');
        readMore2.forEach(read => read.innerHTML = 'Read more');
        moreText2.forEach(text => text.classList.toggle('d-none'));
    } else {
        dots2.forEach(dot => dot.style.display = 'none');
        readMore2.forEach(read => read.innerHTML = 'Read less');
        moreText2.forEach(text => text.classList.toggle('d-none'));
    }
}

const handlereadMore3 = () => {
    const dots3 = document.querySelectorAll('.dots3');
    const moreText3 = document.querySelectorAll('.moreText3');
    const readMore3 = document.querySelectorAll('.readMore3');

    const isNone = Array.from(dots3).every(dot => dot.style.display === 'none');

    if (isNone) {
        dots3.forEach(dot => dot.style.display = 'inline');
        readMore3.forEach(read => read.innerHTML = 'Read more');
        moreText3.forEach(text => text.classList.toggle('d-none'));
    } else {
        dots3.forEach(dot => dot.style.display = 'none');
        readMore3.forEach(read => read.innerHTML = 'Read less');
        moreText3.forEach(text => text.classList.toggle('d-none'));
    }
}