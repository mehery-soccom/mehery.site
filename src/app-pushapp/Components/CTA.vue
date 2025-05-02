<template>
    <section id="landingCTA" class="position-relative section-py landing-cta p-lg-0 pb-0">
      <img
        src="@assets/images/CTA/get-started-bg-light.png"
        class="position-absolute bottom-0 end-0 h-100 w-100 z-n1"
        alt="cta image"
        data-app-light-img="front-pages/backgrounds/cta-bg-light.png"
        data-app-dark-img="front-pages/backgrounds/cta-bg-dark.png"
      />
      <div class="container">
        <div class="row align-items-center gy-12">
          <div class="col-lg-6 text-start text-sm-center text-lg-start">
            <h3 class="cta-title text-primary fw-bold mb-1">Ready to Get Started?</h3>
            <h5 class="text-body mb-8">Start your project with a 14-day free trial</h5>
            <a href="payment-page.html" class="btn btn-lg btn-primary">Get Started</a>
          </div>
          <div class="col-lg-6 pt-lg-12 text-center text-lg-end">
            <img
              src="@assets/images/CTA/crm-dashboard.png"
              alt="cta dashboard"
              class="img-fluid mt-lg-4"
            />
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'CTA',
  }
</script>
  
<style scoped>

</style>
  