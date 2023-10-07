interface GridCardProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

/*
This element is part of WhyChooseUs component and is responsible for rendering a card

*/

const GridCard: React.FC<GridCardProps> = ({ title, text, icon }) => {
  return (
    <div className="  py-12 px-12  border-black rounded-xl border-b-4 bg-gray-100">
      <div className="mb-4 flex ">{icon}</div>

      <h3 className="font-bold text-2xl mb-2 max-[980px]:text-xl">{title}</h3>
      <p className="">{text}</p>
    </div>
  );
};

export default GridCard;
