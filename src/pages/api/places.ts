import { NextApiRequest, NextApiResponse } from "next";

const PLACE_TYPES = [
  "tourist_attraction",
  "restaurant",
  "cafe",
  "bar",
  "lodging",
  "shopping_mall",
];

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { lat, lng } = req.query;
  try {
    const data: google.maps.places.PlaceResult[] = [];
    for (const type of PLACE_TYPES) {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=8000&type=${type}&key=${process.env.GOOGLE_API_KEY}`
      );
      const { results }: { results: google.maps.places.PlaceResult[] } =
        await response.json();
      results.forEach((result) => {
        if (!data.find((place) => place.place_id === result.place_id)) {
          data.push(result);
        }
      });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default handler;
