document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    searchIcon.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
        }
    }

    const cartIcon = document.querySelector('.nav-cart');
    let cartItems = [];

    cartIcon.addEventListener('click', openCart);

    function openCart() {
        alert(`Cart Items: ${cartItems.length === 0 ? 'Empty' : cartItems.join(', ')}`);
    }

    const categoryBoxes = document.querySelectorAll('.box');
    categoryBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const category = this.querySelector('h2').textContent;
            window.location.href = `${category.toLowerCase().replace(/\s+/g, '-')}.html`;
        });
    });

    const signInSection = document.querySelector('.nav-signin');
    signInSection.addEventListener('click', openSignInModal);

    function openSignInModal() {
        window.location.href = 'signin.html';
    }

    const returnsSection = document.querySelector('.nav-return');
    returnsSection.addEventListener('click', openOrdersPage);

    function openOrdersPage() {
        window.location.href = 'orders.html';
    }
});
