import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">
                    <div class="form-group col-md-4 col-md-offset-5 align-center ">
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Search ..."
                                    value=""
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
