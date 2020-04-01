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
                </nav>
                <div className="row mt-3">
                    <div className="col-sm-7">
                        <h2>Lists of all products</h2>
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
                    <div className="col-sm-5">
                        <h2>Selecting Products</h2>
                        <Checkout 
                            itemsProducts={this.state.addedProducts}
                            deletedProd={this.handleDeleteProduct}
                            />
                        <table class="table mt-3">
                            <tr>
                                <td>Total</td>
                                <td class="text-danger">{this.state.total} $</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
export default Products;