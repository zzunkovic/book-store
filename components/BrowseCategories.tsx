import CategoryItem from "./CategoryItem";

interface BrowseCategoriesProps {}

const BrowseCategories: React.FC<BrowseCategoriesProps> = () => {
  return (
    <section className="max-w-section mx-auto">
      <h2 className="text-center text-4xl font-bold mb-16">
        Browse Categories
      </h2>
      <div className="grid grid-cols-4 gap-4 h-[25rem] mb-24">
        <CategoryItem name="Fiction"></CategoryItem>
        <CategoryItem name="Non-Fiction"></CategoryItem>
        <CategoryItem name="Kids"></CategoryItem>
        <CategoryItem name="Education"></CategoryItem>
      </div>
    </section>
  );
};

export default BrowseCategories;
