import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {LeafletMouseEvent} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: any;
  public clickLat: number = 0;
  public clickLng: number = 0;

  constructor() {
  }
  ngOnInit() {
    this.map= L.map('map', {
      boxZoom: false,
      doubleClickZoom: false,
      dragging: true,
      keyboard: false,
      scrollWheelZoom: true,
      touchZoom: true,
      minZoom: 2
    })
    this.map.setView([0, 0], 2);

    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {

      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    const onMapClick = (e: LeafletMouseEvent) => {
      console.log(e.latlng);
      this.clickLat = e.latlng.lat;
      this.clickLng = e.latlng.lng;
    }

    this.map.on('click', onMapClick);
  }



}
