import { useContext, useState } from "react";
import SignIn from "./page/SignIn";
import "./index.css";
import ThemeBtn from "./components/ThemeBtn";
import { DarkModeContext } from "./context";
import PhoneVerification from "./page/PhoneVerification";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <ThemeBtn />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/phone-verification" element={<PhoneVerification />} />
      </Routes>
      {/* <SignIn /> */}
      {/* <PhoneVerification /> */}
    </BrowserRouter>
  );
}

export default App;
