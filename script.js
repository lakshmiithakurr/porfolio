document.addEventListener("DOMContentLoaded", () => {
    // Scroll-triggered animations
    const fadeIns = document.querySelectorAll(".fade-in");
    const slideUps = document.querySelectorAll(".slide-up");

    const handleScroll = () => {
        fadeIns.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.animationPlayState = "running";
            }
        });

        slideUps.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.animationPlayState = "running";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
});
document.addEventListener("DOMContentLoaded", () => {
    // Scroll-triggered animations for fade-in and slide-up
    const fadeIns = document.querySelectorAll(".fade-in");
    const slideUps = document.querySelectorAll(".slide-up");

    const handleScroll = () => {
        fadeIns.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.animationPlayState = "running";
            }
        });

        slideUps.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.animationPlayState = "running";
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // GSAP Animations for Skills Section
    const skillCategories = document.querySelectorAll("#skills .col-lg-4");
    skillCategories.forEach((category, index) => {
        gsap.from(category, {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 80%", // Animation starts when 80% of the section is visible
                end: "bottom 20%", // Animation ends when 20% of the section is visible
                toggleActions: "play none none none",
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50, // Slide left or right alternately
            duration: 1,
            delay: index * 0.3, // Stagger delay for each category
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations for Achievements Section
    gsap.from("#achievements ul li", {
        scrollTrigger: {
            trigger: "#achievements",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: -50, // Slide-in from left
        duration: 1,
        stagger: 0.3, // Staggered delay for each item
    });

    // GSAP Animations for Testimonials Section
    gsap.from("#testimonials .col-lg-6", {
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50, // Slide-in from bottom
        duration: 1,
        stagger: 0.4, // Staggered delay for each block
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animation for Contact Me Section
    gsap.from("#contact-form input, #contact-form textarea, #contact-form button", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50, // Slide up
        duration: 1,
        stagger: 0.3, // Staggered delay for each field
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const photoContainer = document.querySelector(".photo-container");

    photoContainer.addEventListener("mousemove", (e) => {
        const { width, height, left, top } = photoContainer.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 10; // Horizontal tilt
        const y = ((e.clientY - top) / height - 0.5) * -10; // Vertical tilt

        photoContainer.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });

    photoContainer.addEventListener("mouseleave", () => {
        photoContainer.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
