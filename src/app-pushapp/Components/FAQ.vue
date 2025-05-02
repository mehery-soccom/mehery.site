<template>
    <section id="landingFAQ" class="section-py bg-body landing-faq">
      <div class="container">
        <div class="text-center mb-4">
          <span class="badge bg-label-primary">FAQ</span>
        </div>
        <h4 class="text-center mb-1 large-title">
          Frequently asked
          <span class="position-relative fw-extrabold z-1">
            questions
            <img
              src="@assets/images/usefull/bg-shape.png"
              alt="laptop charging"
              class="section-title-img position-absolute object-fit-contain bottom-0 z-n1 large-image"
            />
          </span>
        </h4>
        <p class="text-center mb-12 pb-md-4">
          Browse through these FAQs to find answers to commonly asked questions.
        </p>
  
        <div class="row gy-12 align-items-center">
          <div class="col-lg-5">
            <div class="text-center">
              <img
                src="@assets/images/faq/boy-sitting-with-laptop.png"
                alt="faq boy with logos"
                class="faq-image"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="accordion" id="accordionExample">
              <div class="card accordion-item" v-for="(item, index) in faqItems" :key="index">
                <h2 class="accordion-header" :id="'heading' + index">
                  <button
                    class="accordion-button"
                    :class="{ collapsed: active !== index }"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index"
                    :aria-expanded="active === index ? 'true' : 'false'"
                    :aria-controls="'collapse' + index"
                    @click="toggle(index)"
                  >
                    {{ item.question }}
                  </button>
                </h2>
                <div
                  :id="'collapse' + index"
                  class="accordion-collapse collapse"
                  :class="{ show: active === index }"
                  :aria-labelledby="'heading' + index"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    {{ item.answer }}
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
    name: 'FAQ',
    data() {
      return {
        active: 0, // default expanded accordion index
        faqItems: [
          {
            question: 'Do you charge for each upgrade?',
            answer:
              'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder...',
          },
          {
            question: 'Do I need to purchase a license for each website?',
            answer:
              'Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll...',
          },
          {
            question: 'What is regular license?',
            answer:
              'Regular license can be used for end products that do not charge users for access or service... If you want to sell end product to multiple clients...',
          },
          {
            question: 'What is extended license?',
            answer:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et aliquid quaerat possimus maxime!',
          },
          {
            question: 'Which license is applicable for SASS application?',
            answer:
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias exercitationem ab cum nemo facere...',
          },
        ],
      };
    },
    methods: {
      toggle(index) {
        this.active = this.active === index ? null : index;
      },
    },
  };
  </script>
  
<style scoped>
  .accordion-body {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    display: block !important;
  }

  .large-title {
  font-size: 1.5rem; 
}

.large-image {
  width: 500px;  
  height: 30px;  
}

</style>
  