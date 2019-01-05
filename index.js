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
var subcart = {}
subcart['itemName'] = item
subcart['itemPrice'] = price
cart.push(`${subcart}`)
console.log(cart)
 
 return cart

}

function addToCart(item) {
var price = randomNumber(1, 100)
subCart['itemName'] = item
subCart['itemPrice'] = price

console.log(subCart)
 

}








function viewCart() {
  // write your code here
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
