var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function randomNumber(min, max) {
  var r =  Math.random() * (max - min) + min;
  return Math.floor(r)
}

function addToCart(item) {
var price = randomNumber(1, 100)
var subCart = {}
subCart['itemName'] = item
subCart['itemPrice'] = price
cart.push(subCart)
console.log(cart)
  return `${item} has been added to your cart.`
  
}
 


function viewCart() {
  

  
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
