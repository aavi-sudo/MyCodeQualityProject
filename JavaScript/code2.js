// unsafeOperations.js

// Dangerous use of eval()
function executeUserCode(userCode) {
  eval(userCode); // SECURITY ISSUE: Code injection risk
}

// Implicit type coercion
function calculateDiscount(price, discount) {
  return price - discount; // RISK: `price` or `discount` might be strings
}

// Incorrect null checks
function processUser(user) {
  if (user === null || user === undefined) {
    console.log("Invalid user");
    return;
  }

  console.log(`Processing user ${user.name}`); // Runtime Error: Cannot read property 'name'
}

// Example usage
executeUserCode("console.log('This is malicious!')");
console.log(calculateDiscount("100", 20)); // Outputs: 80 (incorrect)
processUser(undefined); // Runtime Error
