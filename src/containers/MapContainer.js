import React, { Component } from 'react';
import { connect } from 'react-redux'
import Map from '../components/Map/Map';

const mapStateToProps = ({ alumni }) => {
    return {
        alumni
    }
}

class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            API_KEY: process.env.REACT_APP_BING_MAP_KEY,
            center: [35.917973, 14.409943],
            zoom: 3,
            alumniData: this.props.alumni.data,
            infoboxesWithPushPins: []
        }
    }

    componentDidMount() {
        this.parseInfoboxes(this.state.alumniData)
    }

    componentDidUpdate(prevProps) {
        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length)
                return false;
            for (let i = arr1.length; i--;) {
                if (arr1[i] !== arr2[i])
                    return false;
            }
            return true;
        }

        if (!arraysEqual(this.props.alumni.data, prevProps.alumni.data)) {
            this.setState({
                alumniData: this.props.alumni.data
            })
            this.parseInfoboxes(this.props.alumni.data)
        }
    }

    parseInfoboxes(alumniData) {
        const infoboxesWithPushPins = alumniData.map((alumni) => (
            {
                "location": [alumni.location.lat, alumni.location.lng],
                "addHandler": "click",
                "infoboxOption": {
                    title: alumni.name,
                    description: `<img src=${alumni.image} width="35%"></img>
                        <p>${alumni.degree} graduated in ${alumni.graduation_year}</p> 
                        <p>Working at ${alumni.company}</p> 
                        <p>${alumni.location.city}, ${alumni.location.country}</p>
                        <button style='display: block;background-color: #7ed6df;color: #130f40;
                                padding:0.5rem 0.9rem;cursor:pointer;border:none;
                                border-radius:5rem;margin-left:6rem;'>Send Message</button>`,
                    maxHeight: 250
                },
                "pushPinOption": {
                    title: alumni.name,
                    description: 'Pushpin'
                },
            })
        )

        this.setState({ infoboxesWithPushPins })
    }

    render() {

        if (this.state.infoboxesWithPushPins.length) {
            return (
                <Map apiKey={this.state.API_KEY}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    infoboxesWithPushPins={this.state.infoboxesWithPushPins}
                />
            )
        }
        return null
    }
}

export default connect(mapStateToProps)(MapContainer)
