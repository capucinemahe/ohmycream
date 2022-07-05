import React from 'react';
import { useState, useEffect } from 'react'
import '../styles/Cart.css'

// Notre composant Cart est maintenant devenu un stateful component, grâce à  useState
// Le composant Cart peut être re-render autant de fois que nécessaire, mais la valeur du panier sera préservée


export default function Cart({ cart, updateCart }) {

	const [isOpen, setIsOpen] = useState(false)
	const total = cart.reduce((acc, plantType) => acc + plantType.amount * plantType.price, 0)

//   useEffect(() => {
//     alert(`J'aurai ${total}€ à payer 💸`)
// }, [total]);

useEffect(() => {
  document.title = `OMC : ${total}€ de produits dans votre panier`
}, [total]);

	return isOpen ? (
		<div className='cart'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(false)}>
				Fermer le panier
			</button>

			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='cart-list'>
								{name} {price} € x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total} €</h3>
					<button className='cart-clear' onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div className='cart-empty'>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='cart-closed'>
			<button
				className='cart-toggle-button'
				onClick={() => setIsOpen(true)}>
				Ouvrir le Panier
			</button>
		</div>
	)
};