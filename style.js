// ===============================
// Typing Animation
// ===============================

const typingText = document.querySelector(".typing-text");

const words = [
  "Python Developer",
  "B.Tech IT Student",
  "Machine Learning Enthusiast",
  "Web Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},
{
threshold:0.2
});

sections.forEach(section=>{

observer.observe(section);

});


// ===============================
// Active Navbar
// ===============================

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});


// ===============================
// Header Background Change
// ===============================

window.addEventListener("scroll",()=>{

const header=
document.querySelector(".header");

if(window.scrollY>80){

header.style.background="#161b22";

}

else{

header.style.background="rgba(13,17,23,.9)";

}

});


// ===============================
// Button Hover Animation
// ===============================

const buttons =
document.querySelectorAll(".btn,.certificate-btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});


// ===============================
// Welcome Message
// ===============================

window.onload=()=>{

console.log(
"Welcome to Pushpendra Kumar Patel Portfolio"
);

};
