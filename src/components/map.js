import React, {Component} from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import arrow from '../images/arrow-alt-circle-up-solid.svg';


class TrackMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTrack: null,
    };
  }
  render() {
    return (

        <GoogleMap
          defaultZoom={10}
          minZoom={5}
          defaultCenter={{lat: 33.7701, lng: -118.1937}}
          defaultOptions={{
            disableDefaultUI: true,
            draggable: true,
            keyboardShortcuts: false,
            scaleControl: true,
            scrollwheel: true,
            }}
          >
          {this.props.tracks.items.map((track)=>
            <Marker
              key={track.trackId}
              position={{
                 lat:track.position.latitude,
                 lng:track.position.longitude
              }}
              onClick={()=>{
                this.setState({selectedTrack:track});
                console.log(this.state.selectedTrack);
              }}
              icon={{
                path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                scale: 2,
                rotation: track.kinematics.course
              }}
            />
          )}
          {this.state.selectedTrack && (
            <InfoWindow
              position={{
                 lat:this.state.selectedTrack.position.latitude,
                 lng:this.state.selectedTrack.position.longitude
                }}
              onCloseClick={() => {
                this.setState({selectedTrack: null});
              }}
                >
              <div>
                <h2>Name: {this.state.selectedTrack.name}</h2>
                <p>Console for more details</p>
              </div>

            </InfoWindow>
          )}


        </GoogleMap>

    )
  }
}

const WrappedMap = withScriptjs(withGoogleMap(TrackMap));

export default function Map(props){

    return(
        <div style={{ width: '100vw', height: '100vh'}}>

            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBm5r5sZESK6Jo8pWiLFjkGvpGJ010ED9I`}
                loadingElement={<div style={{height: "100% "}} />}
                containerElement={<div style={{height: "100% "}} />}
                mapElement ={<div style={{height: "100% "}} />}
                tracks={props.tracks}

                />
        </div>
    )
}
