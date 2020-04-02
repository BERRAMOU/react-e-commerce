import React from 'react';
import ProductRow from './ProductRow';
import Price from './Price';

class ProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
        this.calculateAddTotal = this.calculateAddTotal.bind(this);
        this.calculateRemoveTotal = this.calculateRemoveTotal.bind(this);
    }

    calculateAddTotal(price) {
        this.setState((prevState) => ({
            total: prevState.total + price
        }));
    }

    calculateRemoveTotal(price) {
        this.setState((prevState) => ({
            total: (prevState.total > price ) ? prevState.total - price : 0
        }));
    }

    render() {
        // Search input text.
        const filterText = this.props.filterText;
        const rows = [];
        this.props.products.forEach(product => {
            // Concat the name and description of product to search on it.
            let productDescName = product.name.toLowerCase() + product.description.toLowerCase()
            // If the string bellow not contain search keyword return.
            if (productDescName.indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.ref}
                    price={product.price}
                    handleBuyingTotal={this.calculateAddTotal.bind(this)}
                    handleRemovingTotal={this.calculateRemoveTotal.bind(this)}
                />
            );
        });

        rows.push(
            <Price total={this.state.total} />
        );
        return (
            rows

        );
    }
}

export default ProductTable;