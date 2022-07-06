import React from "react";
import { useState } from "react";
import { beautyList } from "../datas/beautyList";
import Items from "./Items";
import Categories from "./Categories";
import "../styles/ShoppingList.css";

export default function ShoppingList({ cart, updateCart }) {

  const [activeCategory, setActiveCategory] = useState("");

  const categories = beautyList.reduce(
    (acc, item) =>
      acc.includes(item.category) ? acc : acc.concat(item.category),
    []
  );

  function addToCart(name, price) {
    const currentitemSaved = cart.find((item) => item.name === name);
    // y a t il déja cet item dans le panier ?
    if (currentitemSaved) {
      const cartFilteredCurrentitem = cart.filter((item) => item.name !== name);
      updateCart([
        ...cartFilteredCurrentitem,
        { name, price, amount: currentitemSaved.amount + 1 }
        // amount = quantité précédente
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  };

  return (
    <div>
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="items-list">
        {beautyList.map(({ id, cover, name, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id} className="bloc">
              <Items cover={cover} name={name} price={price} />
              <button
                className="button-add-cart"
                onClick={() => addToCart(name, price)}
              >
                Ajouter au panier
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}
