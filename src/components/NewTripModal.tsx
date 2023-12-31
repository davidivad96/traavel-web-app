import { useState } from "react";
import { useRouter } from "next/router";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { Flex, Button, View, Loader } from "@aws-amplify/ui-react";
import axios from "axios";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { CreateDayMutation, CreateTripMutation } from "@/API";
import { createDay, createTrip } from "@/graphql/mutations";
import { User } from "@/models";
import { generateDates } from "@/utils/functions";
import { Modal } from "./Modal";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

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
            startDate: startDate?.toISOString(),
            endDate: endDate?.toISOString(),
            imgUrl: data[0].urls.raw,
            userId: user.id,
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
                date: day.toISOString(),
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
    if (!isLoading) {
      setIsOpen(false);
    }
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
        <Flex justifyContent="center" margin="30px 0">
          <Loader width={75} height={75} />
        </Flex>
      ) : (
        <>
          <View padding="30px 0">
            <PlacesAutocomplete handleOnChangePlace={handleOnChangePlace} />
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
        </>
      )}
    </Modal>
  );
};
