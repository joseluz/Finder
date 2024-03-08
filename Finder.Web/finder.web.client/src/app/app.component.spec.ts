import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Mapper } from "@automapper/core";
import { AutoMapper } from "./app.mapper";
import { TranslateModule } from "@ngx-translate/core";
import { WeatherForecastViewItem } from "./ui/view-items/weather-forecast.view-item";
import { WeatherForecast } from "./model/weather-forecast.model";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;
  let mapper: Mapper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    mapper = TestBed.inject<Mapper>(AutoMapper);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve weather forecasts from the server', () => {
    const mockForecasts: Array<WeatherForecast> = [
      new WeatherForecast({date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild'}),
      new WeatherForecast({date: '2021-10-02', temperatureC: 35, temperatureF: 97, summary: 'Warm'})
    ];
    const mockForecastsViewItems: Array<WeatherForecastViewItem> = [
      new WeatherForecastViewItem({date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild', isTooHot: false, isTooCold: false}),
      new WeatherForecastViewItem({date: '2021-10-02', temperatureC: 35, temperatureF: 97, summary: 'Warm', isTooHot: true, isTooCold: false})
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/weatherforecast');
    expect(req.request.method).toEqual('GET');
    req.flush(mockForecasts);

    expect(component.forecasts).toEqual(mockForecastsViewItems);
  });

  it('Should keep isTooHot and isTooCold as false for a WeatherForecast WITH comfortable temperature when converterd to WeatherForecastVI', () => {
    const forecastComfortable = new WeatherForecast({date: '2021-10-01', temperatureC: 20, temperatureF: 68, summary: 'Mild'});
    const comfortableVI = mapper.map(forecastComfortable, WeatherForecast, WeatherForecastViewItem);
    expect(comfortableVI).not.toBeNull();
    expect(comfortableVI.isTooCold).toBe(false);
    expect(comfortableVI.isTooHot).toBe(false);
  });


  it('Should set isTooHot to true for a WeatherForecast WITH high temperature when converter it to WeatherForecastVI', () => {
    const forecastComfortable = new WeatherForecast({date: '2021-10-01', temperatureC: 40, temperatureF: 68, summary: 'Mild'});
    const comfortableVI = mapper.map(forecastComfortable, WeatherForecast, WeatherForecastViewItem);
    expect(comfortableVI).not.toBeNull();
    expect(comfortableVI.isTooCold).toBe(false);
    expect(comfortableVI.isTooHot).toBe(true);
  });


  it('Should set isTooCold to true for a WeatherForecast WITH below zero temperature when converter it to WeatherForecastVI', () => {
    const forecastComfortable = new WeatherForecast({date: '2021-10-01', temperatureC: -23, temperatureF: 10, summary: 'Mild'});
    const comfortableVI = mapper.map(forecastComfortable, WeatherForecast, WeatherForecastViewItem);
    expect(comfortableVI).not.toBeNull();
    expect(comfortableVI.isTooCold).toBe(true);
    expect(comfortableVI.isTooHot).toBe(false);
  });
});
