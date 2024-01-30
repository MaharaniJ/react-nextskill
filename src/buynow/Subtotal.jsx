
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Subtotal({ item }) {
  const [subtotal, setSubtotal] = useState(0);
  console.log(subtotal)

  useEffect(() => {
    totalAmount();
  }, [item]);


  const totalAmount = () => {
    let price = 0;
    item.map((item) => {
      console.log("Item price:", item.price);
      const parsedPrice = parseFloat(item.price);
      console.log("Parsed price:", parsedPrice);
      if (!isNaN(parsedPrice)) {
        price += parsedPrice;
      }
    });
    setSubtotal(price);
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
