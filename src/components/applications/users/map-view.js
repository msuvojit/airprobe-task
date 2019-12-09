import React, {Component} from "react";
import {compose} from "recompose"
import Breadcrumb from "../../common/breadcrumb.component";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps"



class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 11.0168,
                lng: 76.9558
            },
            zoom: 11,
            shelters: [],
            selectedMarker: false
        };
    }

    componentDidMount() {
        fetch("https://api.harveyneeds.org/api/v1/shelters?limit=20")
            .then(r => r.json())
            .then(data => {
                this.setState({shelters: data.shelters})
            })
    }

    handleClick = (marker, event) => {
        // console.log({ marker })
        this.setState({selectedMarker: marker})
    }

    render() {
        return (
            <div>
                {/*Container-fluid starts*/}
                <Breadcrumb title="Map" parent=""/>
                {/*Container-fluid Ends*/}

                {/*Container-fluid starts*/}
                <div className="container-fluid">
                    <div className="edit-profile">
                        <div className="row ">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Map View</h4>

                                        <div className="card-options">
                                            <a
                                                href="#"
                                                className="card-options-collapse"
                                                data-toggle="card-collapse"
                                            >
                                                <i className="fe fe-chevron-up"/>
                                            </a>
                                            <a
                                                href="#"
                                                className="card-options-remove"
                                                data-toggle="card-remove"
                                            >
                                                <i className="fe fe-x"/>
                                            </a>
                                        </div>
                                    </div>


                                    <MapWithAMarker
                                        selectedMarker={this.state.selectedMarker}
                                        markers={this.state.shelters}
                                        onClick={this.handleClick}
                                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDq1gYvXh4Z8gBbX4z3vkwuZi2iAQ2F_NQ&v=3.exp&libraries=geometry,drawing,places"
                                        loadingElement={<div style={{height: `100vh`}}/>}
                                        containerElement={<div style={{height: `100vh`}}/>}
                                        mapElement={<div style={{height: `100vh`}}/>}
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

    return (
        <GoogleMap defaultZoom={8} defaultCenter={{lat: 29.5, lng: -95}}>
            {props.markers.map(marker => {
                const onClick = props.onClick.bind(this, marker)

                return (
                    <Marker
                        key={marker.id}
                        onClick={onClick}
                        position={{lat: marker.latitude, lng: marker.longitude}}
                    >
                        {props.selectedMarker === marker &&
                        <InfoWindow>
                            <div>
                                {marker.shelter}
                            </div>
                        </InfoWindow>
                        }
                    </Marker>
                )
            })}
        </GoogleMap>
    )
})

export default MapView;
