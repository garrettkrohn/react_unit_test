import useStepper from "../hooks/useStepper";

const Checkout = () => {
  const stepper = useStepper();

  return <div>checkout {stepper.step}</div>;
};

export default Checkout;
