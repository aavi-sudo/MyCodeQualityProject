function fetchData(url) {
  // No type validation on input or output
  return fetch(url).then((response) => response.json());
}

const result = fetchData(123); // No error, but 123 is invalid as a URL
console.log(result);
