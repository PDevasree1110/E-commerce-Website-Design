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
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    // Simulate Cart Totals
    function calculateOrderSummary() {
        const subtotal = 29.99;
        const tax = subtotal * 0.08;
        const total = subtotal + tax;

        $('.order-summary span:nth-child(1)').text(`$${subtotal.toFixed(2)}`);
        $('.order-summary span:nth-child(2)').text(`$${tax.toFixed(2)}`);
        $('.order-summary span:nth-child(3)').text(`$${total.toFixed(2)}`);
    }

    calculateOrderSummary();
});
