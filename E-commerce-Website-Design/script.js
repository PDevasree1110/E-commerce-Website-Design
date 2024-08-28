// JavaScript for automatic slide transitions
document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Set an interval to switch slides every 3 seconds
    setInterval(nextSlide, 3000); // Change 3000 to any other value to adjust the delay
});




// Scroll to Top Button
$(document).ready(function() {
    // Show/Hide Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    // Scroll to Top on Button Click
    $('#scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Slider Functionality (Basic Example)
    let currentSlide = 0;
    const slides = $('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.eq(index).css('transform', 'translateX(0)');
        slides.not(':eq(' + index + ')').css('transform', 'translateX(100%)');
    }

    showSlide(currentSlide);

    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 3000);
});

$(document).ready(function() {
    // Scroll to Top Button
    const scrollTopBtn = $('#scrollTopBtn');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            scrollTopBtn.fadeIn();
        } else {
            scrollTopBtn.fadeOut();
        }
    });

    scrollTopBtn.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // Price Filter Form Validation
    $('#priceFilterForm').submit(function(event) {
        const minPrice = $('#minPrice').val();
        const maxPrice = $('#maxPrice').val();

        if (minPrice === '' || maxPrice === '') {
            alert('Please fill out both price fields.');
            event.preventDefault();
        } else if (parseFloat(minPrice) > parseFloat(maxPrice)) {
            alert('Min Price cannot be greater than Max Price.');
            event.preventDefault();
        }
    });
});
