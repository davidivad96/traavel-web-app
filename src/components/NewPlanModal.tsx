import { useState } from "react";
import { useRouter } from "next/router";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { API } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { Flex, Button, View } from "@aws-amplify/ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";
import { Oval } from "react-loader-spinner";
import { CreatePlanMutation } from "@/API";
import { createPlan } from "@/graphql/mutations";
import { User } from "@/models";
import { toISODateString } from "@/utils/functions";
import { Modal } from "./Modal";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  user: User;
}

export const NewPlanModal = ({ isOpen, setIsOpen, user }: Props) => {
  const router = useRouter();
  const [destination, setDestination] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreatePlan = async () => {
    setIsLoading(true);
    try {
      const { data: imgUrl } = await axios.get("/api/photo", {
        params: { query: destination },
      });
      const response = await API.graphql<GraphQLQuery<CreatePlanMutation>>({
        query: createPlan,
        variables: {
          input: {
            name: `Trip to ${destination}`,
            destination,
            startDate: toISODateString(startDate!),
            endDate: toISODateString(endDate!),
            imgUrl,
            ownerId: user.id,
          },
        },
      });
      router.push(`/plan/${response.data?.createPlan?.id}`);
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
    setDestination(e?.label || "");
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Create your plan!"
      onClose={handleOnCloseModal}
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
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
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
              onClick={handleCreatePlan}
              disabled={!destination || !startDate || !endDate}
            >
              Create my plan
            </Button>
          </Flex>
          <ToastContainer />
        </>
      )}
    </Modal>
  );
};
