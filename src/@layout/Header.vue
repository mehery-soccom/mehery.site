<template>
    <nav :class="'navbar navbar-expand-lg navbar-dark fixed-top ' + containerClass" id="mainNav" v-b-scrollspy="96">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="@assets/images/navbar-logo.svg" alt="..." /></a>

            <b-navbar-toggle target="navbarResponsive">Menu <i class="fas fa-bars ms-1"></i></b-navbar-toggle>
            <b-collapse id="navbarResponsive" is-nav>
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Promotions</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Branches</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">FAQ's</a>
                    </li>
                </ul>
            </b-collapse>
        </div>
    </nav>
</template>

<script>
import { defineComponent } from "vue";

function agencyScript(event) {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);
}

export default defineComponent({
    name: "Header",
    props: {
        containerClass: {
            type: String
        }
    },
    mounted: function () {
        window.addEventListener("load", agencyScript);
    }
});
</script>

<style lang="scss"></style>
