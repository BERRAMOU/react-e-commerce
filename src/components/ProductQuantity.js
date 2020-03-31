import React from 'react';

class ProductQuantity extends React.Component {
    render() {
        return (
            <form class="form-inline">
                <div className="form-group">
                    <button className="btn btn-danger"> - </button>
                    <input value="0" className="form-control" disabled />
                    <button className="btn btn-primary"> + </button>
                </div>
            </form>
        );
    }
}

export default ProductQuantity; 
