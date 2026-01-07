// Navbar Scroll Effect (optional subtle change)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Search Suggestions
const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');

searchInput.addEventListener('focus', () => {
    suggestions.style.display = 'block';
});

searchInput.addEventListener('blur', () => {
    setTimeout(() => {
        suggestions.style.display = 'none';
    }, 200);
});

suggestions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        suggestions.style.display = 'none';
        searchInput.blur();
    }
});

// Hide suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = 'none';
    }
});

// Contact Modal
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const doneBtn = document.getElementById('done');
const thankyou = document.getElementById('thankyou');
const contactForm = document.getElementById('contact-form');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    contactForm.reset();
});

doneBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    const fullName = document.getElementById('full-name').value.trim();
    const dob = document.getElementById('dob').value;
    const service = document.getElementById('service').value;

    if (!fullName || !dob || !service) {
        alert('Please fill all required fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address (must contain @).');
        return;
    }

    // Close modal
    modal.style.display = 'none';

    // Show thank you
    thankyou.style.display = 'block';

    // Hide thank you after 3 seconds
    setTimeout(() => {
        thankyou.style.display = 'none';
        overlay.style.display = 'none';
        contactForm.reset();
    }, 3000);
});

// Big Slider (15 images) - Auto + Manual Dots
let bigSlideIndex = 0;
const bigSlides = document.querySelector('.big-slides');
const bigDots = document.querySelectorAll('.big-dot');
const totalBigSlides = 15;

function showBigSlide(index) {
    bigSlideIndex = index;
    bigSlides.style.transform = `translateX(-${index * 100}%)`;

    bigDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === bigSlideIndex);
    });
}

function nextBigSlide() {
    bigSlideIndex = (bigSlideIndex + 1) % totalBigSlides;
    showBigSlide(bigSlideIndex);
}

// Auto play every 4 seconds
let bigAutoPlay = setInterval(nextBigSlide, 4000);

// Manual dot control
bigDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(bigAutoPlay); // Pause auto on manual click
        showBigSlide(index);
        bigAutoPlay = setInterval(nextBigSlide, 4000); // Restart auto
    });
});

// Pause on hover
const bigSlider = document.querySelector('.big-slider');
bigSlider.addEventListener('mouseenter', () => clearInterval(bigAutoPlay));
bigSlider.addEventListener('mouseleave', () => {
    bigAutoPlay = setInterval(nextBigSlide, 4000);
});

// Initialize
showBigSlide(0);

// Reviews Auto Slider (15 cards)
let reviewIndex = 0;
const reviewsTrack = document.querySelector('.reviews-track');
const totalReviews = 15;
const reviewCardWidth = 360; // 320px card + 40px margin (adjust if needed)

function showReviews(index) {
    reviewIndex = index;
    reviewsTrack.style.transform = `translateX(-${index * reviewCardWidth}px)`;
}

function nextReview() {
    reviewIndex = (reviewIndex + 1) % totalReviews;
    showReviews(reviewIndex);
}

// Auto play every 5 seconds
let reviewAutoPlay = setInterval(nextReview, 5000);

// Pause on hover
const reviewsContainer = document.querySelector('.reviews-container');
reviewsContainer.addEventListener('mouseenter', () => clearInterval(reviewAutoPlay));
reviewsContainer.addEventListener('mouseleave', () => {
    reviewAutoPlay = setInterval(nextReview, 5000);
});

// Initialize
showReviews(0);