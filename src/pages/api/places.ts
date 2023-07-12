import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { PlacesSearchResponse } from "@/types";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, lat, lng } = req.query;
  const radius = 8000;
  try {
    const {
      data: { results },
    } = await axios.get<PlacesSearchResponse>(BASE_URL, {
      params: {
        query,
        location: `${lat},${lng}`,
        radius,
        key: process.env.GOOGLE_API_KEY,
      },
    });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
