import { Component, Input } from '@angular/core';
import { NgClass, NgForOf, NgIf } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { WeatherForecastViewItem } from "../../view-items/weather-forecast.view-item";

@Component({
  selector: 'finder-forecast-table',
  standalone: true,
  imports: [
    TranslateModule,
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './forecast-table.component.html',
})
export class ForecastTableComponent {
  @Input() forecasts: Array<WeatherForecastViewItem> = [];
}
