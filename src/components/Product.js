import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-sm-4">
                <div className="card mb-3">
                    <img src={this.props.product.image} className="card-img-top" alt={this.props.product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.product.ref}</h5>
                        <h5 className="card-title">{this.props.product.name}</h5>
                        <p className="card-text">{this.props.product.description}</p>
                        <a 
                            href="#" 
                            className="btn btn-outline-primary" style={{marginRight: "10px"}} onClick={(e) => this.props.addedProd(e, this.props.product.ref)}>ADD</a>
                        <a href="#" className="btn btn-outline-danger" onClick={(e) => this.props.deletedProd(e, this.props.product.ref)}>DELETE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;