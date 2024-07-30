document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    // Change navbar background color on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "blue"; // Darker background when scrolled
        } else {
            navbar.style.backgroundColor = "#333"; // Original background color
        }
    });

    const navItems = document.querySelectorAll(".nav-item a");

    navItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.color = "#ff6347"; // Change color on hover
        });

        item.addEventListener("mouseout", () => {
            item.style.color = "#fff"; // Change back to original color
        });
    });

    // Add hover effect to sections
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.transform = "translateY(-10px) scale(1.05)"; // Move section up and scale on hover
            section.style.backgroundColor = "#b3e5fc"; // Change background color on hover
            section.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)"; // Add box shadow on hover
        });

        section.addEventListener("mouseout", () => {
            section.style.transform = "translateY(0) scale(1)"; // Reset position and scale
            section.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Reset background color
            section.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)"; // Reset box shadow
        });
    });
});
