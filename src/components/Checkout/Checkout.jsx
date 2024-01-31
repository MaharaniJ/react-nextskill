import axios from "axios";
import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import { toast } from "react-toastify";

export default function Checkout() {
  const { account } = useContext(LoginContext);
  const userEmail = account ? account.email : "";

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: userEmail,
    companyname: "",
    country: "",
    streetaddress: "",
    region: "",
    postalcode: "",
  });
  console.log(formData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const token = window.localStorage.getItem("app-token");
  console.log(token)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setErrors(Validation(formData))

    try {
      const response = await axios.post(
        "http://localhost:5000/checkout",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      console.log(data);
      if (response.status !== 404) {
        toast.success("Form data saved successfully", {
          position: "top-right",
        });
        console.log("Form data saved successfully");
        setFormData({
          ...formData,
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          country: "",
          streetAddress: "",
          city: "",
          region: "",
          postalCode: "",
        });

        
        // Clear the form data

        // Exit editing mode
      } else {
        toast.error("Failed to save form data", {
          position: "top-center",
        });
        console.error("Failed to save form data");
      }
    } catch (error) {
      console.error("Error while saving form data:", error.message);
    }
  };

  const handleCancel = () => {
    // Reset the form data and exit editing mode
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      country: "",
      streetAddress: "",
      city: "",
      region: "",
      postalCode: "",
    });
  };

  return (
    <>
      <form
        className="mx-20 flex flex-col justify-center items-center mt-28 bg-slate-200 p-8 shadow-lg rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h1 className="text-base font-bold leading-10 text-gray-900 mb-4 px-7">
              Shipping Address
            </h1>

            <div className="sm:col-span-4 mb-7">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="firstname"
                  type="text"
                  autoComplete="first-name"
                  className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4 mb-7">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="lastname"
                  type="text"
                  autoComplete="last-name"
                  className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4 mb-7">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={userEmail}
                  className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="Company-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  id="Company-name"
                  name="companyname"
                  type="text"
                  autoComplete="Company-name"
                  className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    required
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                    <option>India</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetaddress"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="col-span-full ">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalcode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full p-7 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <Link to="/payment">
            <button
              type="submit"
              className="rounded-md px-3 py-2 text-sm font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            >
              Save
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
