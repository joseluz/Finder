import { Route } from '@angular/router';
import { RoutePath } from './paths.route';
import { ForecastPageComponent } from "./ui/pages/external/forecast-page/forecast-page.component";

export interface AppRoute extends Route {
  path?: RoutePath;
  children?: Array<AppRoute>;
}

export const routes: Array<AppRoute> = [
  {
    path: RoutePath.Default,
    component: ForecastPageComponent
  }
];

export function getBaseUrl(): string {
  return document.getElementsByTagName('base')[0].href;
}
