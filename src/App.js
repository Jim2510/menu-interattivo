import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CategoryMenu from "./components/CategoryMenu";
import React, { Component } from "react";
import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";
import "../src/App.css";

class App extends Component {
  state = {
    totalSelected: 0,
    selectedCategory: null,
    categories: ["Hosomaki", "Uramaki", "Temaki", "Futomaki"],
    cards: [
      {
        id: 0,
        nome: "California",
        prezzo: 1.99,
        immagine: california,
        quantità: 0,
        category: "Uramaki",
      },
      {
        id: 1,
        nome: "Dragon",
        prezzo: 1.49,
        immagine: dragon,
        quantità: 0,
        category: "Uramaki",
      },
      {
        id: 2,
        nome: "Dynamite",
        prezzo: 2.49,
        immagine: dynamite,
        quantità: 0,
        category: "Uramaki",
      },
      {
        id: 3,
        nome: "Philadelphia",
        prezzo: 1.49,
        immagine: philadelphia,
        quantità: 0,
        category: "Uramaki",
      },
      {
        id: 4,
        nome: "Rainbow",
        prezzo: 2.99,
        immagine: rainbow,
        quantità: 0,
        category: "Uramaki",
      },
      {
        id: 5,
        nome: "Shrimp",
        prezzo: 3.49,
        immagine: shrimp,
        quantità: 0,
        category: "Uramaki",
      },
    ],
  };

  handleReset = () => {
    this.setState({
      selectedCategory: null,
      cards: this.state.cards.map((card) => ({
        ...card,
        quantità: 0,
      })),
    });
  };

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleDelete = (cardId) => {
    const cards = this.state.cards.filter((card) => card.id !== cardId);
    this.setState({ cards });
  };

  handleIncrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.findIndex((c) => c.id === card.id);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards, totalSelected: this.state.totalSelected + 1 });
  };

  handleDecrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.findIndex((c) => c.id === card.id);
    if (cards[id].quantità > 0) {
      cards[id] = { ...card };
      cards[id].quantità--;
      this.setState({ cards, totalSelected: this.state.totalSelected - 1 });
    }
  };

  render() {
    const { selectedCategory, cards, categories } = this.state;
    const filteredCards = selectedCategory
      ? cards.filter(
          (card) =>
            card.category === selectedCategory || selectedCategory === "Uramaki"
        )
      : cards;

    return (
      <>
        <Navbar />
        <div className="container">
          <hr />
          <h1 className="text-center">Cosa desideri ordinare?</h1>
          <hr />
          <CategoryMenu
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={this.handleCategoryChange}
          />
          <hr />
          <p className="text-center">
            Piatti selezionati: {this.state.totalSelected}
          </p>
          <hr />
          <div className="row d-flex justify-content-center">
            {filteredCards.map((card) => (
              <div key={card.id} className="col-md-4">
                <Card
                  card={card}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning text-center mb-4"
              onClick={this.handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
