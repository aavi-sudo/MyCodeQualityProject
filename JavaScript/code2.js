// orderProcessing.js

// Function to create an order
function createOrder(order) {
  if (!order.id || !order.amount || !order.items) {
    console.log("Invalid order data"); // Loosely validated
    return;
  }

  // Order processing logic
  console.log(`Order ${order.id} created with amount ${order.amount}`);
  return order;
}

// Function to calculate total amount
function calculateTotal(order) {
  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity; // Risk: Missing price or quantity will cause NaN
  }
  return total;
}

// Function to fetch order by ID
function getOrderById(orders, id) {
  return orders.find((order) => order.id === id); // Risk: No type enforcement for 'id'
}

// Orders array
const orders = [
  { id: 1, amount: 100, items: [{ price: 10, quantity: 2 }, { price: 20, quantity: 3 }] },
  { id: 2, amount: "two hundred", items: [{ price: 50, quantity: 2 }] }, // Invalid amount type
  { id: 3, items: [{ price: 30, quantity: "three" }] }, // Invalid quantity type
];

// Create a new order
const newOrder = createOrder({ id: 4, amount: null, items: [{ price: 10, quantity: 1 }] });
console.log("New Order:", newOrder); // Invalid: amount is null

// Calculate total for an order
const total = calculateTotal(orders[1]);
console.log("Total Amount:", total); // NaN due to invalid amount or quantity

// Fetch an order by ID
console.log(getOrderById(orders, "two")); // Fails silently: 'id' should be a number
