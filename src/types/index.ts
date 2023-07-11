export type PlacesSearchResponse = {
  html_attributions: string[];
  results: google.maps.places.PlaceResult[];
  status: string;
};

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
  [key in PLACE_TYPES]: google.maps.places.PlaceResult[];
};
