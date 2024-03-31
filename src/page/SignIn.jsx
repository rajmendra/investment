import React, { useContext } from "react";
import { DarkModeContext } from "../context/index.jsx";
// import { DarkModeContext } from "../context";
import DarkLogo from "../assets/images/logo_dark.png";
import LightLogo from "../assets/images/logo_light.png";
import GoogleIcon from '../assets/images/google_logo.png'
import AppleIcon from '@mui/icons-material/Apple';
import LogoIcon from  '../assets/images/logo_light_02.png'
import ThemeBtn from "../components/ThemeBtn.jsx";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div className={`login-container h-full py-20 px-4 lg:py-4 lg:px-4 flex justify-center lg:justify-between`}>
      <ThemeBtn />
       <div className="logo-content  text-center items-center lg:py-48 lg:px-48 hidden  lg:flex lg:flex-col ">
          <img
            src= { darkMode ? LogoIcon : LightLogo}
            alt="logo"
            className="h-16 w-16"
          />
          <p
            className={`logo-name `}
            style={{ color: darkMode ? "#fff" : "#968864" }}
          >
            Investment . AI
          </p>
        </div>
      <div
        className="login-card  flex flex-col w-full h-[95%] py-8 lg:float-right md:w-[80%] lg:w-[35%] lg:h-[85%]"
        style={{ backgroundColor: darkMode ? "#091B25" : "#fff" }}
      >
        <div className="logo-content flex flex-col items-center py-2">
          <img
            src={darkMode ? DarkLogo : LightLogo}
            alt="logo"
            className="h-16 w-16"
          />
          <p
            className={`logo-name `}
            style={{ color: darkMode ? "#3F9CFF" : "#968864" }}
          >
            Investment . AI
          </p>
        </div>
        <div className="py-4 px-8 md:px-24 lg:px-28">
          <h3
            className={`text-xl  font-bold font-['Avenir'] ${
              darkMode ? "text-[#fff] " : "text-[#121212]"
            }`}
          >
            Welcome 👋
          </h3>
          <p className={`${darkMode ? "text-[#fff] " : "text-[#A6A6A6]"}`}>
            Sign to your account
          </p>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  className={`block text-sm font-normal leading-6 text-normal ${
                    darkMode ? "text-[#fff]" : "text-[#121212]"
                  } `}
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="Your email"
                    required
                    className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                      darkMode
                        ? "text-[#fff] bg-transparent placeholder:text-[#fff] focus:ring-[#3F9CFF]"
                        : "text-[#B8B8B8] placeholder:text-[#B8B8B8] focus:ring-[#968864]"
                    }`}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className={`block text-sm font-normal leading-6 text-normal ${
                      darkMode ? "text-[#fff]" : "text-[#121212]"
                    } `}
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    required
                    placeholder="Your password"
                    className={`block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                      darkMode
                        ? "text-[#fff] bg-transparent placeholder:text-[#fff] focus:ring-[#3F9CFF]"
                        : "text-[#B8B8B8] placeholder:text-[#B8B8B8] focus:ring-[#968864]"
                    }`}
                  />
                </div>
                <div className="text-sm mt-2">
                  <a
                    href="#"
                    className={`font-semibold ${
                      darkMode ? "text-[#fff]" : "text-[#968864]"
                    } `}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    darkMode ? "bg-[#3F9CFF]" : "bg-[#968864]"
                  }`}
                >
                  Login
                </button>
              </div>
            </form>

            <p
              className={`mt-2 text-center text-sm ${
                darkMode ? "text-[#fff]" : "text-[#5D5D5D]"
              } `}
            >
              Don’t have an account?{" "}
              <a
                href="#"
                className={`font-semibold leading-6 ${
                  darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
                }`}
              >
                Sign Up
              </a>
            </p>
            <div className="mt-4">
              <button
                type="submit"
                className={`flex w-full justify-center rounded-full px-3 py-1.5 text-xs font-normal leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-[#3F9CFF77] text-[#3F9CFF]"
                    : "bg-[#F4F0E5] text-[#2C2C2C]"
                }`}
              >
               <Link to={'/login/phone-verification'}>Login with Phone Number</Link> 
              </button>
            </div>
            <div className="flex items-center mt-6">
              <div
                className={`flex-grow  h-px ${
                  darkMode ? "bg-[#3F9CFF]" : "bg-[#E8E8E8]"
                }`}
              ></div>
              <div
                className={`mx-2 ${darkMode ? "text-[#fff]" : "text-[#A6A6A6]"}`}
              >
                Or with
              </div>
              <div
                className={`flex-grow  h-px ${
                  darkMode ? "bg-[#3F9CFF]" : "bg-[#E8E8E8]"
                }`}
              ></div>
            </div>
            <div className="mt-4 flex items-center">
              <button className={`flex items-center w-full justify-center rounded-full px-3 py-1.5 text-xs font-normal leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#fff] border  border-[#3F9CFF] "
                    : "bg-[#fff] text-[#121212] border border-[#968864]"
                }`}>
                <img
                  src={GoogleIcon}
                  alt="Google Icon"
                  className="w-4 h-4 mr-2"
                />
                <span>Sign in with Google</span>
              </button>
            </div>
            <div className="mt-4 flex items-center">
              <button className={`flex items-center w-full justify-center rounded-full px-3 py-1.5 text-xs font-normal leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                  darkMode
                    ? "bg-transparent text-[#fff] border  border-[#3F9CFF] "
                    : "bg-[#fff] text-[#121212] border border-[#968864]"
                }`}>
                
                <AppleIcon className="w-5 h-5 mr-2" />
                <span>Sign in with Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
