import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card mb-4">
        <img
          src={this.props.card.immagine}
          className="card-img-top"
          alt={this.props.card.nome}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.card.nome} Roll</h5>
          <p className="card-text">Prezzo: {this.props.card.prezzo} €</p>
          <p className="card-text">Quantità: {this.props.card.quantità}</p>
          <button
            onClick={() => this.props.onIncrement(this.props.card)}
            className="btn btn-primary"
          >
            Aggiungi{" "}
            {/* <span className="badge badge-light">
              {this.props.card.quantità}
            </span> */}
          </button>
          {this.props.card.quantità > 0 && ( // Mostra il pulsante "Rimuovi" solo se la quantità è maggiore di 0
            <button
              onClick={() => this.props.onDecrement(this.props.card)}
              className="btn btn-danger"
            >
              Rimuovi
            </button>
          )}
          {/* <button
            onClick={() => this.props.onDelete(this.props.card.id)}
            className="btn btn-outline-danger"
          >
            Elimina
          </button> */}
        </div>
      </div>
    );
  }
}

export default Card;
