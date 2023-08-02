import useStepper from "../hooks/useStepper";
import BillingForm from "./BillingForm";
import ShippingForm from "./ShippingForm";
import CreditCardForm from "./CreditCardForm";

const Checkout = () => {
  const { step, increment, decrement } = useStepper();

  return (
    <div>
      <div>checkout current step is: {step}</div>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => increment()}>increment</button>
      {step === 0 ? <ShippingForm /> : <></>}
      {step === 1 ? <BillingForm /> : <></>}
      {step === 2 ? <CreditCardForm /> : <></>}
    </div>
  );
};

export default Checkout;
