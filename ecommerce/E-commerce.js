const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// create an array of products
const products = [
  {
    name: "Widget",
    price: 25.99
  },
  {
    name: "Gadget",
    price: 15.99
  },
  {
    name: "Shoe",
    price: 10.99
  }
];

// create an empty shopping cart
const shoppingCart = [];

// display the products
console.log("PRODUCTS");
for (let i = 0; i < products.length; i++) {
  console.log(`${i + 1}. ${products[i].name} - $${products[i].price}`);
}

// ask the user which product they would like to add to the cart
readline.question("\nEnter the number of the product you would like to add to the cart:", (productIndex) => {
  // add the product to the cart
  shoppingCart.push(products[productIndex - 1]);

  // display the shopping cart
  console.log("\nSHOPPING CART");
  for (let i = 0; i < shoppingCart.length; i++) {
    console.log(`${i + 1}. ${shoppingCart[i].name} - $${shoppingCart[i].price}`);
  }

  // calculate and display the total price of the items in the shopping cart
  let totalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalPrice += shoppingCart[i].price;
  }
  console.log(`\nTotal: $${totalPrice}`);

  // ask the user if they would like to checkout
  readline.question("\nWould you like to checkout? (y/n)", (checkout) => {
    // if the user chooses to checkout, display a thank you message
    if (checkout.toLowerCase() === "y") {
      console.log("\nThank you for your purchase!");
    }
    readline.close();
  });
});
