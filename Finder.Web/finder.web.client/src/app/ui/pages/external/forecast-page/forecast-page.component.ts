import { Component, Inject, OnInit } from '@angular/core';
import { ForecastTableComponent } from "../../../components/forecast-table/forecast-table.component";
import { NgIf } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { WeatherForecastViewItem } from "../../../view-items/weather-forecast.view-item";
import { WeatherForecast } from "../../../../model/weather-forecast.model";
import { HttpClient } from "@angular/common/http";
import { AutoMapper } from "../../../../app.mapper";
import { Mapper } from "@automapper/core";

@Component({
  selector: 'finder-forecast-page',
  standalone: true,
  imports: [
    ForecastTableComponent,
    TranslateModule,
    NgIf
  ],
  templateUrl: './forecast-page.component.html',
})
export class ForecastPageComponent implements OnInit {
  forecasts: Array<WeatherForecastViewItem> = [];

  constructor(private http: HttpClient,
              @Inject(AutoMapper) private autoMapper: Mapper) {
  }

  ngOnInit(): void {
    this.getForecasts();
  }

  getForecasts(): void {
    this.http.get<WeatherForecast[]>('/weatherforecast')
      .subscribe({
          next: (result: Array<WeatherForecast>): void => {
            this.forecasts = this.autoMapper.mapArray(result, WeatherForecast, WeatherForecastViewItem);
          },
          error: (error): void => {
            console.error(error);
          }
        }
      );
  }
}
