import { InjectionToken } from "@angular/core";
import { addProfile, createMapper, Mapper } from "@automapper/core";
import { classes } from "@automapper/classes";
import { viewItemsProfile } from "./ui/view-items/view-items.profile";

export const AutoMapper = new InjectionToken('AutoMapper', {
  factory: MapperFactory,
  providedIn: 'root' // singleton
});

function MapperFactory(): Mapper {
  const mapper = createMapper({
    strategyInitializer: classes()
  });

  addProfile(mapper, viewItemsProfile);
  return mapper;
}
