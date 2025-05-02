<template>
  <section id="landingPricing" class="section-py bg-body landing-pricing">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-4">
        <span class="badge bg-label-primary">Pricing Plans</span>
      </div>
      <h4 class="text-center mb-1 large-title">
        <span class="position-relative fw-extrabold z-1">
          Tailored pricing plans
          <img
            src="@assets/images/usefull/bg-shape.png"
            alt="laptop charging"
            class="section-title-img position-absolute object-fit-contain bottom-0 z-n1 large-image"
          />
        </span>
        designed for you
      </h4>
      <p class="text-center pb-2 mb-7">
        All plans include 40+ advanced tools and features to boost your product.<br />
        Choose the best plan to fit your needs.
      </p>

      <!-- Plans Grid -->
      <div class="row g-6 pt-lg-5">
<div class="col-xl-4 col-lg-6" v-for="plan in plans" :key="plan.name">
  <div :class="['card', plan.featured ? 'border border-primary shadow-xl' : '']">
    
    <!-- Header -->
    <div class="card-header d-flex flex-column align-items-center justify-content-center text-center">
          <img
            :src="plan.img"
            :alt="plan.name + ' icon'"
            class="mb-3 w-[86px]"
          />
          <h4 class="mb-1">{{ plan.name }}</h4>
          <p class="mb-3 text-muted text-center" style="max-width: 220px;">{{ plan.subtitle }}</p>
          <div class="d-flex align-items-center justify-content-center">
            <span class="h2 text-primary fw-extrabold mb-0">
              {{ plan.monthly }}
            </span>
          </div>
        </div>

        <!-- Body -->
        <div class="card-body">
          <h6 class="mb-3 fw-semibold text-muted text-center">{{ plan.featuresHeading }}</h6>
          <ul class="list-unstyled pricing-list">
            <li v-for="(feature, idx) in plan.features" :key="idx">
              <h6 class="d-flex align-items-center mb-3">
                <span
                  :class="[
                    'badge badge-center rounded-pill p-0 me-3',
                    plan.featured ? 'bg-primary' : 'bg-label-primary'
                  ]"
                >
                  <i class="icon-base ti tabler-check icon-12px"></i>
                </span>
                {{ feature }}
              </h6>
            </li>
          </ul>
           <div class="d-flex justify-content-center mt-8">
             <div
               v-if="plan.name === 'Starter'"
               :ref="'rzpStarter'">
             </div>
          
             <div
               v-else-if="plan.name === 'Premium'"
               :ref="'rzpPremium'">
             </div>
          
             <div v-else>
               <button
                 @click="goToContact"
                 :class="['btn', plan.featured ? 'btn-primary' : 'btn-label-primary']"
               >
                 Get Started
               </button>
             </div>
           </div>
        </div>

      </div>
    </div>
  </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingPlans",
  data() {
    return {
      plans: [
        {
          name: "Starter",
          img: require('@assets/images/pricing/pricing-basic.png'),
          monthly: "US$ 750 pm",
          subtitle: "For businesses with small footprint of App Users",
          featuresHeading: "Includes",
          features: [
            "Basic template library",
            "Segmentation and targeting",
            "Measurable Analytics",
            "Third party integration support",
            "Onboarding Support",
            "WhatsApp and Email Support",
          ],
          featured: false,
        },
        {
          name: "Premium",
          img: require('@assets/images/pricing/pricing-team.png'),
          monthly: "US$ 2,000 pm",
          subtitle: "For strong consumer facing brands with advanced needs",
          featuresHeading: "Everything in Starter +",
          features: [
            "Advanced template library",
            "AI based campaign personalisation",
            "Journey builder",
            "A/B testing",
            "Activity logs for security audits",
            "Premium Support",
          ],
          featured: true,
        },
        {
          name: "Enterprise",
          img: require('@assets/images/pricing/pricing-enterprise.png'),
          monthly: "Custom Pricing",
          subtitle: "Enterprises with massive consumer engagements and custom needs",
          featuresHeading: "Everything in Premium +",
          features: [
            "Custom templates on demand",
            "Access controls",
            "User roles and permissions",
            "Dedicated Account Manager",
            "Flexible API Access & Integrations",
          ],
          featured: false,
        },
      ],
    };
  },
  mounted() {
    // Razorpay button IDs
    const buttonIds = {
      Starter: "pl_N6cbM5DXaw0lSS",
      Premium: "pl_QLd8Ui7dSowdMK",
    };

    Object.entries(buttonIds).forEach(([planName, buttonId]) => {
      // determine ref name
      const refName = planName === "Starter" ? "rzpStarter" : "rzpPremium";
      let containers = this.$refs[refName];

      if (!containers) return;
      if (!Array.isArray(containers)) containers = [containers];

      containers.forEach((container) => {
        if (container._injected) return;
        container._injected = true;

        const form = document.createElement("form");
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.async = true;
        script.setAttribute("data-payment_button_id", buttonId);
        form.appendChild(script);
        container.appendChild(form);
      });
    });
  },
  methods: {
    goToContact() {
      const el = document.getElementById('landingContact')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
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
