// JavaScript to handle header style changes on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Section-2: Image Display and Hover Effect
const programLinks = document.querySelectorAll('.links h2');
const images = document.querySelectorAll('.images img');

// Display the first image by default and set initial colors
let activeImageIndex = 0;
let activeLinkIndex = 0;
images.forEach((img, index) => img.style.display = index === 0 ? 'block' : 'none'); // Display only the first image
programLinks[activeLinkIndex].style.color = '#0b1d3a'; // Set color for the active link

// Set event listeners for hover functionality
programLinks.forEach((link, index) => {
  link.addEventListener('mouseenter', () => {
    // Hide the current active image and reset color for the previous link
    images[activeImageIndex].style.display = 'none';
    programLinks[activeLinkIndex].style.color = '#4d88a4'; // Default color

    // Show the new image and update active indices
    images[index].style.display = 'block';
    activeImageIndex = index;

    // Change color of the hovered link and set it as active
    link.style.color = '#0b1d3a';
    activeLinkIndex = index;
  });
});

let currentIndex = 0;
const logosToShow = 6; // Show 6 images at a time
const logos = document.querySelectorAll(".logo-container img");

function updateSlide() {
    logos.forEach((logo, index) => {
        if (index >= currentIndex && index < currentIndex + logosToShow) {
            logo.style.display = "inline-block";
        } else {
            logo.style.display = "none";
        }
    });
}

function nextSlide() {
    if (currentIndex + logosToShow < logos.length) {
        currentIndex += logosToShow;
    } else {
        currentIndex = 0;
    }
    updateSlide();
}

function prevSlide() {
    if (currentIndex - logosToShow >= 0) {
        currentIndex -= logosToShow;
    } else {
        currentIndex = logos.length - logosToShow;
    }
    updateSlide();
}

// Initialize the first slide
updateSlide();


// Section 6 functionality
let currentIndex6 = 0;
const logosToShow6 = 6; // Show 6 images at a time for section 6
const logos6 = document.querySelectorAll("#logo-container-6 img");

function updateSlide6() {
    logos6.forEach((logo, index) => {
        if (index >= currentIndex6 && index < currentIndex6 + logosToShow6) {
            logo.style.display = "inline-block";
        } else {
            logo.style.display = "none";
        }
    });
}

function nextSlide6() {
    if (currentIndex6 + logosToShow6 < logos6.length) {
        currentIndex6 += logosToShow6;
    } else {
        currentIndex6 = 0;
    }
    updateSlide6();
}

function prevSlide6() {
    if (currentIndex6 - logosToShow6 >= 0) {
        currentIndex6 -= logosToShow6;
    } else {
        currentIndex6 = logos6.length - logosToShow6;
    }
    updateSlide6();
}

// Initialize the first slide for section 6
updateSlide6();




