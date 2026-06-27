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

// Progress Bar code and logic 
function progressBar() {
  gsap.to(".scroll-progress", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });
}

progressBar();

// custom cursor code
const crsr = document.querySelector(".crsr")
const crsrTxt = document.querySelector(".crsr-txt");
const btns = document.querySelectorAll(".secondary-btn");
const cards = document.querySelectorAll(".card-explore");

document.addEventListener("mousemove", (e) => {
  gsap.to(".crsr", {
    left: e.clientX,
    top: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  })
});

cards.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    crsrTxt.textContent = "Explore";
    crsr.classList.add("hover");
  })
  btn.addEventListener("mouseleave", () => {
    crsrTxt.textContent = "";
    crsr.classList.remove('hover');
  })
});

btns.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    crsrTxt.textContent = "Click";
    crsr.classList.add("hover");
    gsap.from(crsrTxt, {
      opacity: 0,
      x: 10,
      duration: 0.5
    })
  })
  btn.addEventListener("mouseleave", () => {
    crsrTxt.textContent = "";
    crsr.classList.remove('hover');
  })
})

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

function aboutAnimation() {
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

  faqAnimation()
}

function faqAnimation() {

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play none none reset"
    }
  });

  // Heading
  tl.from(".faq-heading", {
    opacity: 0,
    y: 40,
    duration: 0.7,
    ease: "power2.out"
  })

    // Subheading
    .from(".faq-subheading", {
      opacity: 0,
      y: 25,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3")

    // Accordion Items
    .from(".accordion-item", {
      opacity: 0,
      y: 60,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out"
    }, "-=0.2");

  footerAnimation();
}

function footerAnimation() {

  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none reset"
    }
  });

  footerTl.from(".footer-brand", {
    opacity: 0,
    x: -50,
    duration: 0.8
  });

  footerTl.from(".footer-links, .footer-contact", {
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8
  }, "-=0.4");

  footerTl.from(".footer-bottom", {
    opacity: 0,
    y: 30,
    duration: 0.8
  });

  footerTl.to(".footer-socials i", {
    opacity: 1,
    scale: 1,
    stagger: 0.1,
    duration: 0.7
  }, "-=0.4");

}

// geolocation API for the map
function getUserLocation() {
  if (!navigator.geolocation) {
    alert("your brower doesn't support geolocation");
    return;
  }

  const successCallBack = position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // leaflet Map
    let map = L.map('map');
    map.setView([latitude, longitude], 16);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map).bindPopup("📍 You are here").openPopup();
  }

  const errorCallback = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.error("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.error("The request to get user location timed out.");
        break;
      default:
        console.error("An unknown error occurred.");
        break;
    }
  };

  navigator.geolocation.getCurrentPosition(successCallBack, errorCallback)
}

getUserLocation()

// lenis with the scroll trigger of gsap
let lenis;
function smoothScrolling() {
  lenis = new Lenis({
    duration: 3,
    smoothWheel: true,
    smoothTouch: true,
  });
  console.log("lenis is alive")

  // Keep ScrollTrigger updated
  lenis.on("scroll", ScrollTrigger.update);

  // Connect Lenis to GSAP's ticker
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  // Remove GSAP lag smoothing
  gsap.ticker.lagSmoothing(0);
  
}
smoothScrolling();

// Back to top
const backToTop = document.querySelector(".back-to-top");

gsap.set(backToTop, {
  opacity: 0,
  y: 20,
  scale: 0.8,
  visibility: "hidden"
});

ScrollTrigger.create({
  start: 400,
  end: "max",

  onEnter: () => {
    gsap.to(backToTop, {
      opacity: 1,
      y: 0,
      scale: 1,
      visibility: "visible",
      duration: 0.4,
      ease: "back.out(1.7)"
    });
  },

  onLeaveBack: () => {
    gsap.to(backToTop, {
      opacity: 0,
      y: 20,
      scale: 0.8,
      visibility: "hidden",
      duration: 0.3
    });
  }
});

backToTop.addEventListener("click", () => {
  lenis.scrollTo("body", {
    duration: 3
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.getAttribute("href");

    lenis.scrollTo(target);
  });
});

gsap.utils.toArray(".accordion-item").forEach(item => {

  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      y: -5,
      duration: 0.25
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      y: 0,
      duration: 0.25
    });
  });

});

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