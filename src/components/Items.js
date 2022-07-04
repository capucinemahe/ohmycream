import React from "react";
import "../styles/Items.css";

export default function Items({ id, cover, name, price }) {
  function handleClick(itemName) {
    // itemName est en paramètre de handleClick
    alert(`Vous voulez acheter 1 ${itemName} ? Très bon choix ✨`);
  }
  //se déclenche au click sur le nom du produit

  return (
    <ul>
      <li key={id} className="item" onClick={() => handleClick(name)}>
        {/* la fonction handleClick est déclarée directment dans onClick */}
        <img className="item-cover" src={cover} alt={`${name} cover`} />
        <div className="item-name">{name}</div>
        <div className="item-price">{price} €</div>
      </li>
    </ul>
  );
}
