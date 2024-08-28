$(document).ready(function() {
    // Price Filter
    $('#priceFilterForm').on('submit', function(e) {
        e.preventDefault();
        const minPrice = parseFloat($('#minPrice').val());
        const maxPrice = parseFloat($('#maxPrice').val());

        $('.product-item').each(function() {
            const productPrice = parseFloat($(this).find('p:contains("Price")').text().replace('Price: $', ''));
            if (productPrice >= minPrice && productPrice <= maxPrice) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Scroll to Top Button
    const scrollTopBtn = $('#scrollTopBtn');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            scrollTopBtn.fadeIn();
        } else {
            scrollTopBtn.fadeOut();
        }
    });

    scrollTopBtn.click(function() {
        $('html, body').animate({scrollTop: 0}, 500);
    });

    // Responsive Navigation Toggle (for mobile view)
    $('nav ul').before('<div class="menu-toggle">Menu</div>');
    $('.menu-toggle').click(function() {
        $('nav ul').slideToggle();
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('nav ul').removeAttr('style');
        }
    });
});
