import React from 'react';
import { Link } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import './VillageMap.css';

const villageMap = props => {

    // ------  Attribution and Url for Maptiler ----------
    //const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
    //const url ='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=iWfINcI6KwDACPPxDmJm';

    // ------  Attribution and Url for OpenStreetMap ----------
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [13,41],
        popupAnchor: [1,-33]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    // const onMyClick = () => {
    //     alert("You clicked!..");
    // };

    //console.log(props);
    return (
        <div class="villageMap">
        <MapContainer
            center={[54.81975,28.15401]}
            zoom={6}
            style={{width: '450px', height: '200px'}}
            class="villageMap"
        >
            <TileLayer
                url={url}
                attribution={attribution}
            />

            <MarkerClusterGroup>
            {
                props.villages.map(village => (
                    <Marker
                        key={village.id}
                        position={[village.coordinates[0],village.coordinates[1]]}
                    >
                        <Popup>{village.village_name}<br/><Link to={`/villages/${village.id}`}>Нажми</Link></Popup>
                    </Marker>
                ))
            }
            </MarkerClusterGroup>

        </MapContainer>
        </div>
    );
};

export default villageMap;