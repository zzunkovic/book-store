interface GridCardProps {
  title: string;
  text: string;
  icon: React.ReactElement;
}

const GridCard: React.FC<GridCardProps> = ({ title, text, icon }) => {
  return (
    <div className=" border-black border-2 py-8 px-6 ">
      <div className="mb-4 flex justify-center">{icon}</div>

      <h3 className="font-bold text-2xl text-center mb-2">{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default GridCard;
