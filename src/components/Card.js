import { Component } from 'react';

class Card extends Component {
    render() {
  return (
    <div className="card" style={{width: '18rem', textAlign: 'center'}}>
        <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary">
          Aggiungi <span className='badge badge-light'>{this.props.card.quantità}</span>
        </button>
      <img src={this.props.card.immagine} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{this.props.card.nome} Roll</h5>
        <p className="card-text">
          €{this.props.card.prezzo}
        </p>
        <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">
          Elimina
        </button>
      </div>
    </div>
  );
}
}

export default Card
