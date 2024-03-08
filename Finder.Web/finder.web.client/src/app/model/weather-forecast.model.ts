import { AutoMap } from "@automapper/classes";

export class WeatherForecast {
  @AutoMap()
  date: string = '';
  @AutoMap()
  temperatureC: number = 0;
  @AutoMap()
  temperatureF: number = 0;
  @AutoMap()
  summary: string = '';

  constructor(init: Partial<WeatherForecast>) {
    Object.assign(this, init);
  }
}
