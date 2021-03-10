import React from "react";
import Header from "../src/Layout/Header";
import Footer from "../src/Layout/Footer";
import App from "../src/container";

const Index = () => {
  return (
    <>
      <Header name="Awesome Posts" />
      <App />
      <Footer />
    </>
  );
};

export default Index;
