import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { WeatherForecastViewItem } from "../../view-items/weather-forecast.view-item";

@Component({
  selector: 'finder-forecast-table',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './forecast-table.component.html',
})
export class ForecastTableComponent {
  @Input() forecasts: Array<WeatherForecastViewItem> = [];
}
