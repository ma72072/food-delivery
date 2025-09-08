let cart = [];
let total = 0;

// Show selected category
function showCategory(categoryId) {
  let categories = document.querySelectorAll(".category");
  categories.forEach(cat => cat.style.display = "none");
  document.getElementById(categoryId).style.display = "block";
}

// Default show Veg section
document.addEventListener("DOMContentLoaded", () => {
  showCategory("veg");
});

function addToCart(item, price, image) {
  cart.push({ item, price, image });
  total += price;
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${c.image}" alt="${c.item}">
        <p><strong>${c.item}</strong> - ₹${c.price}</p>
        <button onclick="removeItem(${index})">❌</button>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cart-count").innerText = cart.length;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function checkout() {
  if(cart.length === 0) {
    alert("Your cart is empty! 🛒");
  } else {
    alert("🎉 Order placed successfully! Your food is on the way 🚀");
    cart = [];
    total = 0;
    updateCart();
  }
}

// Dark / Light theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark-theme");

  // Change button icon 🌙 / ☀️
  const themeBtn = document.querySelector(".theme-toggle");
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.textContent = "☀️"; // light mode icon
  } else {
    themeBtn.textContent = "🌙"; // dark mode icon
  }
}



