import React, { Component } from 'react';
// import callAPI from '../../ulties/apiCaller';
import { Link } from 'react-router-dom'
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import { connect } from 'react-redux'

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            checkStatus: ''
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            /*  callAPI(`products/${id}`, 'GET', null).then(res => {
                 var data = res.data;
                 this.setState({
                     id: data.id,
                     txtName: data.name,
                     txtPrice: data.price,
                     checkStatus: data.checkStatus
                 })
             }) */
            this.props.onEditProduct(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var { itemEditing } = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                checkStatus: itemEditing.status
            })
        } /* else if (nextProps && nextProps.products) {
            console.log(nextProps.products)
        } */
    }

    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }


    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, checkStatus } = this.state;
        const { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: checkStatus
        }
        // edit
        if (id) {
            /*   callAPI(`products/${id}`, 'PUT', {
                  name: txtName,
                  price: txtPrice,
                  status: checkStatus
              }).then(res => {
                  history.goBack();
              }) */
            this.props.onUpdateProduct(product);
            history.goBack()

            // add
        } else {
            /*  callAPI('products', 'POST', {
                 name: txtName,
                 price: txtPrice,
                 status: checkStatus
             }).then(res => {
                 history.goBack()
             }) */
            this.props.onAddProduct(product)
            history.goBack()
        }
    }


    render() {
        var { txtName, txtPrice, checkStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <label>Item Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Status</label>

                        <div className="checkbox">
                            <label>
                                <input
                                    type="checkbox"
                                    name="checkStatus"
                                    value={checkStatus}
                                    onChange={this.handleInputChange}
                                    checked={checkStatus}
                                />
                                Available
                            </label>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/product-list" className=" btn btn-success " >
                        Turn to Invertory
                    </Link>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: product => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: id => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: product => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
