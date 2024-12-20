function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "vijay@gmail.com" && password === "12345") {
    alert("Login successful!");
    document.getElementById("login-page").style.display = "none";
    document.getElementById("ecommerce-page").style.display = "block";
  } else {
    alert("Invalid credentials. Please try again.");
  }
}
// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 999.99, image: "https://wallpaperswide.com/download/laptop_2-wallpaper-1024x1024.jpg" },
  { id: 2, name: "Phone", price: 499.99, image: "https://pics.craiyon.com/2023-06-23/b98fa3531688411c8f3cd159c9089454.webp" },
  { id: 3, name: "Headphones", price: 199.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB62hXt9t4OrKGJRk5UMxOyKEr1fTFlitBmg&s" },
  { id: 4, name: "Smartwatch", price: 299.99, image: "https://wowstores.in/cdn/shop/files/1_b98a8c52-1601-4920-8411-5dd0b52c2dfc_1024x1024.jpg?v=1711600637" },
  { id: 5, name: "Tablet", price: 399.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfo64deVgE_ewhW2emAT43liRQGB_cq7s1TA&s" },
  { id: 6, name: "Camera", price: 599.99, image: "https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2F56cb9e60-86df-4cd0-b15c-5d54c07bd24c.jpg&w=3840&q=75" },
  { id: 7, name: "Speaker", price: 149.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-vuAu3qnfqvk9GPMSn3-4DA06kc9RTKm8w&s" },
  { id: 8, name: "Monitor", price: 249.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXFaF_brVBqf3jKQ0W2Zz6u_x-d9uSsqvuA&s" },
  { id: 9, name: "Keyboard", price: 49.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3vmyov_XIoK_0Knng4lYc8mVnHLOBt09Dw&s" },
];


// Cart array to store selected products
let cart = [];

// Function to render products on the page
function renderProducts() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(productCard);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (product) {
    cart.push(product);
    renderCart();
  }
}

// Function to render the cart
function renderCart() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Clear existing content

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    cartItem.innerHTML = `
      <p>${item.name} - $${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;

    cartContainer.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalDisplay = document.getElementById("total");
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove a product from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

// Initialize the app
window.onload = function () {
  renderProducts();
  renderCart();
};