import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { placeId } = req.query;
  try {
    const {
      data: { status, result, error_message },
    } = await client.placeDetails({
      params: {
        place_id: placeId as string,
        key: process.env.GOOGLE_API_KEY!,
      },
    });
    if (status !== "OK") {
      throw new Error(error_message);
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
