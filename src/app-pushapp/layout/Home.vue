<template>
    <Navbar />
    <div data-bs-spy="scroll" class="scrollspy-example">
      <Hero />
      <UsefulFeatures />
      <!-- <RealCustomersReviews />
      <OurGreatTeam /> -->
      <PricingPlans />
      <!-- <FunFacts />
      <FAQ />
      <CTA /> -->
      <ContactUs />
    </div>
    <Footer />
    
</template>
  
<script>

  import "../css/style.css";
  import "../Components/Filhal.css";
  import "../css/core.css";

  import { defineComponent,onMounted } from "vue";
  import Navbar from "../Components/Navbar.vue";
  import Hero from "../Components/Hero.vue";
  import UsefulFeatures from "../Components/UsefulFeatures.vue";
  // import RealCustomersReviews from "../Components/RealCustomersReviews.vue";
  // import OurGreatTeam from "../Components/OurGreatTeam.vue";
  import PricingPlans from "../Components/PricingPlans.vue";
  // import FunFacts from "../Components/FunFacts.vue";
  // import FAQ from "../Components/FAQ.vue";
  // import CTA from "../Components/CTA.vue";
  import ContactUs from "../Components/ContactUs.vue";
  import Footer from "../Components/Footer.vue";
  
  export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Hero,
    UsefulFeatures,
    // RealCustomersReviews,
    // OurGreatTeam,
    PricingPlans,
    // FunFacts,
    // FAQ,
    // CTA,
    ContactUs,
    Footer,
  },
  // setup() {
  //   onMounted(() => {
  //     if (typeof window !== "undefined") {
  //       // Match React App.jsx
  //       window.isRtl = false;
  //       window.isDarkStyle = false;

  //       console.log("initial window.Helpers:", window.Helpers);
  //       console.log("window.innerWidth:", window.innerWidth);

  //       const scripts = [
  //         "/public/javascripts/front-main.js",          
  //         "/public/javascripts/front-config.js",        
  //         "/public/javascripts/main.js",                
  //         "/public/javascripts/front-page-landing.js"   
  //       ];

  //       const loadScript = (src) => {
  //         return new Promise((resolve, reject) => {
  //           const script = document.createElement("script");
  //           script.src = src;
  //           script.async = false;
  //           script.onload = resolve;
  //           script.onerror = reject;
  //           document.body.appendChild(script);
  //         });
  //       };

  //       (async () => {
  //         for (const src of scripts) {
  //           try {
  //             await loadScript(src);
  //             console.log(`Loaded: ${src}`);
  //           } catch (err) {
  //             console.error(`Failed to load script: ${src}`, err);
  //           }
  //         }
  //       })();
  //     }
  //   });
  // },
});
</script>
  
<style lang="css">
  /* any page‑specific styles */
</style>
  