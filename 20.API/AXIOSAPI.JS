// AXIOS 
// it is a powerful client for making network requests in js
// axios.get() is used to make a get request
// axios.post() is used to make a post request

// GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log("GET:", response.data);
  })
  .catch(error => {
    console.error("Error in GET:", error);
  });

// POST request
let post = {
  name: "alice",
  age: 25
};

axios.post('https://jsonplaceholder.typicode.com/posts', post)
  .then(response => {
    console.log("POST:", response.data);
  })
  .catch(error => {
    console.error("Error in POST:", error);
  });
