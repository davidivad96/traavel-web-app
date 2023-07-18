import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Option } from "react-google-places-autocomplete/build/types";
import { StylesConfig, GroupBase } from "react-select";

interface Props {
  handleOnChangePlace: (e: any) => void;
  placeholder?: string;
  styles?: StylesConfig<Option, false, GroupBase<Option>>;
}

export const PlacesAutocomplete = ({
  handleOnChangePlace,
  placeholder,
  styles,
}: Props) => (
  <GooglePlacesAutocomplete
    selectProps={{
      onChange: handleOnChangePlace,
      placeholder: placeholder || "Search destination",
      styles: {
        input: (provided) => ({
          ...provided,
          backgroundColor: "transparent",
          height: "36px",
        }),
        control: (provided) => ({
          ...provided,
          border: "1px solid #fff",
          borderRadius: "4px",
          boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.1)",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: "#828282",
        }),
        ...styles,
      },
    }}
  />
);
