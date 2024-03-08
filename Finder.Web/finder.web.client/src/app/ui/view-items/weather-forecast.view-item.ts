import { AutoMap } from "@automapper/classes";

export class WeatherForecastViewItem {
  @AutoMap()
  date: string = '';
  @AutoMap()
  temperatureC: number = 0;
  @AutoMap()
  temperatureF: number = 0;
  @AutoMap()
  summary: string = '';
  isTooCold: boolean = false;
  isTooHot: boolean = false;

  constructor(init: Partial<WeatherForecastViewItem>) {
    Object.assign(this, init);
  }
}
