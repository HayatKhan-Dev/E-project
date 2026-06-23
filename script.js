const themeToggle = document.getElementById("themeToggle");
gsap.registerPlugin(ScrollTrigger);
// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});

// Toggle theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// hero & loader animation
loaderAnimation();

function loaderAnimation() {
  let loaderDiv = document.querySelector(".loader");
  let loaderText = document.querySelector(".loader-text");
  let loaderPulse = document.querySelector(".pulse");

  const tl = gsap.timeline({
    onComplete: () => {
      loaderDiv.style.display = "none";
      heroAnimation();
    }
  });

  tl.to(loaderDiv, {
    y: 0,
    duration: 0.5,
  })

  .from(loaderText, {
    opacity: 0,
    y: -40,
    duration: 0.8,
    ease: "power2.out"
  })

  .to(loaderPulse, {
    width: "100%",
    duration: 1,
    ease: "sine.out"
  })

  .to(loaderDiv, {
    y: "-100%",
    opacity: 0,
    delay: 0.5,
    duration: 1
  });
}

function heroAnimation() {
  const heroTl = gsap.timeline();

  heroTl.from(".hero-descs", {
    scale: 0,
    x: -50,
    duration: 0.8,
  });

  heroTl.from(".hero-headings h1", {
    y: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 1
  }, "-=0.5");

  heroTl.from(".hero-headings p", {
    x: -40,
    opacity: 0,
    duration: 0.5,
  }, "-=0.3");

  heroTl.from(".hero-buttons", {
    y: 40,
    opacity: 0,
    duration: 0.5
  });

  heroTl.from(".hero-statistics", {
    y: 50,
    opacity: 0,
    duration: 0.6,
  }, "-=0.5");

  heroTl.to(".hero-image-container .hero-bg-shape", {
    opacity: 0.5
  })

  heroTl.from(".hero-image-container img", {
    y: -100,
    opacity: 0,
    scale: 0,
    duration: 1
  }, "-=0.4");

  heroTl.to(".hero-image-container .floating-card", {
    opacity: 1,
    y: -10
  });

  gsap.to(".hero-image-container .floating-card", {
  y: -20,
  duration: 2.5,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

featuresAnimation()
}

function featuresAnimation() {

  const featuresTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".features",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  featuresTl
    .from(".features-heading", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out"
    })

    .from(".features-subheading", {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4")

    .to(".feature-card", {
      opacity: 1,
      y: 20,
      duration: 1,
      stagger: 0.6,
      ease: "power3.out"
    }, "-=0.3");

  aboutAnimation();
}

function aboutAnimation () {
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset",
    }
  });

  aboutTl.to(".about-tag", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
  })

  // Heading
  .from(".about-heading", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out"
  }, "-=0.3")

  // Text
  .from(".about-text", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")

  // Stats (stagger)
  .to(".about .about-static", {
    opacity: 1,
    y: -10,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.3")

  // Button
  .from(".about-buttons", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.2")

  // Image (right side)
  .to(".about-image img", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6");

  oralHealthAnimation()
};

function oralHealthAnimation() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".oral-health",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  // Image (left side)
  tl.to(".oral-image img", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
  })

  // Tag
  .from(".oral-tag", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.5")

  // Heading
  .from(".oral-heading", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out"
  }, "-=0.4")

  // Paragraph
  .from(".oral-text", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")

  // Points (stagger)
  .from(".oral-point", {
    opacity: 1,
    x: 30,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.3")

  // Button
  .from(".oral-btn", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out"
  }, "-=0.2");

  researchAnimation()
}

function researchAnimation() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".research",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  // Heading
  tl.from(".research-heading", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    ease: "power2.out"
  })

  // Subheading
  .from(".research-subheading", {
    opacity: 0,
    y: 30,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")

  // Cards
  .to(".research-card", {
    opacity: 1,
    scale: 1,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.2")

  productsAnimation();
}

function productsAnimation() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".products",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  // Heading
  tl.from(".products-heading", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out"
  })

  // Subheading
  .from(".products-subheading", {
    opacity: 0,
    y: 25,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3")

  // Cards
  .to(".product-card", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.2");

  testimonialsAnimation();
}

function testimonialsAnimation() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  // Heading
  tl.from(".testimonials-heading", {
    opacity: 0,
    y: 40,
    duration: .7,
    ease: "power2.out"
  })

  // Subheading
  .from(".testimonials-subheading", {
    opacity: 0,
    y: 25,
    duration: .6,
    ease: "power2.out"
  }, "-=.3")

  // Cards
  .to(".testimonial-card", {
    opacity: 1,
    scale: 1,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  }, "-=.2");

}

gsap.to(".testimonial-profile img", {
  y: -8,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: 0.3
});

gsap.utils.toArray(".research-card").forEach(card => {

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      y: -10,
      duration: 0.3
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      y: 0,
      duration: 0.3
    });
  });
});