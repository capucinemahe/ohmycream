import React from 'react';
import { useState } from 'react'
import '../styles/Footer.css'

export default function Footer() {
	const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, ceci n'est pas une adresse valide")
		}
	}


	return (
		<footer className='footer'>
			<div className='footer-elem'>
			🌿
			</div>
			<div className='footer-elem'>Laissez-nous votre mail pour recevoir nos actualités :</div>
            <input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
};