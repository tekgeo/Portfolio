/**
 * Juanita Sánchez — Portfolio
 * Based on OnePage by BootstrapMade.com (heavily customized)
 */
(function () {
  "use strict";

  /* Scroll class on body */
  function toggleScrolled() {
    const body = document.querySelector("body");
    const header = document.querySelector("#header");
    if (!header || (!header.classList.contains("sticky-top") && !header.classList.contains("fixed-top"))) return;
    window.scrollY > 100 ? body.classList.add("scrolled") : body.classList.remove("scrolled");
  }
  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /* Mobile nav toggle */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });
  }

  /* Close mobile nav on link click */
  document.querySelectorAll("#navmenu a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        if (mobileNavToggleBtn) {
          mobileNavToggleBtn.classList.add("bi-list");
          mobileNavToggleBtn.classList.remove("bi-x");
        }
      }
    });
  });

  /* Preloader */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", function () { preloader.remove(); });
  }

  /* Scroll-top button */
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active");
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /* AOS */
  function aosInit() {
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
    }
  }
  window.addEventListener("load", aosInit);

  /* PureCounter */
  window.addEventListener("load", function () {
    if (typeof PureCounter !== "undefined") { new PureCounter(); }
  });

  /* Navmenu scrollspy */
  const navmenulinks = document.querySelectorAll(".navmenu a");
  function navmenuScrollspy() {
    navmenulinks.forEach(function (link) {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        document.querySelectorAll(".navmenu a.active").forEach(function (a) { a.classList.remove("active"); });
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  /* Hash scroll fix */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(function () {
          const margin = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({ top: section.offsetTop - parseInt(margin), behavior: "smooth" });
        }, 100);
      }
    }
  });
})();
