// This is a function that validates a Visa credit card that starts with 4, 
// master card number that starts with 5 
// discover card number that starts with 6011  
// and America Experess that starts with 34 or 37

function validateCreditCard(cardNumber) {
    // Define the regular expression for a valid credit card number
    var card_num = /^4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}$/;
    // Test the card number against the regular expression
    if (card_num.test(cardNumber))
     {
      console.log("Valid credit card number");
    } 
    else
     {
      console.log("Invalid credit card number");
    }
  }
  
  // Example usage
  validateCreditCard("41234567890123"); // valid
  validateCreditCard("4123456789012345678"); // valid
  validateCreditCard("5123456789012345"); // valid
  validateCreditCard("6011123456789012"); // valid
  validateCreditCard("1234 1234 1234 1234"); // invalid
  


//   Note that the first one is a valid Visa card with 13 digits, 
//   the second one is a valid Visa card with 16 digits, 
//   the third one is invalid as Visa card should have maximum of 16 digits, 
//   the fourth one is a valid MasterCard card with 16 digits, 
//   and the last one is an invalid card number
  
  
  
  