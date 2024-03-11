import { Injectable } from "@angular/core";

@Injectable()
export class AppContextGateway {

}

enum SessionStorageEntryKeys {
  MyKey = "finder.my-key"
}

enum LocalStorageEntryKeys {
  MyOtherKey = "finder.my-other-key"
}
