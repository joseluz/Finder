import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];
  private static brazilianPortugueseCode = 'pt-br';
  private static americanEnglishCode = 'en';

  constructor(private http: HttpClient,
              private translateService: TranslateService) {
    translateService.use(AppComponent.brazilianPortugueseCode);
  }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'finder.web.client';

  currentLanguage = 'pt-br'

  switchLanguage(): void {
    if (this.translateService.currentLang == AppComponent.brazilianPortugueseCode) {
      this.translateService.use(AppComponent.americanEnglishCode);
    } else {
      this.translateService.use(AppComponent.brazilianPortugueseCode);
    }
  }
}
