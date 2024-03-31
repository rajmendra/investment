import React, { useContext, useRef, useState } from "react";
import { DarkModeContext } from "../context/index.jsx";
// import { DarkModeContext } from "../context";
import DarkLogo from "../assets/images/logo_dark.png";
import LightLogo from "../assets/images/logo_light.png";
import LogoIcon from "../assets/images/logo_light_02.png";
import ThemeBtn from "../components/ThemeBtn.jsx";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
const PhoneVerification = () => {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  const [isVerification, setIsVerification] = useState(false);
  const [filledInputs, setFilledInputs] = useState(Array(4).fill(false));
  const inputs = useRef([]);

  const focusNextInput = (index) => {
    if (index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      focusNextInput(index);
      setFilledInputs((prev) => {
        const newFilledInputs = [...prev];
        newFilledInputs[index] = true;
        return newFilledInputs;
      });
    } else if (value.length === 0) {
        setFilledInputs((prev) => {
            const newFilledInputs = [...prev];
            newFilledInputs[index] = false;
            return newFilledInputs;
          });
      focusPreviousInput(index);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && inputs.current[index].value === "") {
      setFilledInputs((prev) => {
        const newFilledInputs = [...prev];
        newFilledInputs[index - 1] = false;
        return newFilledInputs;
      });
      focusPreviousInput(index);
    }
  };

  return (
    <div
      className={` ${
        darkMode
          ? "verification-container-dark"
          : "verification-container-light"
      }  h-full py-20 px-4 lg:py-4 lg:px-4 flex justify-center lg:justify-between`}
    >
      <ThemeBtn />
      <div className="logo-content  text-center items-center lg:py-48 lg:px-80 hidden  lg:flex lg:flex-col ">
        <img
          src={darkMode ? LogoIcon : LightLogo}
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
        className={`login-card  flex flex-col w-full ${isVerification ? "h-[80%]" : "h-[70%]"}  py-32 lg:py-52 lg:float-right md:w-[80%] lg:w-[35%] lg:h-[85%]`}
        style={{ backgroundColor: darkMode ? "#091B25" : "#fff" }}
      >
        <Link to={"/login"}>
          <KeyboardBackspaceIcon
            className={`mx-8 md:mx-20 cursor-pointer lg:mx-24 ${
              darkMode ? "text-[#fff]" : "text-[#121212]"
            }`}
          />
        </Link>
        <div className="py-4 mt-4 px-10 md:px-24 lg:px-28">
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
            {!isVerification && (
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="phone"
                    className={`block text-sm font-normal leading-6 text-normal ${
                      darkMode ? "text-[#fff]" : "text-[#121212]"
                    } `}
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autocomplete="tel"
                      pattern="\+\d{1,2}\s\d{3}\s\d{3}\s\d{3}"
                      placeholder="(+1) 234 567 890"
                      required
                      className={`block w-full rounded-md relative pl-8 border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
                        darkMode
                          ? "text-[#fff] bg-transparent placeholder:text-[#fff] focus:ring-[#3F9CFF]"
                          : "text-[#121212] placeholder:text-[#121212] focus:ring-[#968864]"
                      }`}
                    />
                    <CallIcon
                      className={` absolute top-[39%] lg:top-[40.5%] ${
                        darkMode
                          ? "text-[#fff] bg-transparent placeholder:text-[#fff] focus:ring-[#3F9CFF]"
                          : "text-[#B8B8B8] placeholder:text-[#B8B8B8] focus:ring-[#968864]"
                      }`}
                    />
                  </div>
                </div>
                <p
                  className={`mt-2 text-justify text-sm ${
                    darkMode ? "text-[#fff]" : "text-[#5D5D5D]"
                  } `}
                >
                  Please enter your phone number, so we can more easily deliver
                  your order
                </p>

                <div>
                  <button
                    type="submit"
                    className={`flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      darkMode ? "bg-[#3F9CFF]" : "bg-[#968864]"
                    }`}
                    onClick={() => setIsVerification(true)}
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
            {isVerification && (
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="phone"
                    className={`block text-md font-bold leading-6 text-normal ${
                      darkMode ? "text-[#fff]" : "text-[#121212]"
                    } `}
                  >
                    Phone Verification
                  </label>
                </div>
                <p
                  className={`mt-2 text-justify text-sm ${
                    darkMode ? "text-[#fff]" : "text-[#5D5D5D]"
                  } `}
                >
                  Please enter the code we just sent to phone number
                </p>
                <p
                  className={`mt-2  text-sm text-center ${
                    darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
                  } `}
                >
                  (+20) 123477092 299
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      ref={(ref) => (inputs.current[index] = ref)}
                      type="text"
                      maxLength="1"
                      className={` w-12 text-center font-bold rounded-md ${
                        darkMode
                          ? "text-[#3F9CFF] bg-transparent  focus:ring-[#3F9CFF]"
                          : `text-[#121212]  focus:ring-[#968864] ${filledInputs[index] ? "bg-[#F6F4F1]" : "transparent"}`
                      }`}
                      onChange={(e) => handleInput(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}

                    />
                  ))}
                </div>
                <p
                  className={`mt-2 text-center text-sm ${
                    darkMode ? "text-[#fff]" : "text-[#5D5D5D]"
                  } `}
                >
                  If you didn’t receive a code?{" "}
                  <a
                    href="#"
                    className={`font-normal leading-6 ${
                      darkMode ? "text-[#3F9CFF]" : "text-[#968864]"
                    }`}
                  >
                    Resend
                  </a>
                </p>

                <div>
                  <button
                    type="submit"
                    className={`flex w-full justify-center rounded-full px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                      darkMode ? "bg-[#3F9CFF]" : "bg-[#968864]"
                    }`}
                    onClick={() => setIsVerification(true)}
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerification;
