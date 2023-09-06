import { NextApiRequest, NextApiResponse } from "next";
import { Book } from "@/utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const books = await Book.find({ trending: true });

    res.status(200).json({
      status: "success",
      data: {
        books,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
}

export default handler;
