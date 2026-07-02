gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

    heroAnimation();
    counters();
    floatingHero();
    sectionAnimations();
    hoverAnimations();

});

// theme toggle 
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme","dark");
        }else{
            localStorage.setItem("theme","light");
        }

    });

}

// active navlinks
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("activeP"));
        link.classList.add("activeP")
    })
});

function heroAnimation() {

    const tl = gsap.timeline();

    tl.from(".page-badge", {

        opacity: 0,
        y: -40,
        duration: .6

    })

        .from(".pro-hero h1", {

            opacity: 0,
            y: 70,
            duration: .9,
            ease: "power3.out"

        }, "-=.3")

        .from(".pro-hero p", {

            opacity: 0,
            y: 40,
            duration: .7

        }, "-=.4")

        .to(".hero-btns button", {

            opacity: 1,
            stagger: .15,
            duration: .5

        }, "-=.4")

        .to(".hero-stats div", {

            opacity: 1,
            stagger: .15,
            duration: .7,
            ease: "back.out(1.7)"

        }, "-=.3")

        .from(".hero-image", {

            opacity: 0,
            scale: .7,
            rotate: 8,
            duration: 1

        }, "-=.8");

}

function floatingHero() {

    gsap.to(".hero-image", {

        y: -18,
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        ease: "sine.inOut"

    });

}

function counters() {

    document.querySelectorAll(".hero-stats h3").forEach(counter => {

        let end = parseInt(counter.innerText);

        gsap.fromTo(counter,
            { innerText: 0 },
            {

                innerText: end,

                duration: 2,

                snap: { innerText: 1 },

                scrollTrigger: {
                    trigger: ".hero-stats",
                    start: "top 80%"
                },

                onUpdate: function () {

                    counter.innerText = Math.floor(counter.innerText) + "+";

                }

            });

    });

}

function sectionAnimations() {

    animateCards(".categories", ".category-card");

    animateCards(".courses", ".course-card");

    animateCards(".roadmap", ".timeline-item");

    animateCards(".latest-research", ".research-cards");

    animateCards(".faculty-resources", ".resource-card");

    animateCards(".student-resources", ".student-card");

    animateCards(".case-studies", ".case-card");

    animateCards(".faq-section", ".accordion-item");

    animateCards(".education-cta", ".cta-box");

    animateCards(".footer", ".footer-top > *");

}

function animateCards(section, items) {

    const tl = gsap.timeline({

        scrollTrigger: {

            trigger: section,
            start: "top 70%"

        }

    });

    tl.from(section + " .section-heading", {

        opacity: 0,
        y: 60,
        duration: .8

    })

        .to(items, {

            opacity: 1,
            scale: 1,
            stagger: .15,
            duration: .8,
            ease: "power3.out"

        }, "-=.4");

}

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn => {

    btn.addEventListener("mousemove", (e) => {

        const rect = btn.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {

            x: x * .25,
            y: y * .25,
            duration: .4

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            x: 0,
            y: 0,
            duration: .4

        });

    });

});

function hoverAnimations() {

    [
        ".category-card",
        ".course-card",
        ".research-cards",
        ".resource-card",
        ".student-card",
        ".case-card"
    ]

        .forEach(selector => {

            gsap.utils.toArray(selector).forEach(card => {

                card.addEventListener("mouseenter", () => {

                    gsap.to(card, {

                        y: -12,
                        duration: .3,
                        boxShadow: "0px 25px 45px rgba(0,0,0,.15)"

                    });

                });

                card.addEventListener("mouseleave", () => {

                    gsap.to(card, {

                        y: 0,
                        duration: .3,
                        boxShadow: "0px 0px 0px rgba(0,0,0,0)"

                    });

                });

            });

        });

}

gsap.utils.toArray(

    ".category-card i,.course-icon,.resource-card i,.student-card i"

).forEach(icon => {

    gsap.to(icon, {

        y: -8,

        repeat: -1,

        yoyo: true,

        duration: 2 + Math.random(),

        ease: "sine.inOut"

    });

});

gsap.to(".hero-image", {

    yPercent: 20,

    ease: "none",

    scrollTrigger: {

        trigger: ".pro-hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

gsap.from(".timeline::before", {
    duration: 2
});