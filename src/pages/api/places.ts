import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@googlemaps/google-maps-services-js";
import redis from "@/cache/redis";

const client = new Client();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, lat, lng } = req.query;
  const radius = 8000;
  const cacheKey = `${query}-${lat}-${lng}-${radius}`;
  const cache = await redis.get(cacheKey);
  if (cache) {
    console.log("cache hit");
    return res.status(200).json(cache);
  }
  try {
    console.log("cache miss: fetching places");
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
    await redis.set(cacheKey, results);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
