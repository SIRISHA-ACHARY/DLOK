function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Function to reveal elements on scroll
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.box, .info-box, .product, .about-details, .contact-info-section, .image-content');
    
    const options = {
        root: null, // use the viewport
        threshold: 0.5 // When 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, options);

    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize the scroll reveal function
revealOnScroll();




document.addEventListener("DOMContentLoaded", function () {
    const benefitBoxes = document.querySelectorAll(".benefit-box");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, { threshold: 0.2 }); // Adjust threshold to control when the animation starts

    benefitBoxes.forEach(box => observer.observe(box));
});




// Function to handle the entry of the element into the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when element is in view
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}






// Function to handle the entry of the element into the viewport
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when element is in view
            // We keep observing the element even after the animation to allow repeated animation
            observer.observe(entry.target);
        } else {
            entry.target.classList.remove('visible'); // Remove 'visible' class when element is out of view
        }
    });
}

// Set up the Intersection Observer options
const options = {
    root: null,  // Use the viewport as the root
    rootMargin: '0px',  // No margin offset
    threshold: 0.2// Trigger the callback when 50% of the element is in view
};

// Create an observer instance with the callback and options
const observer = new IntersectionObserver(handleIntersection, options);

// Target all benefit boxes for observation
const benefitBoxes = document.querySelectorAll('.benefit-box');
benefitBoxes.forEach(box => {
    observer.observe(box);  // Start observing each benefit box
});

document.querySelectorAll('.benefit-box, .contact-info-section, .info-box, .box, .product-box').forEach(element => {
    observer.observe(element);
});




// document.addEventListener("DOMContentLoaded", function () {
//     const products = document.querySelectorAll(".product");

//     const productObserver = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible"); // Add animation when in view
//             } else {
//                 entry.target.classList.remove("visible"); // Remove animation when out of view
//             }
//         });
//     }, { threshold: 0.2 }); // Adjust threshold to control when animation starts

//     products.forEach(product => productObserver.observe(product));
// });





