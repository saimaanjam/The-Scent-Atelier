let cart = JSON.parse(localStorage.getItem('cart')) || [];

function loadOrderSummary() {
    const orderItemsDiv = document.getElementById('orderItems');
    orderItemsDiv.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        orderItemsDiv.innerHTML += `
            <div class="order-item">
                <span>${item.product} (${item.size}) × ${item.quantity}</span>
                <span>£${itemTotal}</span>
            </div>
        `;
    });

    document.getElementById('subtotal').textContent = `£${subtotal}`;
    document.getElementById('total').textContent = `£${subtotal + 10}`;
}

loadOrderSummary();


document.getElementById("placeOrderBtn").addEventListener("click", function () {

    // Collect required fields
    const requiredFields = [
        "fullName",
        "email",
        "phone",
        "address1",
        "city",
        "postcode"
    ];

    let allFilled = true;

    requiredFields.forEach(id => {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
            allFilled = false;
            field.style.border = "2px solid #f7c6d9";   // highlight missing field
        } else {
            field.style.border = "none";                // reset if filled
        }
    });

    if (!allFilled) {
    document.getElementById("luxuryModal").style.display = "flex";
    return;
    }
   

    // All fields filled → continue with order placement
   
    window.location.href = "order-confirmation.html";

});

// Close modal button
document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("luxuryModal").style.display = "none";
});

