import React from 'react';

const SelectedDishes = ({ selectedDishes }) => (
  <div className="selected-dishes">
    <h2>Elenco dei piatti selezionati:</h2>
    <ul>
      {selectedDishes.map((dish) => (
        <li key={dish.id}>{dish.nome} - Quantità: {dish.quantità}</li>
      ))}
    </ul>
  </div>
);

export default SelectedDishes;
