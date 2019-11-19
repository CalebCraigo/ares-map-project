import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index.js';
import Map from '../components/map.js';



class MyMap extends Component {

  componentDidMount(){
    this.props.loadTracks();
}

  render() {
    const fetched = this.props.fetched;
    let  reloadTrack = () => {
        this.props.loadTracks();
      };
    setTimeout(reloadTrack(), 30000);
      return (
        <div>
        {fetched ? (
        <Map tracks={this.props.tracks}></Map>
        ):(
          null
        )}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    tracks: state.tracks,
    fetched: state.fetched
  }

};


export default connect (mapStateToProps, actionCreators)(MyMap);
