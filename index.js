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
  var cartPrint = []
  var cartPrintL = []
  var array2Object = cart[0]
 if (cart.length === 0)  {
  return 'Your shopping cart is empty.'
} else  if (cart.length === 1) {
  cartPrint.push(`In your cart, you have`)
  cartPrint[0]= cartPrint +` ${array2Object.itemName} at $${array2Object.itemPrice}.`
  
} else {
  
  for (var i = 0; i < cart.length; i++) {
  array2Object = cart[i];
  console.log(array2Object.itemName)
  console.log(cart.length)
  cartPrint[0]= cartPrint +` ${array2Object.itemName} at $${array2Object.itemPrice}.`
  console.log(i)
  
  }
}
  return cartPrint
  
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
