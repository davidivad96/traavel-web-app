import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PLACE_TYPES, PlacesByType, PlacesSearchResponse } from "@/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lat, lng, city } = req.query;
  const radius = 8000;
  try {
    const data: PlacesByType = Object.values(PLACE_TYPES).reduce(
      (acc, type) => ({ ...acc, [type]: [] }),
      {} as PlacesByType
    );
    for (const type of Object.values(PLACE_TYPES)) {
      const query = `${type}s in ${city}`;
      const {
        data: { results },
      } = await axios.get<PlacesSearchResponse>(
        `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}location=${lat},${lng}&radius=${radius}&key=${process.env.GOOGLE_API_KEY}`
      );
      results.forEach((result) => {
        if (!data[type].find((place) => place.place_id === result.place_id)) {
          data[type].push(result);
        }
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
