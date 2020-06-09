import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductsByVillageId } from '../store/actions/productsActions';
import ProductList from '../components/Products/ProductList/ProductList';
import PersonList from '../components/Persons/PersonList/PersonList';

class ProductsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Товары Родовых поместий</h1>

                <ProductList products={this.props.products} />

                <button
                    onClick={this.props.getProductsByVillageId.bind(this, 'village01')}
                >Выбрать товары</button>
                <p>Выбрано:</p>
                <p>{this.props.selectedProducts.length === 0 ?
                    '---' :
                    this.props.selectedProducts[0].title + ' - ' + this.props.selectedProducts[0].price + ' руб.'}</p>

                <hr/>
                <PersonList persons={this.props.persons} />

            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.productsReducer.products,
        selectedProducts: state.productsReducer.selectedProducts,
        persons: state.personsReducer.persons
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