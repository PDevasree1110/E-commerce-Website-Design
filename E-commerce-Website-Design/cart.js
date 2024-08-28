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

    // Quantity Change Event
    $('.quantity').on('change', function() {
        updateCartTotal();
    });

    // Remove Button Event
    $('.remove-btn').on('click', function() {
        $(this).closest('tr').remove();
        updateCartTotal();
    });

    // Function to Update Cart Total
    function updateCartTotal() {
        let subtotal = 0;

        $('.cart-table tbody tr').each(function() {
            const price = parseFloat($(this).find('td:nth-child(3)').text().replace('$', ''));
            const quantity = $(this).find('.quantity').val();
            const total = price * quantity;

            $(this).find('td:nth-child(4)').text(`$${total.toFixed(2)}`);
            subtotal += total;
        });

        const tax = subtotal * 0.08; // Assuming 8% tax rate
        const total = subtotal + tax;

        $('.total-summary span:nth-child(1)').text(`$${subtotal.toFixed(2)}`);
        $('.total-summary span:nth-child(2)').text(`$${tax.toFixed(2)}`);
        $('.total-summary span:nth-child(3)').text(`$${total.toFixed(2)}`);
    }
});
