/* * * Main - Front Pages */
window.isRtl = window.Helpers?.isRtl?.() || false;
window.isDarkStyle = window.Helpers?.isDarkStyle?.() || false;

(function () {
  const menu = document.getElementById('navbarSupportedContent'),
    nav = document.querySelector('.layout-navbar'),
    navItemLink = document.querySelectorAll('.navbar-nav .nav-link');

  // ✅ FIX for `templateName is not defined`
  const templateName = window.templateName || 'default'; // Ensure templateName is always defined

  // Initialised custom options if checked
  setTimeout(function () {
    window.Helpers?.initCustomOptionCheck?.();
  }, 1000);

  if (typeof Waves !== 'undefined') {
    Waves.init();
    Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])", ['waves-light']);
    Waves.attach("[class*='btn-outline-']");
    Waves.attach("[class*='btn-label-']");
    Waves.attach('.pagination .page-item .page-link');
  }

  // Init BS Tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  if (window.isRtl) {
    window.Helpers?._addClass?.('dropdown-menu-end', document.querySelectorAll('#layout-navbar .dropdown-menu'));
    window.Helpers?._addClass?.('dropdown-menu-end', document.querySelectorAll('.dropdown-menu'));
  }

  // ✅ FIX for `Cannot read properties of null (reading 'classList')`
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('navbar-active', window.scrollY > 10);
    });

    window.addEventListener('load', () => {
      nav.classList.toggle('navbar-active', window.scrollY > 10);
    });
  }

  // Function to close the mobile menu
  function closeMenu() {
    if (menu) menu.classList.remove('show');
  }

  document.addEventListener('click', function (event) {
    if (menu && !menu.contains(event.target)) {
      closeMenu();
    }
  });

  navItemLink.forEach(link => {
    link.addEventListener('click', event => {
      if (!link.classList.contains('dropdown-toggle')) {
        closeMenu();
      } else {
        event.preventDefault();
      }
    });
  });

  // Mega dropdown
  const megaDropdown = document.querySelectorAll('.nav-link.mega-dropdown');
  if (megaDropdown) {
    megaDropdown.forEach(e => {
      new MegaDropdown(e);
    });
  }
})();
