import React from 'react';
import '../styles/Categories.css'

export default function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value=''>Filtrer ici</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser les filtres</button>
		</div>
	)
};