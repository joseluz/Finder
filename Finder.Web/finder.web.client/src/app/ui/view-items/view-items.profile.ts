import { createMap, forMember, mapFrom, MappingProfile } from "@automapper/core";
import { WeatherForecastViewItem } from "./weather-forecast.view-item";
import { WeatherForecast } from "../../model/weather-forecast.model";

export const viewItemsProfile: MappingProfile = (mapper) => {
  createMap(mapper, WeatherForecast, WeatherForecastViewItem,
    forMember((viewItem) => viewItem.isTooCold, mapFrom((m) => m.temperatureC <= 0)),
    forMember((viewItem) => viewItem.isTooHot, mapFrom((m) => m.temperatureC > 32))
  );
}
