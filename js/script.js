/* =========================================================
   PREMIUM MINIMAL PORTFOLIO — JAVASCRIPT
   JavaScript is intentionally small: mobile navigation,
   active page state, and subtle reveal animations only.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // =========================
    // MOBILE NAVIGATION
    // =========================
    const toggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector(".nav-links");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("nav-open", isOpen);
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                document.body.classList.remove("nav-open");
            });
        });
    }

    // =========================
    // ACTIVE NAVIGATION LINK
    // =========================
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link").forEach((link) => {
        const linkPath = link.getAttribute("href")?.split("/").pop();
        if (linkPath === currentPath) {
            link.setAttribute("aria-current", "page");
        }
    });

    // =========================
    // SUBTLE PAGE REVEAL
    // Respects prefers-reduced-motion in CSS.
    // =========================
    const revealItems = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealItems.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
    }
});
