<template>
  <section id="hero-animation">
    <div id="landingHero" class="section-py landing-hero position-relative">
      <img
        src="@assets/images/hero/hero-bg-light.png"
        alt="hero background"
        class="position-absolute top-0 start-50 translate-middle-x object-fit-cover w-[100vh] h-[100vh]"
        data-speed="1"
      />
      <div class="container d-flex flex-column align-items-center justify-content-center text-center">
        <div class="hero-text-box text-center position-relative">
          <h1 class="text-primary hero-title display-6 fw-extrabold text-center">
            AI driven, personalised notifications, for stronger engagements
          </h1>
          <h2 class="hero-sub-title h6 mb-6 text-center">
            Push Campaign - Pick template - select cohorts - send using ai driven personalisation
            <br class="d-none d-lg-block" />
            (timed based upon past preferences)
          </h2>
          <!-- unchanged button block -->
          <div class="landing-hero-btn d-inline-block position-relative text-center">
            <span class="hero-btn-item position-absolute d-none d-md-flex fw-medium ml-9">
              Give It a Go
              <img
                src="@assets/images/hero/join-community-arrow.png"
                alt="Give It a Go arrow"
                class="scaleX-n1-rtl w-[60px]"
              />
            </span>
            <a href="#landingPricing" class="btn btn-primary btn-lg">
              Start a Free Trial
            </a>
          </div>
        </div>

        <!-- simplified animation area -->
        <div id="heroDashboardAnimation" class="hero-animation-img mt-8">
          <a href="javascript:void(0);">
            <div id="heroAnimationImg" class="position-relative hero-dashboard-img">
              <!-- placeholder dashboard image -->
              <!-- <img
                src="https://via.placeholder.com/600x400?text=Dashboard+Placeholder"
                alt="Dashboard placeholder"
                class="animation-img"
              /> -->
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="landing-hero-blank"></div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const XL_BREAKPOINT = 1200
let mouseMoveHandler, mouseOutHandler

onMounted(() => {
  const nav = document.querySelector('.layout-navbar')
  const heroSection = document.getElementById('hero-animation')
  const dashboardLayers = document.querySelectorAll('.hero-dashboard-img')

  if (!heroSection || window.innerWidth < XL_BREAKPOINT) return

  mouseMoveHandler = e => {
    dashboardLayers.forEach(el => {
      const x = (window.innerWidth - e.pageX * 2) / 100
      const y = (window.innerHeight - e.pageY * 2) / 100
      el.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1,1,1)`
    })
  }

  mouseOutHandler = () => {
    dashboardLayers.forEach(el => {
      el.style.transform = 'perspective(1200px) scale(1) rotateX(0) rotateY(0)'
    })
  }

  heroSection.addEventListener('mousemove', mouseMoveHandler)
  heroSection.addEventListener('mouseout', mouseOutHandler)
  if (nav) nav.addEventListener('mousemove', mouseMoveHandler)
})

onUnmounted(() => {
  const nav = document.querySelector('.layout-navbar')
  const heroSection = document.getElementById('hero-animation')

  if (heroSection) {
    heroSection.removeEventListener('mousemove', mouseMoveHandler)
    heroSection.removeEventListener('mouseout', mouseOutHandler)
  }
  if (nav) nav.removeEventListener('mousemove', mouseMoveHandler)
})
</script>

<style scoped>
/* re-add any scoped rules here if you need them */
</style>
