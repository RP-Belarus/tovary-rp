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
            selectedVillageId: '',
            mapCenter: [54.81975,28.15401]
        };
        //const history = useHistory();
    }

    handleVillageClick = (village_id) => {
        const village_coords = this.props.villages.find(village => village.id === village_id).coordinates;
        this.setState({
            selectedVillageId: village_id,
            mapCenter: village_coords
        });
        this.props.history.push(`/villages/${village_id}`); // Redirecting in react-router to Route
    };

    render() {
        return (
            <React.Fragment>
                <h1>Поселения Родовых поместий</h1>
                <VillageMap
                    villages={this.props.villages}
                    selectedVillageId={this.state.selectedVillageId}
                    mapCenter={this.state.mapCenter}
                    onVillageClick={this.handleVillageClick}
                />
                <VillageList
                    villages={this.props.villages}
                    selectedVillageId={this.state.selectedVillageId}
                    onVillageClick={this.handleVillageClick}
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