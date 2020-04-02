import React from 'react';

class ProductRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qty: 0
        }
    }

    AddToCard() {
        this.setState((prevState) => ({
            qty: prevState.qty + 1
        }));
        this.props.handleBuyingTotal(this.props.price);
    }

    RemoveFromCard() {
        this.setState((prevState) => ({
            qty: (prevState.qty > 1) ? prevState.qty - 1 : 0
        }));
        // If the quantity reach to 0 do not call Total handler.
        if (this.state.qty === 0) {
            return;
        }
        this.props.handleRemovingTotal(this.props.price);
    }

    render() {
        return (
            <div className="col-4">
                <div className="card">
                    <img src={this.props.product.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <span className="badge badge-secondary"> {this.props.product.ref}</span>
                        <p className="card-text">{this.props.product.description}</p>
                        <span className="badge badge-light"> {this.props.product.price} $</span>
                        <div className="form-inline">
                            <div className="form-group">
                                <button className="btn btn-danger" onClick={this.RemoveFromCard.bind(this)} > - </button>
                                <input value={this.state.qty} className="form-control" disabled />
                                <button className="btn btn-primary" onClick={this.AddToCard.bind(this)}> + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductRow;
