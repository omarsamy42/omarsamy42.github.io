

let activeElement= document.querySelector('.cart');
function open_close_cart(){
    activeElement.classList.toggle('active')
}
document.body.appendChild(activeElement);
// var swiper = new Swiper(".slide-swp", {
//       pagination: {
//         el: ".swiper-pagination",
//         dynamicBullests: true,
//         clickable:true,
//       },
//       autoplay:{
//       delay:2500,
//       },
//       loop:true
//     });
    
//  All products on the page 
const products = [
  { id: 1,  name: "ASUS TUF Gaming F 15",            price: 600,  img: "images/asus.png" },
  { id: 2,  name: "ASUS Vivobook 16",                price: 800,  img: "images/vivobook.png" },
  { id: 3,  name: "HP Victus 15",                    price: 720,  img: "images/victus.png" },
  { id: 4,  name: "Lenovo LOQ essential",            price: 730,  img: "images/lenovoloq.png" },
  { id: 5,  name: "MacBook Pro 14",                  price: 1400, img: "images/macbook.png" },
  { id: 6,  name: "AULA S20 USB Wired Gaming Mouse", price: 15,   img: "images/mouse.png" },
  { id: 7,  name: "ONIKUMA K10 RGB Gaming Headset",  price: 25,   img: "images/headphone.png" },
  { id: 8,  name: "ASUS TUF Gaming RA07 K3",         price: 64,   img: "images/keyboard.png" },
  { id: 9,  name: "GameSir G7 SE Wired Controller",  price: 44,   img: "images/gaming.png" },
  { id: 10, name: "TAIKESEN Laptop Bag",             price: 30,   img: "images/bag.png" },
  { id: 11, name: "AMD Ryzen 5 8500G (Tray)",        price: 174,  img: "images/amd2.png" },
  { id: 12, name: "Case GIGABYTE C200 GLASS",        price: 42,   img: "images/case.png" },
  { id: 13, name: "Airline W6 184QAX Access Point",  price: 80,   img: "images/router.png" },
  { id: 14, name: "Cooler Master MWE Gold 1050 V2",  price: 147,  img: "images/cooler.png" },
  { id: 15, name: "AMD Ryzen 7 5700G w/ Radeon",     price: 234,  img: "images/amd.png" },
];
 
//  Cart array — each item looks like: { id, name, price, img, quantity } 
let cart = [];
 
 
//  Open or close the cart panel 
function open_close_cart() {
  document.querySelector(".cart").classList.toggle("open");
}
 
 
//  Add a product to the cart 
function addToCart(productId) {
 
  // Check if the item is already in the cart
  let existingItem = cart.find(item => item.id === productId);
 
  if (existingItem) {
    // Item already exists → just increase its quantity
    existingItem.quantity++;
  } else {
    // New item → find it in the products list and add it
    let product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }
 
  updateCart();
 
  // Open the cart automatically when something is added
  document.querySelector(".cart").classList.add("open");
}
 
 
//  Increase or decrease quantity 
function changeQuantity(productId, amount) {
  let item = cart.find(i => i.id === productId);
 
  item.quantity += amount;
 
  // If quantity reaches 0, remove the item completely
  if (item.quantity === 0) {
    cart = cart.filter(i => i.id !== productId);
  }
 
  updateCart();
}
 
 
//  Delete an item from the cart 
function deleteItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}
 
 
// Update everything in the cart (items, count, total) 
function updateCart() {
  let cartBox      = document.getElementById("cart_item");
  let totalCount   = 0;
  let totalPrice   = 0;
 
  // Clear the cart display
  cartBox.innerHTML = "";
 
  if (cart.length === 0) {
    // Cart is empty → show message and close the panel
    cartBox.innerHTML = "<p class='cart-empty-msg'>🛒 Your cart is empty</p>";
    document.querySelector(".cart").classList.remove("open");
 
  } else {
    // Loop through each item and create its HTML
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.price * item.quantity;
 
      cartBox.innerHTML += `
        <div class="item_cart">
          <img src="${item.img}" alt="${item.name}">
          <div class="content">
            <h4>${item.name}</h4>
            <p class="price_cart">$${item.price}</p>
            <div class="quantity_control">
              <button onclick="changeQuantity(${item.id}, -1)">-</button>
              <span class="quantity">${item.quantity}</span>
              <button onclick="changeQuantity(${item.id}, +1)">+</button>
            </div>
          </div>
          <button class="delete_item" onclick="deleteItem(${item.id})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });
  }
 
  // Update the counter badge on the cart icon
  document.querySelectorAll(".count").forEach(el => el.textContent = totalCount);
 
  // Update "Cart Items: X" in the cart header
  document.querySelector(".count_item_cart").textContent = totalCount;
 
  // Update the total price
  document.querySelector(".price_cart_total").textContent = "$" + totalPrice;
}
 
 
// Connect each "Add to Cart" button to its product
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".card button");
 
  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      addToCart(index + 1);  // index 0 = product id 1, index 1 = product id 2 ...
    });
  });
});
