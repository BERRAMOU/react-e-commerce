import React from 'react';
class Price extends React.Component {
    render() {
        return (
            <div className="container sticky">
                <div class="list-group-item list-group-item-primary mb-3 mt-3 text-center">
                    Total amount : <span className="badge badge-light"> {this.props.total} $ </span>
                    </div>
            </div>
        )
    }
}

export default Price;
