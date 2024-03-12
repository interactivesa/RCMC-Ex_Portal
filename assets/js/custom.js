

$(document).ready(function () {






    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });
    let swiper2 = new Swiper(".partnersSwiper", {
        slidesPerView: 4,
        // width:auto,
        spaceBetween: 44,
        // autoplay: {
        //   delay: 3000,
        // },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
            // slidesPerGroup: 3,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 44,
            
          }
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      $('.partnersSwiper').on('mouseenter', function(e){
        console.log('stop autoplay');
        swiper2.autoplay.stop();
      })
      $('.partnersSwiper').on('mouseleave', function(e){
        console.log('start autoplay');
        swiper2.autoplay.start();
      })
     
});


