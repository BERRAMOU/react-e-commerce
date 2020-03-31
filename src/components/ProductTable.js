import React from 'react';
import ProductRow from './ProductRow';
import ProductQuantity from './ProductQuantity';


class ProductTable extends React.Component {
    render() {
        const rows = [];
        this.props.products.forEach(product => {
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