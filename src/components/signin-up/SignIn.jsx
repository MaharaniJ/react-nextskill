import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import { toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  const { account, setAccount } = useContext(LoginContext);
  console.log(account);
  const [showPassword, setShowPassword] = useState(false);

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
      const data = response.data;
      console.log("Server Response:", data);

      // Check the HTTP status code for success
      if (response.status === 200) {
        console.log("Login successful. Token:", data.token); // Log the token
        setAccount(data)
        setLogindata({ ...loginData, email: "", password: "" });
        toast.success("Login Successfully done 😃!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/"); // Navigate to the main page
        }, 1000);

        if (data.token) {
          window.localStorage.setItem("app-token", data.token);
          console.log("Token stored in local storage.");
        }
      }
    } catch (error) {
      console.log("Error in login:", error);
      alert("Login failed");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form
      className="mx-auto flex flex-col justify-center items-center mt-32 bg-slate-200 w-1/3 p-8 gap-5 shadow-lg rounded-md"
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
        <div className="mt-2 relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={loginData.password}
            onChange={handleData}
            autoComplete="password"
            className="block w-full rounded-md  px-4 border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
           <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-slate-400 p-2 rounded-md"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
        </div>
      </div>
      <button className="bg-blue-400 rounded-md p-3">Submit</button>
      <div className="flex gap-3">
        <p>New User? </p>
        <Link to="/register">
          <button className="cursor-pointer hover:text-blue-500"  >
            Create Account!
          </button>
        </Link>
      </div>
    </form>
  );
}
export default SignIn;
