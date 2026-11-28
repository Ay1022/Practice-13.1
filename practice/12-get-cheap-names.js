// Task 12: getCheapNames (Medium)
// Return the names of the products that cost less than limit.
//
// - Use filter, then forEach with push to collect the names.
// - Nothing matches: return [].

function getCheapNames(products, limit) {
  // your code
   let arr =[];
   products.filter((product)=> product.price < limit).forEach(product => arr.push(product.name)
  );
  return arr;
  



}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getCheapNames(products, 20));   // ["Pen", "Book"]
console.log(getCheapNames(products, 2));    // []
console.log(getCheapNames(products, 100));  // ["Pen", "Book", "Bag"]
