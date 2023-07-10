export type Place = {
  address_components: {
    long_name: string;
    short_name: string;
    types: string[];
  }[];
  adr_address: string;
  business_status: string;
  formatted_address: string;
  formatted_phone_number: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  icon: string;
  international_phone_number: string;
  name: string;
  opening_hours: {
    open_now: boolean;
    periods: {
      close: {
        day: number;
        time: string;
      };
      open: {
        day: number;
        time: string;
      };
    }[];
    weekday_text: string[];
  };
  photos: {
    height: number;
    html_attributions: string[];
    photo_reference: string;
    width: number;
  }[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  rating: number;
  reference: string;
  reviews: {
    author_name: string;
    author_url: string;
    language: string;
    profile_photo_url: string;
    rating: number;

    relative_time_description: string;
    text: string;
    time: number;
  }[];
  types: string[];
  url: string;
  utc_offset: number;
  vicinity: string;
  website: string;
};

export type PlaceDetailsResponse = {
  html_attributions: string[];
  result: Place;
  status: string;
};
