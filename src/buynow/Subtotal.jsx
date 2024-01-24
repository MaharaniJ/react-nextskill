import { useState, useEffect } from "react";
import PropTypes from 'prop-types';


function Subtotal({ item }) {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount();
  }, [item]);

  const totalAmount = () => {
    let price = 0;
    item.forEach((item) => {
      price += item.price.cost;
    });
    setPrice(price);
  };
  
  Subtotal.propTypes = {
    item: PropTypes.array.isRequired,
  };
  
  return (
    <div className="flex justify-end mt-4">
      <h3 className="font-semibold">
        Subtotal ({item.length} items):{" "}
        <strong className="font-semibold text-black">₹{price}.00</strong>
      </h3>
    </div>
  );
}

export default Subtotal;
