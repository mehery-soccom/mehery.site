<template>
    <section id="landingReviews" class="section-py bg-body landing-reviews pb-0">
      <div class="container">
        <div class="row align-items-center gx-0 gy-4 g-lg-5 mb-5 pb-md-5">
          <!-- Left column -->
          <div class="col-md-6 col-lg-5 col-xl-3 d-flex flex-column align-items-center text-center">
            <div class="mb-4">
              <span class="badge bg-label-primary">Real Customers Reviews</span>
            </div>
            <h4 class="mb-1 large-title">
              <span class="position-relative fw-extrabold z-1">
                What people say
                <img
                  src="/usefull/bg-shape.png"
                  alt="laptop charging"
                  class="section-title-img position-absolute object-fit-contain bottom-0 z-n1 large-image"
                />
              </span>
            </h4>
            <p class="mb-5 mb-md-12">
              See what our customers have to<br class="d-none d-xl-block" />
              say about their experience.
            </p>
            <div class="landing-reviews-btns">
              <button
                id="reviews-previous-btn"
                class="btn btn-icon btn-label-primary reviews-btn me-3"
                type="button"
              >
                <font-awesome-icon icon="arrow-left" />
              </button>
              <button
                id="reviews-next-btn"
                class="btn btn-icon btn-label-primary reviews-btn"
                type="button"
              >
                <font-awesome-icon icon="arrow-right" />
              </button>
            </div>
          </div>
  
          <!-- Right column: Reviews carousel -->
          <div class="col-md-6 col-lg-7 col-xl-9">
            <div class="swiper-reviews-carousel overflow-hidden">
              <div class="swiper mySwiper" id="swiper-reviews">
                <div class="swiper-wrapper">
                  <!-- Repeat for each review slide -->
                  <div class="swiper-slide" v-for="(slide, i) in reviews" :key="i">
                    <div class="card h-100">
                      <div class="card-body text-body d-flex flex-column justify-content-between h-100">
                        <div class="mb-4 d-flex justify-content-center">
                          <img :src="slide.logo" alt="client logo" class="client-logo img-fluid" style="max-width: 90px; height: 80px;"/>
                        </div>
                        <p>{{ slide.text }}</p>
                        <div class="text-warning mb-4">
                          <i class="icon-base ti tabler-star-filled" v-for="n in 5" :key="n"></i>
                        </div>
                        <div class="d-flex align-items-center">
                          <div class="avatar me-3 avatar-sm">
                            <img :src="slide.avatar" alt="Avatar" class="rounded-circle" />
                          </div>
                          <div>
                            <h6 class="mb-0">{{ slide.name }}</h6>
                            <p class="small text-body-secondary mb-0">{{ slide.role }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Swiper nav -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
              </div>
            </div>
          </div>
        </div>
  
        <hr class="m-0 mt-6 mt-md-12" />
  
        <!-- Logo slider -->
        <div class="swiper-logo-carousel pt-8 flex justify-center">
          <div class="swiper flex justify-center" id="swiper-clients-logos">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(logo, i) in logos" :key="i">
                <img
                  :src="logo.src"
                  :alt="logo.alt"
                  class="client-logo"
                  :data-app-light-img="logo.light"
                  :data-app-dark-img="logo.dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>
  import { onMounted } from 'vue';
  import Swiper from 'swiper'                           
  import { Navigation, Autoplay } from 'swiper/modules' 
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/autoplay'
  
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faArrowLeft, faArrowRight);
  
  export default {
    name: 'RealCustomersReviews',
    components: { FontAwesomeIcon },
    data() {
      return {
        reviews: [
          {
            logo: '/realcostomers/aertrip_logo.png',
            text:
              "“Vuexy is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”",
            avatar: '/realcostomers/founder-pinterest.png',
            name: 'Cecilia Payne',
            role: 'CEO of Airbnb',
          },
          {
            logo: '/realcostomers/Jazeera-Airways-Logo.png',
            text:
              "“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.”",
            avatar: '/realcostomers/founder-pinterest.png',
            name: 'Eugenia Moore',
            role: 'Founder of Hubspot',
          },
          {
            logo: '/realcostomers/bullforce_logo.png',
            text:
              "This template is really clean & well documented. The docs are really easy to understand and it's always easy to find a screenshot from their website.",
            avatar: '/realcostomers/founder-pinterest.png',
            name: 'Curtis Fletcher',
            role: 'Design Lead at Dribbble',
          },
          {
            logo: '/realcostomers/Decredito_logo.png',
            text:
              "All the requirements for developers have been taken into consideration, so I’m able to build any interface I want.",
            avatar: '/realcostomers/founder-pinterest.png',
            name: 'Sara Smith',
            role: 'Founder of Coinbase',
          },
          {
            logo: '/realcostomers/Hassans_logo.png',
            text:
              "“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.”",
            avatar: '/realcostomers/founder-pinterest.png',
            name: 'Eugenia Moore',
            role: 'CTO of Pinterest',
          },
        ],
        logos: [
          {
            src: '/realcostomers/aertrip_logo-modified.png',
            alt: 'Airbnb',
            light: 'front-pages/branding/logo_1-light.png',
            dark: 'front-pages/branding/logo_1-dark.png',
          },
          {
            src: '/realcostomers/Jazeera-Airways-Logo-modified.png',
            alt: 'Netflix',
            light: 'front-pages/branding/logo_2-light.png',
            dark: 'front-pages/branding/logo_2-dark.png',
          },
          {
            src: '/realcostomers/bullforce_logo-modified.png',
            alt: 'Coinbase',
            light: 'front-pages/branding/logo_3-light.png',
            dark: 'front-pages/branding/logo_3-dark.png',
          },
          {
            src: '/realcostomers/Decredito_logo-modified.png',
            alt: 'Dribbble',
            light: 'front-pages/branding/logo_4-light.png',
            dark: 'front-pages/branding/logo_4-dark.png',
          },
          {
            src: '/realcostomers/Hassans_logo-modified.png',
            alt: 'Pinterest',
            light: 'front-pages/branding/logo_5-light.png',
            dark: 'front-pages/branding/logo_5-dark.png',
          },
        ],
      };
    },
    mounted() {
      // register modules
      Swiper.use([Navigation, Autoplay]);
  
      // main reviews swiper
      new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        grabCursor: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        loop: true,
        loopAdditionalSlides: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1200: { slidesPerView: 3, spaceBetween: 26 },
          992: { slidesPerView: 2, spaceBetween: 20 },
        },
      });
  
      // logos swiper
      const logoEl = document.getElementById('swiper-clients-logos');
      if (logoEl) {
        new Swiper(logoEl, {
          slidesPerView: 2,
          autoplay: { delay: 3000, disableOnInteraction: false },
          breakpoints: {
            992: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
          },
        });
      }
  
      // arrow button proxy
      const prevBtn = document.getElementById('reviews-previous-btn');
      const nextBtn = document.getElementById('reviews-next-btn');
      const swiperPrev = document.querySelector('.swiper-button-prev');
      const swiperNext = document.querySelector('.swiper-button-next');
  
      if (nextBtn && swiperNext) {
        nextBtn.addEventListener('click', () => swiperNext.click());
      }
      if (prevBtn && swiperPrev) {
        prevBtn.addEventListener('click', () => swiperPrev.click());
      }
    },
  };
  </script>
  
<style scoped>

.large-title {
  font-size: 1.5rem; 
}

.large-image {
  width: 500px;  
  height: 30px;  
}

</style>
  