import CategoryItem from "./CategoryItem";

interface BrowseCategoriesProps {}

/*
Contains links to all main categories which then act as search queries for displaying the books with the chosen category at the [category] page


*/

const BrowseCategories: React.FC<BrowseCategoriesProps> = () => {
  return (
    <section className="max-w-section mx-auto px-8 mb-40">
      <h2 className="text-4xl  font-bold mb-8 whitespace-nowrap max-[980px]:text-2xl max-[980px]:mb-4">
        Browse Categories
      </h2>
      <div className="grid grid-cols-4 gap-4 h-[25rem] mb-24  max-[980px]:grid-cols-2 max-[980px]:h-[40rem] max-[530px]:grid-cols-1">
        <CategoryItem
          name="Fiction"
          img={"/img/alice-alinari-HUqxgjORAnw-unsplash.jpg"}
        ></CategoryItem>
        <CategoryItem
          name="Non-Fiction"
          img={"/img/lerone-pieters-j57b5V7_RJw-unsplash.jpg"}
        ></CategoryItem>
        <CategoryItem
          name="Children"
          img={"/img/jonathan-borba-JzCC_b280fM-unsplash.jpg"}
        ></CategoryItem>
        <CategoryItem
          img={"/img/albert-vincent-wu-Tgyzloxnw6E-unsplash.jpg"}
          name="Education"
        ></CategoryItem>
      </div>
    </section>
  );
};

export default BrowseCategories;
