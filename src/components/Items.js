import React from "react";
import "../styles/Items.css";

export default function Items({ id, cover, name, price }) {

  function handleClick(itemName) {
    alert(`Vous voulez acheter 1 ${itemName} ? Très bon choix`)
  };

  return (
    <ul>
      <li key={id} className="item" onClick={() => handleClick(name)}>
        <img className="item-cover" src={cover} alt={`${name} cover`} />
        <div className="item-name">{name}</div>
        <div className="item-price">{price} €</div>
      </li>
    </ul>
  );
}
