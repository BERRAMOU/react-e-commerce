import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.props.search(e)} />
            </form>
        )
    }
}

export default Search;