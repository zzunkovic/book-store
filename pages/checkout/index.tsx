import { useCartContext } from "@/store/CartContext";
import CheckoutProduct from "@/components/CheckoutProduct";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

const DELIVERY = 3.99;

type windows = "cartSummary" | "customerDetails" | "delivery" | "payment";

interface customerDetailsFormInterface {
  name: string;
  lastName: string;
  address: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
}

interface customerDetailsFormValidityInterface {
  name: boolean;
  lastName: boolean;
  address: boolean;
  postalCode: boolean;
  phoneNumber: boolean;
  email: boolean;
}

type deliveryType = "homeDelivery" | "inStorePickUp" | "";
type paymentType = "creditCard" | "payWithCash" | "";

const CheckoutPage: React.FC = () => {
  const { cart, totalPrice } = useCartContext();
  const [curWindow, setCurWindow] = useState<windows>("cartSummary");
  const [nextStepAvailable, setNextStepAvailable] = useState(true);

  const [customerDetailsForm, setCustomerDetailsForm] =
    useState<customerDetailsFormInterface>({
      name: "",
      lastName: "",
      address: "",
      postalCode: "",
      phoneNumber: "",
      email: "",
    });
  const [customerDetailsFormValidity, setCustomerDetailsFormValidity] =
    useState<customerDetailsFormValidityInterface>({
      name: false,
      lastName: false,
      address: false,
      postalCode: false,
      phoneNumber: false,
      email: false,
    });

  const [deliveryForm, setDeliveryForm] = useState<deliveryType>("");

  const [paymentForm, setPaymentForm] = useState<paymentType>("");
  const router = useRouter();
  const [isFormDetailsValid, setIsDetailsFormValid] = useState(false);
  const [isFormDeliveryValid, setIsFormDeliveryValid] = useState(false);
  const [isFormPaymentValid, setIsFormPaymentValid] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      router.replace("/");
    }
  }, [router, cart]);

  const customerDetailsChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value !== "") {
      setCustomerDetailsFormValidity((prevFormVal) => {
        const newFormVal = { ...prevFormVal, [name]: true };

        return newFormVal;
      });
    } else {
      setCustomerDetailsFormValidity((prevFormVal) => {
        const newFormVal = { ...prevFormVal, [name]: false };
        return newFormVal;
      });
    }

    setCustomerDetailsForm((prevForm) => {
      const newForm = { ...prevForm, [name]: value };
      return newForm;
    });
  };

  useEffect(() => {
    if (
      Object.values(customerDetailsFormValidity).every((val) => val === true)
    ) {
      setIsDetailsFormValid(true);
    }
  }, [customerDetailsFormValidity]);

  const deliveryChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDeliveryForm(value as deliveryType);
    setIsFormDeliveryValid(true);
  };

  const paymentChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked) {
      setPaymentForm(value as paymentType);
      setIsFormPaymentValid(true);
    }
  };

  const cartSummaryWindow = (
    <div className="rounded-xl overflow-hidden">
      <div className="bg-black  text-white  px-4 py-2">Your Products</div>
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
      <div className="bg-black rounded-xl text-white px-4 py-2 mb-4">
        Please enter your details below
      </div>
      <div>
        <form className="grid grid-cols-2 gap-2 max-[700px]:grid-cols-1 ">
          <input
            className="border-[1px]  rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Name"
            name="name"
            value={customerDetailsForm.name}
            onChange={customerDetailsChangeHandler}
          ></input>
          <input
            className="border-[1px]  rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Last Name"
            name="lastName"
            value={customerDetailsForm.lastName}
            onChange={customerDetailsChangeHandler}
          ></input>
          <input
            className="border-[1px] rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Address"
            name="address"
            value={customerDetailsForm.address}
            onChange={customerDetailsChangeHandler}
          ></input>
          <input
            className="border-[1px] rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Postal Code"
            name="postalCode"
            value={customerDetailsForm.postalCode}
            onChange={customerDetailsChangeHandler}
          ></input>
          <input
            className="border-[1px] rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Phone Number"
            name="phoneNumber"
            value={customerDetailsForm.phoneNumber}
            onChange={customerDetailsChangeHandler}
          ></input>
          <input
            className="border-[1px] rounded-xl h-10 px-2 focus:outline-none"
            placeholder="Email"
            name="email"
            value={customerDetailsForm.email}
            onChange={customerDetailsChangeHandler}
          ></input>
        </form>
      </div>
    </div>
  );

  const deliveryWindow = (
    <div>
      <div className="bg-black text-white rounded-xl px-4 py-2 mb-4">
        Please select your delivery method
      </div>
      <form className="test">
        <div className="flex justify-between px-4 py-8 border-[1px] mb-2 rounded-xl">
          <label className="font-semibold">Home Delivery</label>
          <input
            type="radio"
            name="delivery"
            value="homeDelivery"
            className="mr-16 rounded-xl"
            checked={deliveryForm === "homeDelivery"}
            onChange={deliveryChangeHandler}
          ></input>
        </div>
        <div className="flex justify-between px-4 py-8 border-[1px] rounded-xl">
          <label className="font-semibold rounded-xl">In-Store Pickup</label>
          <input
            type="radio"
            value="inStorePickUp"
            name="delivery"
            checked={deliveryForm === "inStorePickUp"}
            className="mr-16 rounded-xl"
            onChange={deliveryChangeHandler}
          ></input>
        </div>
      </form>
    </div>
  );

  const paymentWindow = (
    <div>
      <div className="bg-black text-white  rounded-xl  px-4 py-2 mb-4">
        Please select your payment method
      </div>
      <form>
        {" "}
        <div className="flex justify-between px-4 py-8 border-[1px] mb-2 rounded-xl">
          <label className="font-semibold">Credit card</label>
          <input
            type="radio"
            name="payment"
            className="mr-16"
            value="creditCard"
            checked={paymentForm === "creditCard"}
            onChange={paymentChangeHandler}
          ></input>
        </div>
        <div className="flex justify-between px-4 py-8 border-[1px] rounded-xl">
          <label className="font-semibold">Pay with cash at pickup</label>
          <input
            type="radio"
            name="payment"
            className="mr-16"
            value="payWithCash"
            checked={paymentForm === "payWithCash"}
            onChange={paymentChangeHandler}
          ></input>
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

  useEffect(() => {
    if (curWindow === "cartSummary") {
      setNextStepAvailable(true);
    }

    if (curWindow === "customerDetails") {
      if (isFormDetailsValid) setNextStepAvailable(true);
      else setNextStepAvailable(false);
    }

    if (curWindow === "delivery") {
      if (isFormDeliveryValid) setNextStepAvailable(true);
      else setNextStepAvailable(false);
    }

    if (curWindow === "payment") {
      if (isFormPaymentValid) setNextStepAvailable(true);
      else setNextStepAvailable(false);
    }
  }, [curWindow, isFormDetailsValid, isFormDeliveryValid, isFormPaymentValid]);

  return (
    <section className="max-w-section mx-auto mb-16 min-h-[40rem] px-8">
      <h2 className="font-bold text-5xl text-center mt-2 mb-16 max-[980px]:text-2xl max-[980px]:mb-8">
        Checkout
      </h2>

      <div className="flex gap-16 max-[1100px]:flex-col">
        <div className="flex-shrink-0">
          <div className="grid grid-cols-4 text-center gap-4 font-semibold mb-8 max-[700px]:grid-cols-1">
            <button
              onClick={() => setCurWindow("cartSummary")}
              className={` px-6 py-1 bg-black text-white rounded-xl `}
            >
              Cart Summary
            </button>
            <button
              onClick={() => setCurWindow("customerDetails")}
              className={` rounded-xl px-6 py-1 border-[1px]  border-black ${
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
              className={`rounded-xl px-6 py-1 border-[1px]  border-black ${
                curWindow === "delivery" || curWindow === "payment"
                  ? "bg-black text-white"
                  : ""
              } ${
                isFormDetailsValid
                  ? ""
                  : " pointer-events-none border-gray-500 text-gray-500"
              } `}
            >
              Delivery
            </button>
            <button
              onClick={() => setCurWindow("payment")}
              className={`rounded-xl px-6 py-1 border-[1px]  border-black ${
                curWindow === "payment" ? "bg-black text-white" : ""
              } ${
                isFormDeliveryValid
                  ? ""
                  : " pointer-events-none border-gray-500 text-gray-500"
              } `}
            >
              Payment
            </button>
          </div>
          <div>{renderWindow()}</div>
        </div>
        <div className="w-full border-[1px] rounded-xl overflow-hidden   self-start">
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
              <div className="font-bold text-lg">
                ${(totalPrice + DELIVERY).toFixed(2)}
              </div>
            </div>
            <button
              onClick={nextStepHandler}
              className={` rounded-xl text-white w-full font-bold py-2 px-4 transition-all duration-300${
                nextStepAvailable
                  ? " bg-black hover:bg-black/90 pointer-events-auto "
                  : " bg-black/40 pointer-events-none"
              }
              
              `}
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
