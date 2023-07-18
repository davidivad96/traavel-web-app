import { useEffect, useState } from "react";
import { geocodeByPlaceId, getLatLng } from "react-google-places-autocomplete";
import {
  Button,
  Flex,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Location, ActivityType } from "@/models";
import { Modal } from "./Modal";
import { PlacesAutocomplete } from "./PlacesAutocomplete";

export interface Activity {
  type?: ActivityType;
  name?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  location?: Location;
}

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleOnSubmit: (activity: Activity) => void;
  initialActivity?: Activity;
  setCurrentActivityId: (activityId: string) => void;
  setCurrentActivity: (activity: Activity | undefined) => void;
}

export const CreateActivityModal = ({
  isOpen,
  setIsOpen,
  handleOnSubmit,
  initialActivity,
  setCurrentActivityId,
  setCurrentActivity,
}: Props) => {
  const [activity, setActivity] = useState<Activity | undefined>(
    initialActivity
  );

  useEffect(() => {
    setActivity(initialActivity);
  }, [initialActivity]);

  const handleOnChangeActivity = (e: any) => {
    setActivity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOnChangePlace = async (e: any) => {
    const { place_id } = e?.value;
    const [geocode] = await geocodeByPlaceId(place_id);
    const { lat, lng } = await getLatLng(geocode);
    setActivity((prev) => ({
      ...prev,
      location: { latitude: lat, longitude: lng },
    }));
  };

  const handleOnChangeStartTime = (value: any) => {
    setActivity((prev) => ({ ...prev, startTime: value["$d"] }));
  };

  const handleOnChangeEndTime = (value: any) => {
    setActivity((prev) => ({ ...prev, endTime: value["$d"] }));
  };

  const handleOnCloseModal = () => {
    setIsOpen(false);
    setActivity(undefined);
    setCurrentActivityId("");
    setCurrentActivity(undefined);
  };

  console.log(activity?.startTime);
  return (
    <Modal
      isOpen={isOpen}
      title="Add an activity"
      onClose={handleOnCloseModal}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Flex direction="column" padding="20px 0">
        <SelectField
          name="type"
          label=""
          placeholder="Select an activity type"
          onChange={handleOnChangeActivity}
          value={activity?.type}
        >
          {Object.keys(ActivityType).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </SelectField>
        <TextField
          name="name"
          label="Name"
          placeholder="Name your activity"
          onChange={handleOnChangeActivity}
          value={activity?.name}
        />
        <TextAreaField
          name="description"
          label="Description"
          placeholder="Describe your activity"
          onChange={handleOnChangeActivity}
          value={activity?.description}
        />
        <TimePicker
          label="Start time"
          onChange={handleOnChangeStartTime}
          value={activity?.startTime ? dayjs(activity.startTime) : undefined}
        />
        <TimePicker
          label="End time"
          onChange={handleOnChangeEndTime}
          value={activity?.endTime ? dayjs(activity.endTime) : undefined}
        />
        <PlacesAutocomplete
          handleOnChangePlace={handleOnChangePlace}
          placeholder="Location"
          styles={{
            control: (provided) => ({
              ...provided,
              border: "1px solid grey",
              borderRadius: "4px",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#828282",
              padding: "0 5px",
            }),
          }}
        />
        <Button
          variation="primary"
          disabled={
            !activity?.type ||
            !activity?.name ||
            !activity?.startTime ||
            !activity?.endTime ||
            !activity?.location
          }
          onClick={() => handleOnSubmit(activity!)}
        >
          {initialActivity ? "Edit" : "Create"}
        </Button>
      </Flex>
    </Modal>
  );
};
