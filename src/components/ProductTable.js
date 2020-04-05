import React from 'react';
import ProductRow from './ProductRow';
import Price from './Price';

class ProductTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedProducts: [],
            total: 0
        }
        this.selectProductHanlder = this.selectProductHanlder.bind(this);
        this.removeProductHandler = this.removeProductHandler.bind(this);
    }

    /**
     * Handle add product to card.
     * 
     * @param {*} addedProduct 
     */
    selectProductHanlder(addedProduct) {
        let productAlreadySelected = this.state.selectedProducts.find(data => data.ref === addedProduct.ref);
        if (productAlreadySelected) {
            addedProduct.qty += 1;
            return this.setState({ total: this.state.total + addedProduct.price });
        } else {
            addedProduct.qty = 1;
            let updatedTotal = this.state.total + addedProduct.price;
            return this.setState({
                selectedProducts: [...this.state.selectedProducts, addedProduct],
                total: updatedTotal
            });
        }
    }

    /**
     * Handle remove item from card.
     * 
     * @param {*} removedProduct 
     */
    removeProductHandler(removedProduct) {
        let productAlreadySelected = this.state.selectedProducts.find(data => data.ref === removedProduct.ref);
        if (productAlreadySelected) {
            if (productAlreadySelected.qty > 0) {
                productAlreadySelected.qty -= 1;
                return this.setState({
                    total: this.state.total - productAlreadySelected.price
                });
            } else {
                let newSelectedProducts = this.state.selectedProducts.filter(product => product.ref !== removedProduct.ref);
                let newTotal = this.state.total - (removedProduct.qty * removedProduct.price);
                return this.setState({
                    selectedProducts: newSelectedProducts,
                    total: newTotal
                });
            }
        }
    }

    render() {
        // Search input text.
        const filterText = this.props.filterText;
        const rows = [];
        rows.push(
            <Price total={this.state.total} />
        );

        this.props.products.forEach(product => {
            // Concat the name and description of product to search on it.
            let productDescName = product.name.toLowerCase() + product.description.toLowerCase()

            // If the product already in card keep the quantity.
            let selectedProd = this.state.selectedProducts.find(data => data.ref === product.ref)
            if (selectedProd && selectedProd.qty > 0) {
                product.qty = selectedProd.qty;
            }

            // If the string bellow not contain search keyword return.
            if (productDescName.indexOf(filterText.toLowerCase()) === -1) {
                return;
            }

            rows.push(
                <ProductRow
                    product={product}
                    addProduct={this.selectProductHanlder}
                    removeProduct={this.removeProductHandler}
                    key={product.ref}
                />
            );
        });

        return (
            rows
        );
    }
}

export default ProductTable;