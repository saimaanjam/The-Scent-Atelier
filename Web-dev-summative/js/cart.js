// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cartItems');
const subtotalEl = document.getElementById('subtotal');
const totalEl = document.getElementById('total');
const cartCountEl = document.getElementById('cartCount');

// Update cart count in navigation
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) {
        cartCountEl.textContent = `(${totalItems})`;
    }
}

// Render cart items
function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p class='empty-cart'>Your cart is empty.</p>";
        subtotalEl.textContent = "£0";
        totalEl.textContent = "£0";
        updateCartCount();
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        cartItem.innerHTML = `
            <img src="${item.image}" class="cart-img">

            <div class="cart-info">
                <h3>${item.product}</h3>
                <p>${item.size}</p>
                <p>£${item.price}</p>

                <div class="quantity-control">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>

            <div class="item-total">£${itemTotal}</div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    subtotalEl.textContent = `£${subtotal}`;
    totalEl.textContent = `£${subtotal + 10}`; // shipping = £10

    updateCartCount();
}

// Change quantity
function changeQty(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity < 1) {
        cart[index].quantity = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Remove item
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Initial render
renderCart();
updateCartCount();


