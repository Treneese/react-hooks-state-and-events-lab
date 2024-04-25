import {useState} from "react";
import React from "react";


function Item({ name, category }) {
  const {isInCartCart, setInCart} = useState(false)

  function handleClick() {
    setIsInCart(!isInCart);

  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>

    </li>
  );
}

export default Item;
