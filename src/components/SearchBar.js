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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="form-group col-md-4 col-md-offset-5 align-center ">
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Search ..."
                                    value={this.props.filterText}
                                    onChange={this.handleFilterTextChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
