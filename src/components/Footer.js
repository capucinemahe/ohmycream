import React from "react";
import { useState } from "react";
import "../styles/Footer.css";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");

  const [count, setCount] = useState(0);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes("@")) {
      alert("Attention, ceci n'est pas une adresse email valide");
    }
  }

  return (
    <footer className="footer">
      <div className="footer-elem">🌿</div>
      <div className="footer-elem">
        Laissez ici votre mail pour recevoir nos actualités :
      </div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />

      <p>test counter</p>

      <button onClick={() => setCount(count + 1)}> Increment </button>
      <button onClick={() => setCount(count - 1)}> Decrement </button>

      <p>{count}</p>

      <button onClick={() => setCount(0)}> Reset </button>
    </footer>
  );
}
