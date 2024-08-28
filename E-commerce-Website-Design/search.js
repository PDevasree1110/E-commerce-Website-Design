$(document).ready(function() {
    // Handle form submission
    $('#searchForm').on('submit', function(event) {
        event.preventDefault();
        const query = $('#searchInput').val().trim();

        // For demonstration, assume this is a function that searches and returns products
        // In a real application, you might make an AJAX request to a server
        performSearch(query);
    });

    // Function to display search results (mockup)
    function performSearch(query) {
        // Mock search results
        const results = [
            {
                name: 'Product 1',
                description: 'Description of Product 1.',
                price: '$29.99',
                imgSrc: 'product1.jpg',
                link: 'product-view.html?product_id=1'
            },
            {
                name: 'Product 2',
                description: 'Description of Product 2.',
                price: '$39.99',
                imgSrc: 'product2.jpg',
                link: 'product-view.html?product_id=2'
            }
            // Add more mock products as needed
        ];

        // Clear previous results
        $('#searchResults').empty();

        // Append search results
        results.forEach(result => {
            const resultHtml = `
                <div class="search-item">
                    <img src="${result.imgSrc}" alt="${result.name}">
                    <div>
                        <h3>${result.name}</h3>
                        <p>${result.description}</p>
                        <p><strong>Price:</strong> ${result.price}</p>
                        <a href="${result.link}">View Details</a>
                    </div>
                </div>
            `;
            $('#searchResults').append(resultHtml);
        });
    }

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
