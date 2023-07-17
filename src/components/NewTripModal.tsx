import { useState } from "react";
import { useRouter } from "next/router";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
  getLatLng,
} from "react-google-places-autocomplete";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { Flex, Button, View } from "@aws-amplify/ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { Oval } from "react-loader-spinner";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { CreateDayMutation, CreateTripMutation } from "@/API";
import { createDay, createTrip } from "@/graphql/mutations";
import { User } from "@/models";
import { generateDates, toISODateString } from "@/utils/functions";
import { Modal } from "./Modal";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User;
}

export const NewTripModal = ({ isOpen, setIsOpen, user }: Props) => {
  const router = useRouter();
  const [destination, setDestination] = useState<string>("");
  const [location, setLocation] = useState<[number, number]>([0, 0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateTrip = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get<Basic[]>("/api/photos", {
        params: { query: destination },
      });
      const response = await API.graphql<GraphQLQuery<CreateTripMutation>>({
        query: createTrip,
        variables: {
          input: {
            name: `Trip to ${destination}`,
            destination,
            location: { latitude: location[0], longitude: location[1] },
            startDate: toISODateString(startDate!),
            endDate: toISODateString(endDate!),
            imgUrl: data[0].urls.raw,
            ownerId: user.id,
          },
        },
      });
      const tripId = response.data?.createTrip?.id;
      const days = generateDates(startDate!, endDate!);
      await Promise.all(
        days.map(async (day) => {
          await API.graphql<GraphQLQuery<CreateDayMutation>>({
            query: createDay,
            variables: {
              input: {
                tripId,
                date: toISODateString(day),
              },
            },
          });
        })
      );
      router.push(`/trip/${tripId}`);
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  const handleOnCloseModal = () => {
    setStartDate(null);
    setEndDate(null);
    setIsOpen(false);
  };

  const handleOnChangePlace = async (e: any) => {
    const { place_id } = e?.value;
    const [geocode] = await geocodeByPlaceId(place_id);
    const { lat, lng } = await getLatLng(geocode);
    setLocation([lat, lng]);
    setDestination(e?.label || "");
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Where are you going?"
      onClose={handleOnCloseModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <Oval
          height={60}
          width={60}
          color="#367b92"
          secondaryColor="#367b92"
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
          }}
          visible
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      ) : (
        <>
          <View padding="30px 0">
            <GooglePlacesAutocomplete
              selectProps={{
                onChange: handleOnChangePlace,
                placeholder: "Search destination",
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
                },
              }}
            />
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              className="date-picker-input"
              placeholderText="Select dates"
            />
          </View>
          <Flex justifyContent="flex-end">
            <Button
              variation="primary"
              onClick={handleCreateTrip}
              disabled={!destination || !startDate || !endDate}
            >
              Start planning my trip
            </Button>
          </Flex>
          <ToastContainer />
        </>
      )}
    </Modal>
  );
};
