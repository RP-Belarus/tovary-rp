import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch, Route } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

import VillageList from '../components/Villages/VillageList/VillageList';
import Village from '../components/Villages/Village';

class VillagesPage extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Поселения Родовых поместий</h1>
                <VillageList villages={this.props.villages} />
                <MapContainer
                    center={[54.81975,28.15401]}
                    zoom={6}
                    style={{width: '450px', height: '200px'}}
                >
                    <TileLayer
                        url={"https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=iWfINcI6KwDACPPxDmJm"}
                        attribution={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}
                    />

                    <Marker position={[53.98224,26.76782]}>
                        <Popup>Росы</Popup>
                    </Marker>

                    <Marker position={[55.37060, 30.56975]}>
                        <Popup>Звон-Гора</Popup>
                    </Marker>

                    <Marker position={[54.81975, 28.15401]}>
                        <Popup>Улесье</Popup>
                    </Marker>

                </MapContainer>
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