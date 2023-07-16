import { NextApiRequest, NextApiResponse } from "next";
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  try {
    const { response, status } = await unsplashApi.search.getPhotos({
      query: query as string,
    });
    if (status !== 200) {
      throw new Error("Error fetching from Unsplash");
    }
    res.status(200).json(response?.results || []);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
