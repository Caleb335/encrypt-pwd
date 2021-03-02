var btoa = require("btoa");

// had to make use of the btoa web API method that creates a base64 encoded string
// so you'd be able to run this function in you console/terminal
// the function takes in the user's password as an
// argument and then returns the encoded value

const encodePwd = (password) => {
  return console.log(btoa(password));
};

encodePwd("abstraction_pepper7");
