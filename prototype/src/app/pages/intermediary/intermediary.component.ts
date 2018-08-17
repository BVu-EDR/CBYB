import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';
import { inputLocation, initialInput } from '../../inputLocation';
import { latLng, tileLayer, marker, icon} from 'leaflet';
import * as L from 'leaflet';
import { Http, Response } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { Observable} from 'rxjs';
import '../../../../node_modules/leaflet.fullscreen/Control.FullScreen.js';
import 'leaflet-measure';

@Component({
  selector: 'app-intermediary',
  templateUrl: './intermediary.component.html',
  styleUrls: ['./intermediary.component.css']
})
export class IntermediaryComponent implements OnInit {
   // Leaflet Map
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

  // Form Binding
  model: Property = inputLocation;
  states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 
  'DE', 'FL', 'GA', 'HI', 'ID', 'IN', 'IA', 'KS', 'KY', 
  'LA', 'Me', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 
  'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'SC', 'SD', 'OH', 
  'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 
  'UT', 'VT', 'WA', 'WV', 'WI', 'WY'];
  // get diagnostic() { return JSON.stringify(this.model); }

  // // Call Geocode API
  // onMapReady(map: Map) {
  //   map.panTo(latLng(this.data.addressGeo.latitude, this.data.addressGeo.longitude));
  //   console.log("hey");
  // }

  onSubmit() {
    this.getContacts();
  }

  private shortURL = 'http://GisAppsDev/api/Engines/Geocoding/v1.0/Geocode/US?';

  data: any = {};
  errorMessage: string = "";
  successMessage: string = "";
  bound: L.FeatureGroup;

  constructor(private http: Http) {
    // console.log("Accessed API");
    // this.getContacts();
    // this.getData();
   }

   urlFormat(address: string) {
    var alos = address.split(" ");
    var returnedString: string = '';
    var aloslength = alos.length;
    for (var i = 0; i < aloslength; i++) {
      returnedString += alos[i];
      if (i !== aloslength-1) {
        returnedString += "%20";
      }
    }
    return returnedString;
   }

   getURL() {
    const address1 = "address1=" + this.urlFormat(this.model["street"]); 
    const lastLine = "&lastLine=" + this.model["town"] + "," + "%20" + this.model["state"] + "%20" + this.model["zipcode"];
    const fullURL = this.shortURL + address1 + lastLine;
    return fullURL;
   }

   getData(): Observable<any> {
     const fullURL = this.getURL();
     return this.http.get(fullURL)
      .pipe(
        map((res: Response) => res.json())
      )
   }

   getContacts() {
     this.getData()
      .subscribe(
        data => {
          this.data = data
          if (!(data.geocodeStatusCode % 2)) {
            this.errorMessage = "Invalid Address Input";
            this.successMessage = "";
            this.layers = null;
          }
          else {
            this.errorMessage = "";
            this.successMessage = "Success!"
            this.onCode(latLng(data.addressGeo.latitude, data.addressGeo.longitude));
          }
        }
      );
    }

   onCode(latitude) {
    var summit = marker(latitude, {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      })
    });
    this.layers = [summit];
    this.bound = new L.FeatureGroup([summit]);
    var bounded = this.bound.getBounds();  
    this.fitBounds = bounded; 
  }

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

  ngOnInit() {
    if (initialInput != null) {
      var initialArray = initialInput.split(',');
      for (var j = 0; j < initialArray.length; j++) {
        if (j == 0) {
          this.model["street"] = initialArray[j];
        }
        else if (j == 1) {
          this.model["town"] = initialArray[j];
        }
        else if (j == 2) {
          this.model["state"] = initialArray[j];
        }
        else if (j == 3) {
          this.model["zipcode"] = initialArray[j];  
        }
        else {
          break;
        }
      }
    }
  }
}
