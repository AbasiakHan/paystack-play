import React from "react";
import logo from "./logo.svg";
import {
  usePaystackPayment,
  PaystackButton,
  PaystackConsumer,
} from "react-paystack";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const config = {
  reference: new Date().getTime(),
  email: "user@example.com",
  amount: 20000,
  publicKey: "pk_test_311be9033eea7962d383206fe6da86555554287a",
};

const PaystackHookExample = () => {
  const initializePayment = usePaystackPayment(config);
  return (
    <div>
      <button
        onClick={() => {
          initializePayment();
        }}
      >
        Paystack Hooks Implementation
      </button>
    </div>
  );
};

function App() {
  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: () => null,
    onClose: () => null,
  };

  return (
    <div className="App">

      <PaystackHookExample />
      <PaystackButton {...componentProps} />
      <PaystackConsumer {...componentProps}>
        {({ initializePayment }) => (
          <button onClick={() => initializePayment()}>
            Paystack Consumer Implementation
          </button>
        )}
      </PaystackConsumer>
    </div>
  );
}

export default App;
