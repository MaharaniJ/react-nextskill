import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLogindata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;
    const token = window.localStorage.getItem("app-token");

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Check the HTTP status code for success
      if (response.status === 200) {
        const logindata = response.data;
        console.log(logindata);

        // Check the status property in the response data
        if (logindata.status === "success") {
          alert("Login successful");
          setLogindata({
            ...loginData,
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          // Handle unsuccessful login
          alert("Login failed");
        }
      } else {
        // Handle non-200 status codes
        alert("Login failed");
      }
    } catch (error) {
      console.log("Error in login:", error);
      alert("Login failed");
    }
  };

  return (
    <form
      className="mx-auto flex flex-col justify-center items-center mt-20 bg-slate-200 w-1/3 p-8 gap-5 shadow-lg rounded-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-xl font-sm">Sign In</h1>
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
            type="email"
            value={loginData.email}
            onChange={handleData}
            autoComplete="email"
            className="block w-full leading-10 px-4 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            type="password"
            value={loginData.password}
            onChange={handleData}
            autoComplete="password"
            className="block w-full rounded-md  px-4 border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <button className="bg-blue-400 rounded-md p-3">Submit</button>
      <div className="flex gap-3">
        <p>New User? </p>
        <Link to="/register">
          <button className="cursor-pointer hover:text-blue-500">
            Create Account!
          </button>
        </Link>
      </div>
    </form>
  );
}
export default SignIn;
