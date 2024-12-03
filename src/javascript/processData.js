// The processData function takes an array of user objects as input.
const processData = (users) => {
  // The map method creates a new array by transforming each element (user object) in the 'users' array.
  return users.map(({ name, age, location }) => {
    // Destructuring is used here to extract 'name', 'age', and 'location' properties from each user object.
    // This simplifies the syntax and avoids needing to reference `user.name`, `user.age`, etc.
    return `Name: ${name}, Age: ${age}, Location: ${location}`;
    // Template literals are used to construct a string where the values of 'name', 'age', and 'location' are dynamically inserted.
  });
};

// Example usage of the processData function with an array of user objects.
const users = [
  { name: "John", age: 30, location: "New York" },
  { name: "Jane", age: 25, location: "London" },
  { name: "Alice", age: 35, location: "Paris" },
];

// Call the processData function and log the output.
console.log(processData(users));

// Expected Output:
// [
//   "Name: John, Age: 30, Location: New York",
//   "Name: Jane, Age: 25, Location: London",
//   "Name: Alice, Age: 35, Location: Paris"
// ]
