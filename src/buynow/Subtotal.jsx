
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Subtotal({ item }) {
  const [subtotal, setSubtotal] = useState(0);
  console.log(subtotal)

  useEffect(() => {
    totalAmount();
  }, [item]);

  const totalAmount = () => {
    let totalPrice = 0;
    item.forEach((item) => {
      if (item && item.price ) {
        totalPrice += item.price;
      }
    });
    setSubtotal(totalPrice);
  };
  
  Subtotal.propTypes = {
    item: PropTypes.array.isRequired,
  };
  
  return (
    <div className="flex justify-end mt-4">
      <h3 className="font-semibold">
        Subtotal ({item.length} items):
        <strong className="font-semibold text-black">₹{subtotal}.00</strong>
      </h3>
    </div>
  );
}

export default Subtotal;
