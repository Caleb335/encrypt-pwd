import React from "react";

const App = () => {
  // making use of React's useState hook to store or hold
  // the state of the user's input
  const [inputs, setInputs] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  // an helper function or event handler
  // to handle the input change of the user
  const handleInputChange = (name) => (e) => {
    setInputs({
      ...inputs,
      [name]: e.target.value,
    });
    console.log(name);
  };

  const handleSubmit = () => {
    if (!inputs.fullname) {
      alert("fullname cannot be blank");
      return false;
    }
    if (!inputs.email) {
      alert("email address cannot be blank");
      return false;
    }
    if (!inputs.password) {
      alert("password field cannot be blank");
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="fullname">Full name</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="form-control"
          placeholder="enter your fullname"
          onChange={handleInputChange("fullname")}
          value={inputs.fullname}
        />
      </div>
      <div>
        <label htmlFor="fullname">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="enter your email address"
          onChange={handleInputChange("email")}
          value={inputs.email}
        />
      </div>
      <div>
        <label htmlFor="fullname">Password</label>
        <input
          type="password"
          name="password"
          id="pwd"
          className="form-control"
          placeholder="enter your password"
          onChange={handleInputChange("password")}
          value={inputs.password}
        />
      </div>
      <button className="btn">sign up</button>
    </form>
  );
};

export default App;
