import { useState } from "react";

const Payment = () => {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "",
        key_secret: "",
        amount: amount * 100,
        currency: "INR",
        name: "",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="mt-32">
      <h2 className="tracking-wide font-sans">
        Razorpay Payment Integration Using React
      </h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setamount(e.target.value)}
        className="input-payment p-2 border border-none border-b border-black mb-4 bg-blue-400 text-gray-800 m-5 text-2xl font-sans"
      />

      <br />
      <br />
      <button
        onClick={handleSubmit}
        className="payment-btn p-2 bg-blue-400 text-aliceblue m-5 text-2xl font-sans border-b border-black w-48 hover:bg-blue-300 hover:text-gray-900"
      >
        submit
      </button>
    </div>
  );
};
export default Payment;
