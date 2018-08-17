import { Component, OnInit } from '@angular/core';

import 'leaflet.fullscreen';
import 'leaflet-measure';
import * as L from 'leaflet';
import { latLng, tileLayer, marker, icon} from 'leaflet';
import { Property } from '../property';
import { inputLocation } from '../inputLocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  Esri_WorldTopoMap = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}');
  Esri_WorldStreetMap = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}');
  Esri_WorldImagery = tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

  Floodwms = L.tileLayer.wms('http://gisappsdev:8080/cgi-bin/mapserv.exe?map=/ms4w/apps/FEMA/NFHD.map', {
    layers: 'NFHD',
    format: 'image/png',
    transparent: true });
  
  Postalwms = L.tileLayer.wms('http://gisappsdev:8080/cgi-bin/mapserv.exe?map=/ms4w/apps/Edr20/DMP.map', {
    layers: 'Parcels',
    format: 'image/png',
    transparent: true });

  options = {
    layers: [
      this.Esri_WorldTopoMap,
      this.Postalwms,
      this.Floodwms,
    ],
    center: latLng(41.267604471552247, -73.126729693829972),
    zoom: 10,
    // activeColor: '#af263d',
    // position: 'topleft',
  };
  layers = null;
  fitBounds = null;

  onMapReady(map: L.Map) {
    L.control.fullscreen({
      position: 'topright', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
      title: 'Show me the fullscreen!', // change the title of the button, default Full Screen
      titleCancel: 'Exit fullscreen mode', // change the title of the button when fullscreen is on, default Exit Full Screen
      content: null, // change the content of the button, can be HTML, default null
      forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
      forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
      fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
    }).addTo(map);
    
    map.on('enterFullscreen', function(){
      map.invalidateSize();
      // console.log('entered fullscreen');
    });

    map.on('exitFullscreen', function(){
      map.invalidateSize();
      // console.log('exited fullscreen');
    });

    L.control.measure({
      position: 'topright',
      activeColor: '#af263d',
      completedColor: '#4253f4',
    }).addTo(map);
  }
  

  constructor() { }

  ngOnInit() {
  }

}
