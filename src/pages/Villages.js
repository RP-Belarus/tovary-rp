import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';

import VillageList from '../components/Villages/VillageList/VillageList';
import Village from '../components/Villages/Village';

class VillagesPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Поселения Родовых поместий</h1>
                <VillageList villages={this.props.villages} />
                <hr/>
                <Switch>
                    <Route
                        path="/villages/:village_id"
                        render={(props) =>
                            <Village {...props}
                                     villages={this.props.villages}
                                     persons={this.props.persons}
                                     products={this.props.products}
                            />
                        }
                    />
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        villages: state.villagesReducer.villages,
        persons: state.personsReducer.persons,
        products: state.productsReducer.products
    };
};

export default connect(
    mapStateToProps,
    null
)(VillagesPage);