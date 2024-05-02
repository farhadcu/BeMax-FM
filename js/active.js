$(document).ready(function () {

    /* meanmenu */
    jQuery('#mobile-menu').meanmenu({
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu',
    });

    /* slider-active */
    $('.slider-active').owlCarousel({
        loop: true,
        // margin:10,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    /* project-active */
    $('.project-active').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 4
            }
        }
    })

    /* blog-active */
    $('.blog-active').owlCarousel({
        loop: true,
        // margin:10,
        nav: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* brand-active */
    $('.brand-active').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })



    /* magnificPopup-active */
    $('.video-popup').magnificPopup({
        // type: 'image'
        type: 'iframe'
        // other options
    });


})