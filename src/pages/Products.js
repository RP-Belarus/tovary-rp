import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductsByVillageId } from '../store/actions/productsActions';
import ProductList from '../components/Products/ProductList/ProductList';

class ProductsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Товары Родовых поместий</h1>
                <ProductList products={this.props.products} />

                <button
                    onClick={this.props.getProductsByVillageId.bind(this, 'village03')}
                >Выбрать товары</button>

                <p>Выбрано:</p>
                <ProductList products={this.props.selectedProducts} />

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer.products,
        selectedProducts: state.productsReducer.selectedProducts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getProductsByVillageId: village_id => dispatch(getProductsByVillageId(village_id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsPage);