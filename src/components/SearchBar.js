import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    /**
     * Handle Filter Text Change.
     * 
     * @param {*} e 
     */
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href="/">
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} width="30" height="30" className="d-inline-block align-top" alt="" />
                </a>
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        placeholder="Search ..."
                        value={this.props.filterText}
                        onChange={this.handleFilterTextChange}
                    />
                </form>
            </nav>

        );
    }
}

export default SearchBar;
