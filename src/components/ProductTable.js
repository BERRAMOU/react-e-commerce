import React from 'react';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {

 

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
                />
            );
        });

        return (
            rows
        );
    }
}

export default ProductTable;