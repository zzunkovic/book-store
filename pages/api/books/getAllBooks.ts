import { Book } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

type FirstValue = "Fiction" | "Non-Fiction" | "Children" | "Education";

type SecondValue = {
  Fiction:
    | "Adventure"
    | "Crime"
    | "Mystery"
    | "Thriller"
    | "GraphicNovels"
    | "Historical"
    | "Horror"
    | "Romance"
    | "Fantasy"
    | "ScienceFiction";
  "Non-Fiction":
    | "Art"
    | "Biography"
    | "Business"
    | "Computing"
    | " Health&Lifestyle"
    | "Games"
    | "History"
    | "Philosophy"
    | "Music"
    | "Sport"
    | "Travel"
    | "Psychology";
  Children: "Activities" | "Comics" | "EarlyLearning" | "PictureBooks";
  Education:
    | "Geography"
    | "History"
    | "Languages"
    | "Mathematics"
    | "Medical"
    | "PhysicalEducation"
    | "Technology";
};

interface BookInterface {
  id: string;
  title: string;
  author: string;
  price: number;
  trending: boolean;
  newRelease: boolean;
  categories: [FirstValue, SecondValue[FirstValue]];
  img: string;
  description: string;
  publicationDate: string;
  ISBN: string;
  dimension: string;
  weight: number;
  language: string;
  publisher: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // await connectDb();
    const allBooks = await Book.find();
    res.status(200).json({
      status: "success",
      data: {
        books: allBooks,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
}
