import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm("Are you sure")) { // eslint-disable-line
            this.props.onDelete(id)
        }
    }

    render() {
        var { index, product } = this.props;
        var statusName = product.status ? 'Con hang' : 'het hang';

        var statusClass = product.status ? 'primary' : 'warning';

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><span className={`label label-${statusClass}`}>{statusName}</span></td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-primary"
                    >
                        Edit
                    </Link>

                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Delete
                    </button>

                </td>
            </tr>
        );
    }
}

export default ProductItem;
