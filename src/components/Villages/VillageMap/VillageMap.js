import React, { useRef, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, MapConsumer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import './VillageMap.css';

const VillageMarker = props => {
    // См. как сделать Popup на Маркере:  https://stackoverflow.com/questions/56633263/open-pop-up-on-click-outside-of-map
    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [13,41],
        popupAnchor: [1,-33]
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const markerRef = useRef(null);
    const { village, openPopup } = props;

    useEffect(() => {
        //if (openPopup) markerRef.current.leafletElement.openPopup();
        if (openPopup) markerRef.current.openPopup();
    }, [openPopup]);

    return (
        <Marker
            ref={markerRef}
            position={village.coordinates}
            eventHandlers={{
                click: () => {
                    props.onVillageClick(village.id);
                }
            }}
        >
            <Popup><b>{village.village_name}</b></Popup>
            {/*<Tooltip offset={[0,-28]}><b>{village.village_name}</b></Tooltip>*/}
        </Marker>
    );
};

const VillageMap = props => {

    // ------  Attribution and Url for Maptiler ----------
    //const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
    //const url ='https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=iWfINcI6KwDACPPxDmJm';

    // ------  Attribution and Url for OpenStreetMap ----------
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const url ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const mapCenter = props.mapCenter;

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
                        <VillageMarker
                            key={village.id}
                            village={village}
                            openPopup={props.selectedVillageId === village.id}
                            onVillageClick={props.onVillageClick}
                        />
                    ))
                }
            </MarkerClusterGroup>

            <MapConsumer>
                {
                    (map) => {
                        map.flyTo(props.mapCenter);
                        return null;
                    }
                }
            </MapConsumer>

        </MapContainer>
        </div>
    );
};

export default VillageMap;