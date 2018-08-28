import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent {

  streetMaps = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&amp;copy; &lt;a href="https://www.openstreetmap.org/copyright"&gt;OpenStreetMap&lt;/a&gt; contributors'
  });


  map: L.Map;

  options = {
    layers: [ this.streetMaps ],
    zoom: 7,
    center: L.latLng([ 46.879966, -121.726909 ])
  };

  onMapReady(map: L.Map): void {
    this.map = map;
  }

  handleMapZoomEnd(map: L.Map):void{
    console.log('onMapZoomEnd');
  }

  handleMapMoveEnd(map: L.Map):void{
    console.log('onMapMoveEnd');
  }
}
