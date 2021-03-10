import React from "react";
import style from "./style/footer.module.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <p>Created by Caleb &copy; {date}</p>
    </footer>
  );
};

export default Footer;
