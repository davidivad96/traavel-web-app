import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, lat, lng } = req.query;
  const radius = 8000;
  try {
    const {
      data: { status, results, error_message },
    } = await client.textSearch({
      params: {
        query: query as string,
        location: `${lat},${lng}`,
        radius,
        key: process.env.GOOGLE_API_KEY!,
      },
    });
    if (status !== "OK") {
      throw new Error(error_message);
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
