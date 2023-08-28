import SliderComponent from "./SliderComponent";
import SliderItemBook from "./SliderItemBook";

const NewReleases: React.FC = () => {
  return (
    <section className="max-w-section mx-auto mb-32">
      <h2 className="text-center text-4xl font-bold mb-16">New Releases</h2>
      <SliderComponent
        speed={500}
        slidesToShow={5}
        slidesToScroll={3}
        dots={true}
      >
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>{" "}
        <SliderItemBook
          name="Kaisen"
          img="/img/book2.jpg"
          author="Eichiro Ooda"
          price={20}
        ></SliderItemBook>
      </SliderComponent>
    </section>
  );
};

export default NewReleases;
