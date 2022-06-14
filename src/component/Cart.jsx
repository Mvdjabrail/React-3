import React from "react";
import css from "../component/cart.module.css";

export default function Title(props) {
  return (
    <>
      <div className={css.img1}>
        <img src={props.image} className={css.image} alt="Mac" />
        <div className={css.div1}>
          <p className={css.price}>{props.price}</p>
          <p className={css.name2}>{props.oldPrice}</p>
        </div>
        <p className={css.name}>{props.name}</p>
        <button className={css.btn1}>Купить</button>
      </div>
    </>
  );
}
