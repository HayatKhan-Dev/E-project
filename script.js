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

}