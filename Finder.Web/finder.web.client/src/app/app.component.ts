import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Mapper } from "@automapper/core";
import { AutoMapper } from "./app.mapper";
import { WeatherForecastViewItem } from "./ui/view-items/weather-forecast.view-item";
import { WeatherForecast } from "./model/weather-forecast.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private static brazilianPortugueseCode = 'pt-br';
  private static americanEnglishCode = 'en';

  constructor(private http: HttpClient,
              private translateService: TranslateService,
              @Inject(AutoMapper) private autoMapper: Mapper) {
    translateService.use(AppComponent.brazilianPortugueseCode);
  }

  switchLanguage(): void {
    if (this.translateService.currentLang == AppComponent.brazilianPortugueseCode) {
      this.translateService.use(AppComponent.americanEnglishCode);
    } else {
      this.translateService.use(AppComponent.brazilianPortugueseCode);
    }
  }
}
