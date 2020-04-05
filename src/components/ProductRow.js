import React from 'react';

class ProductRow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-4">
                <div className="card mb-3">
                    <img src={this.props.product.image} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.name}</h5>
                        Ref : <span className="badge badge-secondary"> # {this.props.product.ref}</span>
                        <p className="card-text">{this.props.product.description}</p>
                        <span className="badge badge-light"> Price: {this.props.product.price} $</span>
                        <div className="form-inline">
                            <div className="form-group">
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => this.props.removeProduct(this.props.product)}
                                > - </button>
                                <input value={this.props.product.qty ? this.props.product.qty : 0} className="form-control text-center" disabled />
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => this.props.addProduct(this.props.product)}
                                > + </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductRow;
