import React from 'react';
import Product from './Product';
import Search from './Search';
import Checkout from './Checkout';

class Products extends React.Component {
    constructor () {
        super();
    
        this.state = {
            search: null,
            addedProducts: [],
            total: 0
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleAddProduct = this.handleAddProduct.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
    };

    handleSearch = (e) => {
        let val = e.target.value;
        this.setState({ search: val })
    };

    handleAddProduct = (e, ref) => {
        e.preventDefault()
        let addedProduct = this.props.products.find(data=> data.ref === ref)
        let existedProduct = this.state.addedProducts.find(data=> data.ref === ref)

        if (existedProduct) {
            addedProduct.quantity += 1 
            return this.setState({ total: this.state.total + addedProduct.price })
        } else {
            addedProduct.quantity = 1;
            let newTotal = this.state.total + addedProduct.price 
            return this.setState({ 
                addedProducts: [...this.state.addedProducts, addedProduct],
                total: newTotal 
            })
        }
    };

    handleDeleteProduct = (e, ref) => {
        e.preventDefault()
        let prodToRemove= this.state.addedProducts.find(data=> data.ref === ref)
        let new_products = this.state.addedProducts.filter(data=> data.ref !== ref)

        let newTotal = this.state.total - (prodToRemove.price * prodToRemove.quantity)

        return this.setState({ 
            addedProducts: new_products,
            total: newTotal 
        })
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                    </a>
                    <Search search={this.handleSearch} />
                    {(this.state.total === 0) ?
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalLong" disabled>
                            Checkout
                        </button>
                        :
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModalLong">
                            Checkout <span className="badge badge-light">{this.state.addedProducts.length}</span>
                        </button>
                    }
                </nav>
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <div className="row">
                        {this.props.products
                        .filter((data) => {
                            if (this.state.search == null) {
                                return data
                            } else if (data.name.toLowerCase().includes(this.state.search.toLowerCase()) || data.description.toLowerCase().includes(this.state.search.toLowerCase())) {
                                return data
                            }
                        })
                        .map( (data, key) => (
                            <Product 
                                product={data} 
                                addedProd={this.handleAddProduct} 
                                deletedProd={this.handleDeleteProduct} 
                                key={key} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Panier</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <Checkout 
                                    itemsProducts={this.state.addedProducts}
                                    deletedProd={this.handleDeleteProduct}
                                    />
                            </div>
                            <div className="modal-footer">
                                <p>Total : <span className="text-danger">{this.state.total} $</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Products;