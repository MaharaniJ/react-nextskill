import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [Signupinput, setSignupinput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupinput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const userData = {
    //   firstname: Signupinput.firstname,
    //   lastname: Signupinput.lastname,
    //   email: Signupinput.email,
    //   password: Signupinput.password,
    // };
    localStorage.setItem("userData", JSON.stringify(Signupinput));


    // Clear input fields
    setSignupinput({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
    alert("User data saved successfully!");
  };
  return (
    <form
      className="mx-auto flex flex-col justify-center items-center mt-20 bg-slate-200 w-1/3 p-8 gap-5 shadow-lg rounded-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-sm">Sign Up</h1>
      <div className="w-full">
        <label
          htmlFor="firstname"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Firstname
        </label>
        <div className="mt-2">
          <input
            id="firstname"
            name="firstname"
            value={Signupinput.firstname}
            onChange={handleChange}
            type="firstname"
            autoComplete="firstname"
            className="block w-full  px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="lastname"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Lastname
        </label>
        <div className="mt-2">
          <input
            id="lastname"
            name="lastname"
            value={Signupinput.lastname}
            onChange={handleChange}
            type="lastname"
            autoComplete="lastname"
            className="block w-full px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="email"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            value={Signupinput.email}
            onChange={handleChange}
            type="email"
            autoComplete="email"
            className="block w-full  px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="password"
          className="block text-lg font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            value={Signupinput.password}
            onChange={handleChange}
            type="password"
            autoComplete="password"
            className="block w-full  px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button className="bg-blue-400 rounded-md p-3 text-xl">Submit</button>
      <div className="flex gap-3 text-lg">
        <p>Already Have Account? </p>
        <Link to="/login">
          <button className="cursor-pointer  hover:text-blue-500">
            SignIn!
          </button>
        </Link>
      </div>
    </form>
  );
}
export default SignUp;
