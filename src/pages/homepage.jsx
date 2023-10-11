import React from "react";
import style from "./style.module.css";

function Homepage() {
  return (
    <div>
      <h1>Ini tampilan HOME</h1>
      <h3 className="font-home">Styling css dari App.css</h3>
      <h3 className={style.fontHome}>Styling css dari style.module.css</h3>
      <h3 style={{ color: "purple" }}>Styling css inline</h3>
      <a href="/produk">buka halaman produk</a>
    </div>
  );
}

export default Homepage;
