import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup, Validators, ɵValue} from "@angular/forms";
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-get-weather-data',
  templateUrl: './get-weather-data.component.html',
  styleUrls: ['./get-weather-data.component.scss']
})
export class GetWeatherDataComponent {
  constructor(
    private mapComponent: MapComponent,
    private http: HttpClient,
    ){}
  //The final WeatherData
  WeatherData: any;
  //The different Option Variables for the Api Call default Location
  cityName: ɵValue<FormControl<string | null>> | undefined = "";
  countryCode: ɵValue<FormControl<string | null>> | undefined = "";

  inputFormDefault = new FormGroup({
    cityName: new FormControl(this.cityName, [
      Validators.required,
      Validators.pattern('^[a-zA-ZÄÜÖäüö ]*$')
    ]),
    countryCode: new FormControl(this.countryCode, [
      Validators.maxLength(2)
    ])
  })

  onSubmit() {
    this.cityName = this.inputFormDefault.value.cityName;
    this.countryCode = this.inputFormDefault.value.countryCode;
    console.log(this.cityName + " " + this.countryCode);
  }

  longitude: string= "";
  latitude: string = "";

  //Option Variables fot the Units of measurement
  units: string = "&units=metric";



  private apiKey: string = "8ef5cb0f4c7d95e295f21af94d6d3698"
  getWeatherData() {
  this.http.get<any>("https://api.openweathermap.org/data/2.5/weather?q="
    + this.cityName
    +","
    + this.countryCode
    + "&appid=" + this.apiKey
    + this.units)
    .subscribe(data => {
    this.WeatherData = data;
    console.log(this.WeatherData);
  })
  }

}
