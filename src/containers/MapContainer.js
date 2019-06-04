import React, { Component } from 'react';
import { connect } from 'react-redux'
import Map from '../components/Map/Map';
import { alumniFetchData } from '../actions/alumni';


const mapStateToProps = ({ alumni, auth }) => {
    return {
        alumni,
        auth
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        fetchAllUsers: () => dispatch(alumniFetchData())
    });




class MapContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            API_KEY: process.env.REACT_APP_BING_MAP_KEY,
            center: [35.917973, 14.409943],
            zoom: 3,
           // alumniData: this.props.alumni.data,
            infoboxesWithPushPins: []
        }
    }

    componentWillMount() {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    componentDidUpdate(prevProps) {
        if (!this.props.auth.data.isAuth) {
            this.props.history.push("/signin");
        }

        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length)
                return false;
            for (let i = arr1.length; i--;) {
                if (arr1[i] !== arr2[i])
                    return false;
            }
            return true;
        };

        if (!arraysEqual(this.props.alumni.data, prevProps.alumni.data)) {
            this.setState({
                alumniData: this.filterLocationUnknown(this.props.alumni.data)
            });

            this.parseInfoboxes(this.filterLocationUnknown(this.props.alumni.data))
        }

        if (!arraysEqual(prevProps.alumni.filtered, this.props.alumni.filtered)) {
            this.parseInfoboxes(this.filterLocationUnknown(this.props.alumni.data))
        }
    }

    parseInfoboxes(alumniData) {




        const infoboxesWithPushPins = alumniData
            .filter(alumni => this.props.alumni.filtered.includes(alumni.id))
            .map((alumni) => {
                let description = "";

                if (alumni.course.name) {description += `<p>Graduate: ${alumni.course.name}<\p>`}
                if (alumni.company.name) {description += `<p>Working at: ${alumni.company.name}</p>`}
                if (alumni.location.city) {description += `<p>${alumni.location.city}</p>`}
                return (
                    {
                        "location": [parseFloat(alumni.location.latitude), parseFloat(alumni.location.longitude)],
                        "addHandler": "click",
                        "infoboxOption": {
                            title: alumni.name,
                            description: description,
                            maxHeight: 250
                        },
                        "pushPinOption": {
                            title: alumni.name,
                            description: 'Pushpin'
                        },
                    })
            }
        );

        this.setState({ infoboxesWithPushPins })
    }

    filterLocationUnknown(alumniList) {
        return alumniList.filter(alumni => alumni.location.latitude !== "" && alumni.location.longitude  !== "")
    }

    render() {
        return (
            <Map apiKey={this.state.API_KEY}
                 center={this.state.center}
                 zoom={this.state.zoom}
                 infoboxesWithPushPins={this.state.infoboxesWithPushPins}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
