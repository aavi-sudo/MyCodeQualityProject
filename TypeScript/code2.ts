function fetchData(url: string): Promise<object> {
  return fetch(url).then((response) => response.json());
}

const result = fetchData(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log(result);
