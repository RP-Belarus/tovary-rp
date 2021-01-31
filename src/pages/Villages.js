import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';

import VillageMap from '../components/Villages/VillageMap/VillageMap';
import VillageList from '../components/Villages/VillageList/VillageList';
import Village from '../components/Villages/Village';

import './Pages.css';

class VillagesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_village: '',
            mapCenter: [54.81975,28.15401]
        };
        //const history = useHistory();
    }


    selectVillage = (village_id, village_coords) => {
        //alert("You clicked! " + village_id);
        console.log('Village ID: ' + village_id + ', Village Coords: ' + village_coords);
        this.setState({
            selected_village: village_id,
            mapCenter: village_coords
        });
        console.log('Village ID State: ' + this.state.selected_village +
                    ', Village Coords State: ' + this.state.mapCenter);
        this.props.history.push(`/villages/${village_id}`); // Redirecting in react-router to Route
    };

    render() {
        return (
            <React.Fragment>
                <h1>Поселения Родовых поместий</h1>
                <VillageMap
                    villages={this.props.villages}
                    selected_village={this.state.selected_village}
                    map_center={this.state.mapCenter}
                    click={this.selectVillage}
                />
                <VillageList
                    villages={this.props.villages}
                    selected_village={this.state.selected_village}
                    click={this.selectVillage}
                />
                <hr className="hr"/>
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