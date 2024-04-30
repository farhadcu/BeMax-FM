$(document).ready(function () {
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
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
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