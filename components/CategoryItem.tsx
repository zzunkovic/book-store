import Link from "next/link";

interface CategoryItemProps {
  name: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ name }) => {
  return (
    <Link className=" overflow-hidden" href={`/${name}`}>
      <div className=" bg-slate-500 text-white font-bold h-full ">{name}</div>
    </Link>
  );
};

export default CategoryItem;
