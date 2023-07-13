import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { photoReference } = req.query;
  try {
    const { statusText, data } = await client.placePhoto({
      params: {
        photoreference: photoReference as string,
        maxheight: 400,
        maxwidth: 400,
        key: process.env.GOOGLE_API_KEY!,
      },
      responseType: "arraybuffer",
    });
    if (statusText !== "OK") {
      throw new Error("error getting photo");
    }
    res.status(200).json(data.toString("base64"));
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
