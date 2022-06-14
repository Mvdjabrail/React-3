import React from "react";
import css from '../component/header.module.css'

export default function Header() {
  return <>
  <div className={css.title}>
    <h3>Intocode Coding Shopcapm</h3>
    <h5 className={css.h5}>Гаджеты и аксессуары</h5>
    <h5 className={css.hh5}>Бытовая техника</h5>
    <h5>Прочее</h5>
  </div>
  </>;
}
