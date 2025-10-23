// Handle the contact form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
});

// Cart array to hold added products
let cart = [];

// Function to add products to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';  // Clear cart contents before displaying

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${item.name} - $${item.price}`;
            cartItems.appendChild(cartItem);
        });
    }
}

// Function to handle checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products to your cart.');
    } else {
        alert('Thank you for your order! Your items will be ready soon.');
        cart = []; // Clear the cart after checkout
        displayCart(); // Update cart display
    }
}

function displaySelectedProduct() {
    const selectedProduct = document.getElementById('product-search').value;
    const allProducts = document.querySelectorAll('.product');
    
    // Hide all products initially
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Show the selected product
    if (selectedProduct) {
        const productToDisplay = document.querySelector(`#product1 h3:contains("${selectedProduct}")`);
        if (productToDisplay) {
            productToDisplay.closest('.product').style.display = 'block';
        }
    } else {
        // If no product is selected, show all products
        allProducts.forEach(product => {
            product.style.display = 'block';
        });
    }
}
