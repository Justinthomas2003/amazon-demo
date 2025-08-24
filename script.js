 // Add item to cart
 function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to your cart!");
}

// Show items in cart
function showCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            let itemElement = document.createElement("p");
            itemElement.innerHTML = `
                ${item.name} - ₹${item.price} 
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemElement);
            total += item.price;
        });
    }

    // Update total
    let totalElement = document.getElementById("total") || document.getElementById("total-amount");
    if (totalElement) {
        totalElement.innerText = "Total: ₹" + total;
    }
}

// Remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        showCart();
    }
}
