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

interface book {
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
