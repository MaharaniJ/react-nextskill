import { Link, NavLink } from "react-router-dom";
import cart from "../data";
import { useEffect } from "react";
import Mycart from "../Cart-section/Mycart";
import { getProducts } from "../../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";



function Cart() {
  const { carddatas } = useSelector((state) => state.getCardData);
  const dispatch = useDispatch();
  console.log(carddatas);

  useEffect(() => {
    // console.log(getProducts)
    dispatch(getProducts());
  }, [dispatch]);

  // Check if products is undefined or null
  if (!carddatas) {
    return <div>Loading...</div>; // You can customize the loading state
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {carddatas.map((item) => (
            <div key={item.id} className="relative group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={item.imagSrc}
                  alt={item.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:scale-110 duration-500"
                />
              </div>
              <div className="absolute inset-6 flex flex-col gap-2 text-md  opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-repeat"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                  <path d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                </svg>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {item.price}
              </p>

              {/* Buttons at the top initially */}
              <div className="absolute inset-0 gap-5 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="transform group-hover:translate-y-10 transition-transform">
                  <button className="bg-slate-400 text-black px-4 py-2 rounded-full mx-2 ">
                    <Link to={`/viewcart/${item.id}`}> Quick View </Link>
                  </button>
                </div>
                <div className="transform group-hover:translate-y-10 transition-transform">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full mx-2 ">
                    <Link to={`/addtocart/${item.id}`}>Add to Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
