import { NextApiRequest, NextApiResponse } from "next";
import { getEvent } from "../actions/getEvents";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const events = await getEvent();
    res.status(200).json(events);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des événements" });
  }
}
