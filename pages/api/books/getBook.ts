import { NextApiRequest, NextApiResponse } from "next";
import { Book } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const book = await Book.findById(req.body);
    const bodyreq = req.body;
    res.status(200).json({
      status: "success",
      data: {
        book,
        bodyreq,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
