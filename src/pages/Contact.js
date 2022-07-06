import React from "react";
import { useState } from "react";
import "../styles/Contact.css";
import Nav from "../components/Nav";

export default function Contact() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [firstname, setFirstName] = useState("");
    const [message, setMessage] = useState("");


  return (
    <div className="contact">
      <Nav />

      <h1>Bienvenue sur notre page de contact</h1>
      <h2>Remplissez le formulaire ci-dessous et nous reviendrons vers vous sous 24h</h2>
      <form className="form">
<input className="inputs" type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} required />
<input className="inputs" type="text" placeholder="Votre nom" value={name} onChange={(e) => setName(e.target.value)} required />
<input className="inputs" type="text" placeholder="Votre prénom" value={firstname} onChange={(e) => setFirstName(e.target.value)} required />
<input className="inputs" type="text" placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)} required />
<button className="inputs">Envoyer !</button>
      </form>

      <p>{email}</p>




    </div>
  );
};
