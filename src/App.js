import React from 'react';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import './App.css';

class App extends React.Component {

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
        const PRODUCTS = [
            { ref: '4141589679', price: 50, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Football', description: 'Le football futbol ou soccer en anglais' },
            { ref: '5766031063', price: 10, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Baseball', description: 'Baseball product description' },
            { ref: '0137738001', price: 30, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Basketball', description: 'Basketball product description' },
            { ref: '0593792626', price: 100, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPod Touch', description: 'iPod Touch product description' },
            { ref: '4363988790', price: 400, image: 'https://dummyimage.com/300x200/808080/000000', name: 'iPhone 5', description: 'iPhone 5 product description' },
            { ref: '5933973530', price: 200, image: 'https://dummyimage.com/300x200/808080/000000', name: 'Nexus 7', description: 'Nexus 7 product description' }
        ];
        return (
            <div className="search-bar">
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <div className="container">
                    <div className="row">
                        <ProductTable
                            products={PRODUCTS}
                            filterText={this.state.filterText}
                        />
                    </div>
                </div>

            </div>
        );
    }
}
export default App;