import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
// import callAPI from '../../ulties/apiCaller';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index'

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }
    componentDidMount() {
        this.props.fetchAllProducts()
    }

    /*   componentWillReceiveProps(nextProps) {
          this.setState({ products: nextProps.products })
          console.log(nextProps.products)
      } */

    showProducts(products) {
        if (products.length > 0) {
            var result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
            return result;
        }
    }


    onDelete = (id) => {
        /*  var { products } = this.state;
 
         callAPI(`products/${id}`, 'DELETE', null).then(res => {
             if (res.status === 200) {
                 var index = this.findIndex(products, id);
                 if (index !== -1) {
                     products.splice(index, 1);
                     this.setState({
                         products
                     })
                 }
             }
         }) */
        this.props.onDelete(id)

    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                <Link to="/product/add" className="btn btn-info">
                    Add Items
                </Link>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDelete: (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
