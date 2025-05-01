<!-- ContactUs.vue -->
<template>
    <section id="landingContact" class="section-py bg-body landing-contact">
      <div class="container">
        <div class="text-center mb-4">
          <span class="badge bg-label-primary">Contact US</span>
        </div>
        <h4 class="text-center mb-1">
          <span class="position-relative fw-extrabold z-1 large-title">
            Let's work
            <img
              src="/usefull/bg-shape.png"
              alt="laptop charging"
              class="section-title-img position-absolute object-fit-contain bottom-0 z-n1 large-image"
            />
          </span>
          together
        </h4>
        <p class="text-center mb-12 pb-md-4">
          Any question or remark? just write us a message
        </p>
        <div class="row g-6">
          <div class="col-lg-5">
            <div class="contact-img-box position-relative border p-2 h-100">
              <img
                src="/contact/contact-border.png"
                alt="contact border"
                class="contact-border-img position-absolute d-none d-lg-block scaleX-n1-rtl w-[180px]"
              />
              <img
                src="/contact/customer-service.png"
                alt="contact customer service"
                class="contact-img w-100 scaleX-n1-rtl"
              />
              <div class="p-4 pb-2">
                <div class="row g-4">
                  <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-center">
                      <div class="badge bg-label-primary rounded p-1_5 me-3">
                        <font-awesome-icon :icon="['fas','envelope']" />
                      </div>
                      <div>
                        <p class="mb-0">Email</p>
                        <h6 class="mb-0">
                          <a href="mailto:sales@mehery.com" class="text-heading"
                            >sales@mehery.com</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="d-flex align-items-center">
                      <div class="badge bg-label-success rounded p-1_5 me-3">
                        <font-awesome-icon :icon="['fas','phone']" />
                      </div>
                      <div>
                        <p class="mb-0">Phone</p>
                        <h6 class="mb-0">
                          <a href="tel:+91 96192 03759" class="text-heading"
                            >+91 96192 03759</a
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Right Form Panel -->
          <div class="col-lg-7">
            <div class="card h-100">
              <div class="card-body">
                <h4 class="mb-2">Send a message</h4>
                <p class="mb-6">
                  If you would like to discuss anything related to payment,
                  account, licensing,<br class="d-none d-lg-block" />
                  partnerships, or have pre-sales questions, you’re at the right
                  place.
                </p>
                <form>
                  <div class="row g-4">
                    <div class="col-md-6">
                      <label class="form-label" for="contact-form-fullname"
                        >Full Name</label
                      >
                      <input
                        type="text"
                        id="contact-form-fullname"
                        class="form-control"
                        placeholder="john"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="form-label" for="contact-form-email"
                        >Email</label
                      >
                      <input
                        type="text"
                        id="contact-form-email"
                        class="form-control"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div class="col-12">
                      <label class="form-label" for="contact-form-message"
                        >Message</label
                      >
                      <textarea
                        id="contact-form-message"
                        class="form-control"
                        rows="7"
                        placeholder="Write a message"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">
                        Send inquiry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>  
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

  library.add(faEnvelope, faPhone)

  export default {
    name: 'ContactUs', 
    components: {
      FontAwesomeIcon
    }   
  }
  
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
  