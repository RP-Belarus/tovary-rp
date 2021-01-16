import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

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

    console.log(props);
    return (
        <MapContainer
            center={[54.81975,28.15401]}
            zoom={6}
            style={{width: '450px', height: '200px'}}
        >
            <TileLayer
                url={url}
                attribution={attribution}
            />

            {
                props.villages.map(village => (
                    <Marker
                        key={village.id}
                        position={[village.coordinates[0],village.coordinates[1]]}
                    >
                        <Popup>{village.village_name}</Popup>
                    </Marker>
                ))
            }

        </MapContainer>
    );
};

export default villageMap;