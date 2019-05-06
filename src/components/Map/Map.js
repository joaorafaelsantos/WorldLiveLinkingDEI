import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ReactBingmaps } from 'react-bingmaps';
import FiltersContainer from "../../containers/FiltersContainer";
import './Map.css';

const Map = ({ apiKey, center, zoom, infoboxesWithPushPins }) => (
    <Fragment>
        <FiltersContainer />
        <div className="map-container">
            <ReactBingmaps
                bingmapKey={apiKey}
                center={center}
                zoom={zoom}
                infoboxesWithPushPins={infoboxesWithPushPins}>
            </ReactBingmaps></div>
    </Fragment>
);

Map.propTypes = {
    apiKey: PropTypes.string.isRequired,
    center: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number.isRequired,
    infoboxesWithPushPins: PropTypes.arrayOf(PropTypes.object).isRequired
}

Map.defaultProps = {
    apiKey: "123",
    center: [],
    zoom: 5,
    infoboxesWithPushPins: []
}

export default Map;
