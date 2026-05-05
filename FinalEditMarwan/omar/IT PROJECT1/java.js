// ─────────────────────────────────────────
//  SWIPER
// ─────────────────────────────────────────
try {
  if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
      pagination: { el: ".swiper-pagination", dynamicBullets: true, clickable: true },
      autoplay: { delay: 2500 },
      loop: true
    });
  }
} catch (e) {
  console.log("Swiper not loaded");
}


// ─────────────────────────────────────────
//  PAGE DEPTH — so image paths work on ALL pages
//  Root pages (index.html)          → prefix = ''
//  shady/ pages (contact, profile)  → prefix = '../'
//  omar/IT PROJECT1/ pages          → prefix = '../../'
// ─────────────────────────────────────────
function getRootPrefix() {
  const path = window.location.pathname;
  if (path.includes("IT PROJECT1") || path.includes("IT%20PROJECT1")) return "../../";
  // detect shady/ or any single-level subfolder
  const parts = path.split('/').filter(p => p !== '');
  // last part is the filename
  const depth = parts.length - 1;
  if (depth <= 0) return '';
  if (depth === 1) return '../';
  return '../../';
}

// All images stored relative to ROOT
const IMG_BASE = 'omar/IT PROJECT1/images/';

// ─────────────────────────────────────────
//  PRODUCTS
// ─────────────────────────────────────────
const products = [
  { id: 1,  name: "ASUS TUF Gaming F 15",            price: 600,  img: IMG_BASE + "asus.png" },
  { id: 2,  name: "ASUS Vivobook 16",                price: 800,  img: IMG_BASE + "vivobook.png" },
  { id: 3,  name: "HP Victus 15",                    price: 720,  img: IMG_BASE + "victus.png" },
  { id: 4,  name: "Lenovo LOQ essential",            price: 730,  img: IMG_BASE + "lenovoloq.png" },
  { id: 5,  name: "MacBook Pro 14",                  price: 1400, img: IMG_BASE + "macbook.png" },
  { id: 6,  name: "AULA S20 USB Wired Gaming Mouse", price: 15,   img: IMG_BASE + "mouse.png" },
  { id: 7,  name: "ONIKUMA K10 RGB Gaming Headset",  price: 25,   img: IMG_BASE + "headphone.png" },
  { id: 8,  name: "ASUS TUF Gaming RA07 K3",         price: 64,   img: IMG_BASE + "keyboard.png" },
  { id: 9,  name: "GameSir G7 SE Wired Controller",  price: 44,   img: IMG_BASE + "gaming.png" },
  { id: 10, name: "TAIKESEN Laptop Bag",             price: 30,   img: IMG_BASE + "bag.png" },
  { id: 11, name: "AMD Ryzen 5 8500G (Tray)",        price: 174,  img: IMG_BASE + "amd2.png" },
  { id: 12, name: "Case GIGABYTE C200 GLASS",        price: 42,   img: IMG_BASE + "case.png" },
  { id: 13, name: "Airline W6 184QAX Access Point",  price: 80,   img: IMG_BASE + "router.png" },
  { id: 14, name: "Cooler Master MWE Gold 1050 V2",  price: 147,  img: IMG_BASE + "cooler.png" },
  { id: 15, name: "AMD Ryzen 7 5700G w/ Radeon",     price: 234,  img: IMG_BASE + "amd.png" },
];


// ─────────────────────────────────────────
//  CART  (localStorage so it persists across pages)
// ─────────────────────────────────────────
function loadCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
function saveCart(c) {
  localStorage.setItem("cart", JSON.stringify(c));
}

function open_close_cart() {
  const cartEl = document.querySelector(".cart");
  if (cartEl) cartEl.classList.toggle("open");
}

function addToCart(productId) {
  let cart = loadCart();
  let existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    let product = products.find(p => p.id === productId);
    if (product) cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  updateCart();
  const cartEl = document.querySelector(".cart");
  if (cartEl) cartEl.classList.add("open");
}

function changeQuantity(productId, amount) {
  let cart = loadCart();
  let item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
  saveCart(cart);
  updateCart();
}

function deleteItem(productId) {
  saveCart(loadCart().filter(i => i.id !== productId));
  updateCart();
}

function updateCart() {
  const cartBox = document.getElementById("cart_item");
  if (!cartBox) return;

  const prefix = getRootPrefix();
  let cart = loadCart();
  let totalCount = 0;
  let totalPrice = 0;
  cartBox.innerHTML = "";

  if (cart.length === 0) {
    cartBox.innerHTML = "<p class='cart-empty-msg'>🛒 Your cart is empty</p>";
    const cartEl = document.querySelector(".cart");
    if (cartEl) cartEl.classList.remove("open");
  } else {
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.price * item.quantity;
      const imgSrc = prefix + item.img;
      cartBox.innerHTML += `
        <div class="item_cart">
          <img src="${imgSrc}" alt="${item.name}">
          <div class="content">
            <h4>${item.name}</h4>
            <p class="price_cart">$${item.price}</p>
            <div class="quantity_control">
              <button class="decreade_quantity" onclick="changeQuantity(${item.id}, -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="increade_quantity" onclick="changeQuantity(${item.id}, +1)">+</button>
            </div>
          </div>
          <button class="delete_item" onclick="deleteItem(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>`;
    });
  }

  document.querySelectorAll(".count").forEach(el => el.textContent = totalCount);
  const ci = document.querySelector(".count_item_cart");
  if (ci) ci.textContent = totalCount;
  const pt = document.querySelector(".price_cart_total");
  if (pt) pt.textContent = "$" + totalPrice;
}


// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
function applyAuthState() {
  const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");
  document.querySelectorAll(".sign-in-wrapper").forEach(el => {
    el.style.display = user ? "none" : "";
  });
}

function goToProfile(profileUrl) {
  localStorage.setItem("profileReturnPage", window.location.href);
  window.location.href = profileUrl;
}

function logOut() {
  localStorage.removeItem("loggedInUser");
  const returnPage = localStorage.getItem("profileReturnPage") || "index.html";
  window.location.href = returnPage;
}


// ─────────────────────────────────────────
//  SEARCH
// ─────────────────────────────────────────
function initSearch() {
  document.querySelectorAll(".search-input, #search").forEach(input => {
    input.addEventListener("input", function () {
      const query = this.value.toLowerCase().trim();
      document.querySelectorAll(".card").forEach(card => {
        card.style.display = (!query || card.innerText.toLowerCase().includes(query)) ? "" : "none";
      });
    });
  });
}


// ─────────────────────────────────────────
//  ADD-TO-CART BUTTONS
// ─────────────────────────────────────────
function initAddToCartButtons() {
  const path = window.location.pathname;
  let startId = 1;
  if (path.includes("products2")) startId = 6;
  else if (path.includes("products3")) startId = 11;

  document.querySelectorAll(".card button").forEach(function (button, index) {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      addToCart(startId + index);
    });
  });
}


// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  updateCart();
  applyAuthState();
  initSearch();
  initAddToCartButtons();
});