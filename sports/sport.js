document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Active Navigation Link on Scroll
  // const sections = document.querySelectorAll('section[id]');

  // function onScroll() {
  //     const scrollY = window.pageYOffset;

  //     sections.forEach(current => {
  //         const sectionHeight = current.offsetHeight;
  //         const sectionTop = current.offsetTop - 100; // Adjusted offset
  //         const sectionId = current.getAttribute('id');

  //         const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

  //         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //             document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  //             if (navLink) {
  //                 navLink.classList.add('active');
  //             }
  //         }
  //     });
  // }

  // window.addEventListener('scroll', onScroll);

  // Set current year in footer
  const footerCopy = document.querySelector(".footer-copy");
  if (footerCopy) {
    footerCopy.innerHTML = `&copy; ${new Date().getFullYear()} SportAI. All Rights Reserved.`;
  }
});
