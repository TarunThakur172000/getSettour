import React, {useState} from "react";
import "leaflet/dist/leaflet.css"
import "./App.css"
import { MapContainer, useMapEvents,useMap, TileLayer,Marker, Popup } from 'react-leaflet';
import {Icon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import b1 from './Res/Background/b1.jpg'
import Typewriter from 'typewriter-effect/dist/core';
import { BrowserRouter, Link, Route,Router } from 'react-router-dom';
// Component to create and render the map

function GetsettourMap(props) {
    const mapContainerStyle = {
        width: props.width,
      
      };

      const customicon=new Icon({
        iconUrl:require("./Res/placeholder.png"),
        iconSize:[38,38]
      })

      const markers=[{
        blog:"blog",
        position:[30.7346, 79.0669],
       Location:"Kedarnath"
        
      },
      {
        blog:"blog",
        position:[30.3165, 78.0322],
       Location:"dehradun"
        
      },
    ]
    const position = [30.3165, 78.0322];

    window.onload=function(e){
      var app = document.getElementById('typeeffect');
      var type=new Typewriter(app, {
        loop: true,
        delay: 75,
      });
      type
        .pauseFor(2500)
        .typeString('getsettour')
        .pauseFor(300)
        .deleteChars(10)
        .typeString('<strong>GetSetTour:</strong> Where Dreams Meet Destinations ')
        .deleteAll()    
        .typeString('Life is short, and the world is wide.<strong>- Simon Raven</strong>')
        .deleteAll() 
        .typeString('Every destination is a story waiting to be told.<br> What\'s your next chapter?')
        .pauseFor(1000)
        .start();
    }
    
    return (
        <div>
        <div className="map-container border-image curved-bottom" style={mapContainerStyle}>
            <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  <MarkerClusterGroup>
   {markers.map(marker=>(
    <Marker position={marker.position} icon={customicon} onclick={()=>{alert("blog")}}>
        <Popup>
        <Link to={`/${marker.blog}/${marker.Location}`}>View Blog</Link>
        </Popup>

    </Marker>
   ))}
  </MarkerClusterGroup>
</MapContainer>
        </div>
       
        <div id='typeeffect' style={{fontSize:"2vw",padding:"10vh"}}>
      
      </div>
        </div>
        
        
      
    );
}

export default GetsettourMap;
