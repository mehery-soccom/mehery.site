
/**
 * Main - Front Pages
 */
'use strict';

(function () {
  const nav = document.querySelector('.layout-navbar'),
    heroAnimation = document.getElementById('hero-animation'),
    animationImg = document.querySelectorAll('.hero-dashboard-img'),
    animationElements = document.querySelectorAll('.hero-elements-img'),
    swiperLogos = document.getElementById('swiper-clients-logos'),
    swiperReviews = document.getElementById('swiper-reviews'),
    ReviewsPreviousBtn = document.getElementById('reviews-previous-btn'),
    ReviewsNextBtn = document.getElementById('reviews-next-btn'),
    ReviewsSliderPrev = document.querySelector('.swiper-button-prev'),
    ReviewsSliderNext = document.querySelector('.swiper-button-next'),
    priceDurationToggler = document.querySelector('.price-duration-toggler'),
    priceMonthlyList = [].slice.call(document.querySelectorAll('.price-monthly')),
    priceYearlyList = [].slice.call(document.querySelectorAll('.price-yearly'));

  // ✅ Ensure heroAnimation exists before adding event listeners
  const mediaQueryXL = '1200';
  const width = screen.width;
  if (width >= mediaQueryXL && heroAnimation) {
    heroAnimation.addEventListener('mousemove', function parallax(e) {
      animationElements.forEach(layer => {
        layer.style.transform = 'translateZ(1rem)';
      });
      animationImg.forEach(layer => {
        let x = (window.innerWidth - e.pageX * 2) / 100;
        let y = (window.innerHeight - e.pageY * 2) / 100;
        layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
      });
    });

    // ✅ Ensure nav exists before adding event listeners
    if (nav) {
      nav.addEventListener('mousemove', function parallax(e) {
        animationElements.forEach(layer => {
          layer.style.transform = 'translateZ(1rem)';
        });
        animationImg.forEach(layer => {
          let x = (window.innerWidth - e.pageX * 2) / 100;
          let y = (window.innerHeight - e.pageY * 2) / 100;
          layer.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
        });
      });
    }

    heroAnimation.addEventListener('mouseout', function () {
      animationElements.forEach(layer => {
        layer.style.transform = 'translateZ(0)';
      });
      animationImg.forEach(layer => {
        layer.style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)';
      });
    });
  }

  // ✅ Ensure swiperReviews exists before initializing Swiper
  if (swiperReviews) {
    new Swiper(swiperReviews, {
      slidesPerView: 1,
      spaceBetween: 5,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      loopAdditionalSlides: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 26
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      }
    });
  }

  // ✅ Ensure ReviewsNextBtn and ReviewsPreviousBtn exist before adding event listeners
  if (ReviewsNextBtn && ReviewsSliderNext) {
    ReviewsNextBtn.addEventListener('click', function () {
      ReviewsSliderNext.click();
    });
  }

  if (ReviewsPreviousBtn && ReviewsSliderPrev) {
    ReviewsPreviousBtn.addEventListener('click', function () {
      ReviewsSliderPrev.click();
    });
  }

  // ✅ Ensure swiperLogos exists before initializing Swiper
  if (swiperLogos) {
    new Swiper(swiperLogos, {
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      breakpoints: {
        992: {
          slidesPerView: 5
        },
        768: {
          slidesPerView: 3
        }
      }
    });
  }

  // ✅ Ensure priceDurationToggler exists before adding event listeners
  document.addEventListener('DOMContentLoaded', function () {
    function togglePrice() {
      if (priceDurationToggler && priceDurationToggler.checked) {
        // If checked
        priceYearlyList.map(yearEl => yearEl.classList.remove('d-none'));
        priceMonthlyList.map(monthEl => monthEl.classList.add('d-none'));
      } else {
        // If not checked
        priceYearlyList.map(yearEl => yearEl.classList.add('d-none'));
        priceMonthlyList.map(monthEl => monthEl.classList.remove('d-none'));
      }
    }
    // togglePrice Event Listener
    togglePrice();

    if (priceDurationToggler) {
      priceDurationToggler.onchange = function () {
        togglePrice();
      };
    }
  });
})();
