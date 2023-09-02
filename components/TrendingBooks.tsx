import SliderComponent from "./SliderComponent";
import SliderItemBook from "./SliderItemBook";

const TrendingBooks: React.FC = () => {
  return (
    <section className="max-w-section mx-auto mb-32">
      <h2 className="text-center text-4xl font-bold mb-16">Trending Books</h2>
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
          img="https://wordery.com/jackets/62763e38/no-plan-b-lee-child-9780552177542.jpg?width=257"
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

export default TrendingBooks;
