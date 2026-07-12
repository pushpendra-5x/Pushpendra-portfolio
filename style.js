// Smooth fade-in animation on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Typing Effect

const text = "Python Developer";
const target = document.querySelector(".hero h2");

let index = 0;

function typing() {

    if (index < text.length) {
        target.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 120);
    }
}

target.innerHTML = "";
typing();


// Active Navbar Link

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});