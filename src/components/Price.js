import React from 'react';
class Price extends React.Component {
    render() {
        return (
            <div>
                <h4> Total Cash : $ {this.props.total} </h4>
            </div>
        )
    }
}

export default Price;
