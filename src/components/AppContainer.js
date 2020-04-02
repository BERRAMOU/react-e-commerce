import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: ''
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div className="search-bar">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <div className="container">
                    <div className="row">
                        <ProductTable
                            products={this.props.products}
                            filterText={this.state.filterText}
                        />
                    </div>
                </div>

            </div>
        );
    }
}
export default AppContainer;