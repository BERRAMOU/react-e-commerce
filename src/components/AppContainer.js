import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class AppContainer extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <SearchBar />
                <div className="container">
                    <div className="row">
                        <ProductTable
                            products={this.props.products}
                        />
                    </div>
                </div>

            </div>
        );
    }
}
export default AppContainer;