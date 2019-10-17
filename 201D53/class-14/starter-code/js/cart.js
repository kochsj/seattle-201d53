/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var clearTheCart = document.getElementsByTagName('tr');
  for(var i = 0; i < clearTheCart.length; i++) {
    clearTheCart[i].remove();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
var rowCounter = 0;
function showCart() {

  // TODO: Find the table body
  var tableBodyFinder = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for(var i = 0; i < Cart.items.length; i++) {
    // TODO: Create a TR
      var tableCartRow = document.createElement('tr');
      tableCartRow.setAttribute('id', `${i}`);
  }
      
    // TODO: Create a TD for the delete link, quantity,  and the item
      var itemTDTag = document.createElement('td');
      var quantityTDTag = document.createElement('td')
      var deleteTDTag = document.createElement('td')
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
      tableBodyFinder.appendChild(tableCartRow);
      tableCartRow.appendChild(itemTDTag);
      tableCartRow.appendChild(quantityTDTag);
      tableCartRow.appendChild(deleteTDTag);
      rowCounter++;
}

deleteTDTag.addEventListener('click', removeItemFromCart);

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  table.removeRow(deleteTDTag);
  // TODO: Save the cart back to local storage
  Cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
