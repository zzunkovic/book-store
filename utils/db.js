import mongoose from "mongoose";
const url = process.env.DB_HOST;

console.log(url);

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

await connectDb();

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: String,
  },
  trending: {
    type: Boolean,
  },
  newRelease: {
    type: Boolean,
  },
  categories: {
    type: Array,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
  publicationDate: {
    type: String,
  },
  ISBN: {
    type: String,
  },
  dimension: {
    type: String,
  },
  weight: {
    type: Number,
  },
  language: {
    type: String,
  },
  publisher: {
    type: String,
  },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export { connectDb, Book };
