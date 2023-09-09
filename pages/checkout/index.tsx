import { useCartContext } from "@/store/CartContext";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useState } from "react";
import next from "next";

const DELIVERY = 3.99;

type windows = "cartSummary" | "customerDetails" | "delivery" | "payment";

const CheckoutPage: React.FC = () => {
  const { cart, totalPrice } = useCartContext();
  const [curWindow, setCurWindow] = useState<windows>("cartSummary");

  const cartSummaryWindow = (
    <div>
      <div className="bg-black text-white  px-4 py-2">Your Products</div>
      <div className="flex flex-col">
        {cart.map((el) => {
          return (
            <CheckoutProduct
              key={el.book._id}
              id={el.book._id}
              title={el.book.title}
              author={el.book.author}
              img={el.book.img}
              price={el.book.price}
              quantity={el.quantity}
            ></CheckoutProduct>
          );
        })}
      </div>
    </div>
  );

  const customerDetailsWindow = (
    <div>
      <div className="bg-black text-white px-4 py-2 mb-4">
        Please enter your details below
      </div>
      <div>
        <form className="grid grid-cols-2 gap-2 ">
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Name"
          ></input>
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Last Name"
          ></input>
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Address"
          ></input>
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Postal Code"
          ></input>
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Phone Number"
          ></input>
          <input
            className="border-[1px] h-10 px-2 focus:outline-none"
            placeholder="Email"
          ></input>
        </form>
      </div>
    </div>
  );

  const deliveryWindow = (
    <div>
      <div className="bg-black text-white  px-4 py-2 mb-4">
        Please select your delivery method
      </div>
      <form className="test">
        <div className="flex justify-between px-4 py-8 border-[1px] mb-2">
          <label className="font-semibold">Home Delivery</label>
          <input type="radio" name="delivery" className="mr-16"></input>
        </div>
        <div className="flex justify-between px-4 py-8 border-[1px]">
          <label className="font-semibold">In-Store Pickup</label>
          <input type="radio" name="delivery" className="mr-16"></input>
        </div>
      </form>
    </div>
  );

  const paymentWindow = (
    <div>
      <div className="bg-black text-white  px-4 py-2 mb-4">
        Please select your payment method
      </div>
      <form>
        {" "}
        <div className="flex justify-between px-4 py-8 border-[1px] mb-2">
          <label className="font-semibold">Credit card</label>
          <input type="radio" name="payment" className="mr-16"></input>
        </div>
        <div className="flex justify-between px-4 py-8 border-[1px]">
          <label className="font-semibold">Pay with cash at pickup</label>
          <input type="radio" name="payment" className="mr-16"></input>
        </div>
      </form>
    </div>
  );

  const renderWindow = () => {
    switch (curWindow) {
      case "cartSummary":
        return cartSummaryWindow;

      case "customerDetails":
        return customerDetailsWindow;

      case "delivery":
        return deliveryWindow;

      case "payment":
        return paymentWindow;
    }
  };

  const nextStepHandler = () => {
    switch (curWindow) {
      case "cartSummary":
        setCurWindow("customerDetails");
        break;

      case "customerDetails":
        setCurWindow("delivery");
        break;
      case "delivery":
        setCurWindow("payment");
        break;
      case "payment":
        break;
    }
  };

  return (
    <section className="max-w-section mx-auto mb-16 min-h-[40rem]">
      <h2 className="font-bold text-5xl text-center mt-2 mb-16">Checkout</h2>

      <div className="flex gap-32">
        <div className="flex-shrink-0">
          <div className="grid grid-cols-4 text-center gap-4 font-semibold mb-8">
            <button
              onClick={() => setCurWindow("cartSummary")}
              className="bg-black text-white"
            >
              Cart Summary
            </button>
            <button
              onClick={() => setCurWindow("customerDetails")}
              className={`px-6 py-1 border-[1px]  border-black ${
                curWindow === "customerDetails" ||
                curWindow === "delivery" ||
                curWindow === "payment"
                  ? "bg-black text-white"
                  : ""
              }  `}
            >
              Customer Details
            </button>
            <button
              onClick={() => setCurWindow("delivery")}
              className={`px-6 py-1 border-[1px]  border-black ${
                curWindow === "delivery" || curWindow === "payment"
                  ? "bg-black text-white"
                  : ""
              }  `}
            >
              Delivery
            </button>
            <button
              onClick={() => setCurWindow("payment")}
              className={`px-6 py-1 border-[1px]  border-black ${
                curWindow === "payment" ? "bg-black text-white" : ""
              }  `}
            >
              Payment
            </button>
          </div>
          <div>{renderWindow()}</div>
        </div>
        <div className="w-full border-[1px]   self-start">
          <p className="bg-black text-white font-semibold px-4 py-2">
            Order Summary
          </p>
          <div className="px-4 py-4">
            <div className="flex  justify-between mb-2">
              <p>Products</p>
              <div>${totalPrice}</div>
            </div>{" "}
            <div className="flex  justify-between mb-4">
              <p>Delivery</p>
              <div>${DELIVERY}</div>
            </div>
            <div className="flex  justify-between mb-8">
              <p className="font-bold text-lg">Total Price</p>
              <div className="font-bold text-lg">${totalPrice + DELIVERY}</div>
            </div>
            <button
              onClick={nextStepHandler}
              className="text-white bg-black w-full font-bold py-2 px-4 hover:bg-black/90 transition-all duration-300"
            >
              {`${curWindow === "payment" ? "Complete Purchase" : "Next Step"}`}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
