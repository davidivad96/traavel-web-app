import { Place } from "@googlemaps/google-maps-services-js";

export enum PLACE_TYPES {
  RESTAURANT = "restaurant",
  TOURIST_ATTRACTION = "tourist_attraction",
  CAFE = "cafe",
  BAR = "bar",
  LODGING = "lodging",
  SHOPPING_MALL = "shopping_mall",
  NIGHT_CLUB = "night_club",
  MUSEUM = "museum",
}

export type PlacesByType = {
  [key in PLACE_TYPES]: Place[];
};
