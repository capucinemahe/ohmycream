import React from "react";
import "../styles/Categories.css";

export default function Categories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
	
  return (
    <div className="categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="categories-select">

        <option value="">Filtrer ici</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>
        RĂ©initialiser les filtres
      </button>
    </div>
  );
}
