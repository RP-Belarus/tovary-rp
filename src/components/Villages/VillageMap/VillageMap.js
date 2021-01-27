import React from 'react';
import { useHistory } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import './VillageMap.css';

const VillageMap = props => {

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

    const mapCenter = props.map_center;

    // To redirect in React-Router
    const history = useHistory();

    // My marker...
    // const MyMarker = props => {
    //     const initMarker = ref => {
    //         if (ref) {
    //             ref.leafletElement.openPopup();
    //         }
    //     };
    //     return <Marker ref={initMarker} {...props}/>
    // };

    //console.log(props);
    return (
        <div className="village__map">
        <MapContainer
            center={mapCenter}
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
                        eventHandlers={{
                            click: () => {
                                props.click(village.id, village.coordinates);
                                history.push(`/villages/${village.id}`); // Redirecting in react-router to Route
                                //mapCenter = [village.coordinates[0],village.coordinates[1]];
                            }
                        }}
                    >
                        {/*<Popup><b>{village.village_name}</b></Popup>*/}
                        <Tooltip offset={[0,-28]}><b>{village.village_name}</b></Tooltip>
                    </Marker>
                ))
            }
            </MarkerClusterGroup>

        </MapContainer>
        </div>
    );
};

export default VillageMap;