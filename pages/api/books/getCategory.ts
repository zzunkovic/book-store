import { NextApiRequest, NextApiResponse } from "next";

import { Book } from "@/utils/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const books = await Book.find({ categories: req.body });

    res.status(200).json({
      status: "success",
      data: {
        books: books,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}
