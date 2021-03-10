import React from "react";
import style from "./style/loader.module.css";

const Loader = () => {
  return (
    <div className={style.spinner}>
      <div className={style.doubleBounce1}></div>
      <div className={style.doubleBounce2}></div>
    </div>
  );
};

export default Loader;
