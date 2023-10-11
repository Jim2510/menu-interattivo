import React from 'react';

const CategoryMenu = ({ categories, selectedCategory, onCategoryChange }) => (
  <div className="category-menu">
    <ul className="list-group text-center pointer-event">
      {categories.map((category) => {
        const hasCards = selectedCategory === category || selectedCategory === "Uramaki";
        const listItemClasses = `list-group-item ${selectedCategory === category ? 'active' : ''}`;
        return (
          <li
            key={category}
            className={listItemClasses}
            onClick={() => onCategoryChange(category)}
            style={{ cursor: hasCards ? 'pointer' : 'not-allowed' }}
          >
            {category}
          </li>
        );
      })}
    </ul>
  </div>
);

export default CategoryMenu;
