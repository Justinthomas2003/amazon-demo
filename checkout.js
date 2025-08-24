window.onload = function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalAmount = 0;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            let el = document.createElement("p");
            el.textContent = `${item.name} - ₹${item.price}`;
            cartContainer.appendChild(el);
            totalAmount += item.price;
        });
    }

    document.getElementById("total-amount").innerText = totalAmount;
};