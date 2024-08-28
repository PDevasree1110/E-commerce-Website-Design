$(document).ready(function() {
    // Scroll to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollTopBtn').fadeIn();
        } else {
            $('#scrollTopBtn').fadeOut();
        }
    });

    $('#scrollTopBtn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
});
