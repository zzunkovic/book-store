import { NextApiRequest, NextApiResponse } from "next";
import { Book } from "@/utils/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const query = req.body;

    const searchRegex = new RegExp(query, "i");
    const searchedBooks = await Book.find({
      $or: [
        { title: searchRegex },
        { author: searchRegex },
        { categories: { $in: [searchRegex] } },
      ],
    });

    res.status(200).json({
      status: "success",
      data: {
        books: searchedBooks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}

export default handler;
