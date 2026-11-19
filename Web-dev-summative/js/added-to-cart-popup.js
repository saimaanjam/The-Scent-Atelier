function showCartPopup() {
    const popup = document.getElementById('cartPopup');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cartCount').textContent = cart.length;
}

// Run once when the page loads
updateCartCount();
