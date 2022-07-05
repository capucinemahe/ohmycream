import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {

  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  //La méthode JSON.parse() analyse une chaîne de caractères JSON et
  //construit la valeur JavaScript ou l'objet décrit par cette chaîne

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON string

  return (
    <div>
      <Nav />
      <Banner />
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
      <Footer />
    </div>
  );
};

export default Home;