import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import * as L from "leaflet";

@Component({
  selector: "app-maps-view",
  templateUrl: "./maps-view.component.html",
  styleUrls: ["./maps-view.component.scss"],
})
export class MapsViewComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  userDetails: Object = {};

  loggedUserSubscription: Subscription;

  allTradingAccounts: Array<Object> = [];

  rForm: FormGroup;
  pendingDepositsCount = 0;

  constructor(private _FormBuilder: FormBuilder, public dialog: MatDialog) {
    this.rForm = this._FormBuilder.group({
      withdraw_address: [null, Validators.compose([Validators.required])],
      amount: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(0.01),
          Validators.max(10000000000),
        ]),
      ],
      verification_code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
      twoFa_auth_code: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ]),
      ],
    });
  }

  private map: L.Map | any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map centered at Polonnaruwa
    this.map = L.map("map", {
      center: [7.9403, 81.0188], // Polonnaruwa coordinates
      zoom: 12, // Adjust zoom to focus on the city
    });
  
    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(this.map);
  
    // Define coordinates for nearby cities around Polonnaruwa
    const nearbyLocations: { coords: L.LatLngExpression; name: string }[] = [
      { coords: [7.9331, 81.003], name: "Medirigiriya" },
      { coords: [7.9501, 81.0025], name: "Hingurakgoda" },
      { coords: [7.9555, 81.0155], name: "Giritale" },
      { coords: [7.9472, 81.0277], name: "Manampitiya" },
      { coords: [7.9325, 81.0255], name: "Kaduruwela" },
      { coords: [7.9258, 81.0123], name: "Dimbulagala" },
    ];
  
    // Create a custom icon
    const customIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png', // Replace with your image path
      iconSize: [25, 41], // Size of the icon
      iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
      popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
    });
  
    // Add a marker at the center of Polonnaruwa
    const mainMarker = L.marker([7.9403, 81.0188], { icon: customIcon }).addTo(this.map);
    const mainPopup = `
      <div style="text-align: center;">
        <h4 style="color: #2d6a4f;font-family: Arial, sans-serif;margin-bottom: 8px;">Polonnaruwa</h4>       
        <p style="margin-top: 10px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
          Elephant detected
        </p>
      </div>
    `;
    mainMarker.bindPopup(mainPopup);
  
    // Loop over nearby locations to add markers and popups
    nearbyLocations.forEach((location) => {
      const marker = L.marker(location.coords, { icon: customIcon }).addTo(this.map);
      const popupContent = `
        <div style="text-align: center;">
          <h4 style="color: #2d6a4f;font-family: Arial, sans-serif;margin-bottom: 8px;">${location.name}</h4>       
          <p style="margin-top: 10px; font-size: 14px; font-family: Arial, sans-serif; color: #555;">
            Elephant detected
          </p>
        </div>
      `;
      marker.bindPopup(popupContent);
    });
  
    // Automatically adjust the map view to include all markers
    const markers = [mainMarker, ...nearbyLocations.map(location => L.marker(location.coords, { icon: customIcon }))];
    const group = L.featureGroup(markers);
    this.map.fitBounds(group.getBounds());
  }
  

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
