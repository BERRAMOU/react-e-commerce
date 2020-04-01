import React from 'react';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul className="list-group">
                {this.props.itemsProducts.map( (data, key) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={key}>
                    <img src={data.image} alt={data.name} width="100"/>
                    <p>{data.ref} - {data.name}</p>
                    <p><span className="badge badge-primary">{data.quantity}</span></p>
                    <p><a href="#" className="badge badge-danger" onClick={(e) => this.props.deletedProd(e, data.ref)}>Delete</a></p>
                </li>
                ))}
            </ul>
        )
    }
}

export default Checkout;