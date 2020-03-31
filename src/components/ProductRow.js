import React from 'react';
import ProductQuantity from './ProductQuantity';

class ProductRow extends React.Component {
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
                        <ProductQuantity />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductRow;
