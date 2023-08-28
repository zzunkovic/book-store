interface CategoryItemProps {
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name }) => {
  return <div className=" bg-slate-500 text-white font-bold ">{name}</div>;
};

export default CategoryItem;
