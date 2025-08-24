function addToCartFromProduct() {
    let name = document.getElementById("product-name").textContent;
    let price = parseInt(document.getElementById("product-price").textContent);

    // Get cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}
