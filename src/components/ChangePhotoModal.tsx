import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { API, Cache } from "aws-amplify";
import { GraphQLQuery } from "@aws-amplify/api";
import { Collection, View } from "@aws-amplify/ui-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { UpdateTripMutation } from "@/API";
import { updateTrip } from "@/graphql/mutations";
import { Modal } from "./Modal";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tripId: string;
  updateTripImgUrl: (url: string) => void;
  query?: string | null;
}

export const ChangePhotoModal = ({
  isOpen,
  setIsOpen,
  tripId,
  updateTripImgUrl,
  query,
}: Props) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const fetchPhotos = useCallback(async () => {
    const cachedPhotos = await Cache.getItem(`photos-${tripId}`);
    if (cachedPhotos) {
      setPhotos(cachedPhotos);
    } else {
      console.log("fetching");
      const { data } = await axios.get<Basic[]>("/api/photos", {
        params: { query },
      });
      const photos = data.map((photo) => photo.urls.raw);
      setPhotos(photos);
      Cache.setItem(`photos-${tripId}`, photos);
    }
  }, [query, tripId]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  const handleOnCloseModal = () => {
    setIsOpen(false);
  };

  const handleOnClickPhoto = async (
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    const photo = event.currentTarget;
    const photoUrl = photo.getAttribute("src");
    try {
      await API.graphql<GraphQLQuery<UpdateTripMutation>>({
        query: updateTrip,
        variables: { input: { id: tripId, imgUrl: photoUrl } },
      });
      updateTripImgUrl(photoUrl!);
      toast.success("Photo changed successfully!", { theme: "colored" });
      setIsOpen(false);
    } catch (error) {
      toast.error("There was an error!", { theme: "colored" });
    }
  };

  return (
    <Modal isOpen={isOpen} title="Change photo" onClose={handleOnCloseModal}>
      <View padding="30px 0">
        {photos.length && (
          <Collection
            type="grid"
            items={photos}
            templateColumns={{ base: "1fr 1fr 1fr" }}
            gap="20px"
          >
            {(url, index) => (
              <Image
                id="photo"
                key={`photo-${index}`}
                src={url}
                objectFit="cover"
                alt={`photo-${index}`}
                width={140}
                height={140}
                style={{ cursor: "pointer" }}
                onClick={handleOnClickPhoto}
              />
            )}
          </Collection>
        )}
        <ToastContainer />
      </View>
    </Modal>
  );
};
