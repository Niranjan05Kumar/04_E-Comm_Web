// navbar
function showSidebar() {
    const sidebar = document.querySelector('.navsidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.navsidebar')
    sidebar.style.display = 'none'
}


// Feedback section (card-swiper)
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

     // pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

  });
