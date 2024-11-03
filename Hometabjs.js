// script.js for sidebar menu
document.getElementById('toggleButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === "-250px") {
      sidebar.style.right = "0";
    } else {
      sidebar.style.right = "-250px";
    }
// Close sidebar when clicking the close button
  document.getElementById('closeButton').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.right = "-250px";
  });
});

// Close sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('toggleButton');
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.style.right = "-250px";
    }
});

// Add to Cart and Add to Favorite Icon
const cartIcons = document.querySelectorAll('.cart-icon');
const favoritesIcons = document.querySelectorAll('.favorites-icon');
cartIcons.forEach(cartIcon => {
    cartIcon.addEventListener('click', function() {
        if (cartIcon.src.includes('Cart.png')) {
            cartIcon.src = 'Cart2.png';
        } else {
            cartIcon.src = 'Cart.png';
        }
    });
});
favoritesIcons.forEach(favoritesIcon => {
    favoritesIcon.addEventListener('click', function() {
        if (favoritesIcon.src.includes('Favorite.png')) {
            favoritesIcon.src = 'Favorite2.png';
        } else {
            favoritesIcon.src = 'Favorite.png';
        }
    });
});

// Add to Cart Functionality
// Open the sidebar
const openRightbar = document.getElementById("openRightbar");
const rightbar = document.getElementById("rightbar");
const closeRightbar = document.getElementById("closeRightbar");
const cartItems = document.getElementById("cartItems");
const totalProducts = document.getElementById("totalProducts");
const totalPrice = document.getElementById("totalPrice");
const removeAll = document.getElementById("removeAll");

// To hold cart data
let cart = [];
let totalItems = 0;
let totalCost = 0;

// Function to update the cart display
function updateCartDisplay() {
    cartItems.innerHTML = ''; // Clear the current items
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `${item.name} - ${item.price} PHP`;
        cartItems.appendChild(itemDiv);
    });
    totalProducts.innerText = totalItems;
    totalPrice.innerText = totalCost;
}

// Function to add item to the cart
function addToCart(image, name, price) {
    cart.push({ image, name, price });
    totalItems += 1;
    totalCost += price;
    updateCartDisplay();
}

// Event listeners for opening and closing the sidebar
openRightbar.addEventListener("click", function (event) {
    event.preventDefault();
    rightbar.style.width = "250px";
});

closeRightbar.addEventListener("click", function () {
    rightbar.style.width = "0";
});

// Remove all items from the cart
removeAll.addEventListener("click", function () {
    cart = [];
    totalItems = 0;
    totalCost = 0;
    updateCartDisplay();
});

// Example of adding items to the cart when clicking the cart icon
const cartIcon = document.querySelectorAll('.cart-icon');

cartIcon.forEach((icon, index) => {
    icon.addEventListener("click", function () {
        const productName = document.querySelectorAll('.card-title')[index].innerText; // Get product name
        const productPrice = parseFloat(document.querySelectorAll('.price-box')[index].innerText.replace(" PHP", "")); // Get product price
        addToCart(icon.src, productName, productPrice); // Add item to cart
        alert(`${productName} has been added to the cart!`); // Alert message
    });
});
