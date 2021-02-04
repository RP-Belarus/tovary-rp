import React, { useRef, useEffect } from 'react';

import { MapContainer, TileLayer, Marker, Popup, Tooltip, MapConsumer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

import './VillageMap.css';

const VillageMarker = props => {

    // См. как сделать Popup на Маркере:  https://stackoverflow.com/questions/56633263/open-pop-up-on-click-outside-of-map
    const defaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [13,41],
        popupAnchor: [1,-33]
    });
    // См. как сделать разные цветные маркеры: https://github.com/pointhi/leaflet-color-markers
    const greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = defaultIcon;
    //L.Marker.prototype.options.icon = greenIcon;

    const map = useMap();

    const markerRef = useRef(null);
    const { village, openPopup } = props;

    useEffect(() => {
        map.flyTo(props.mapCenter);
        // map.on('moveend', () => {
        //     console.log('arrived');
        // });
        if (openPopup) markerRef.current.openPopup();
    }, [openPopup]);

    return (
        <Marker
            ref={markerRef}
            position={village.coordinates}
            eventHandlers={{
                click: () => {
                    props.onVillageClick(village.id);
                    //props.map.flyTo(village.coordinates);
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

    //const map = useMap();

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
                            //map={map}
                            key={village.id}
                            village={village}
                            mapCenter={mapCenter}
                            openPopup={props.selectedVillageId === village.id}
                            onVillageClick={props.onVillageClick}
                        />
                    ))
                }
            </MarkerClusterGroup>
        </MapContainer>
        </div>
    );
};

export default VillageMap;