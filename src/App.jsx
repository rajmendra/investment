import { useContext, useState } from "react";
import SignIn from "./page/SignIn";
import "./index.css";
import ThemeBtn from "./components/ThemeBtn";
import { DarkModeContext } from "./context";
import PhoneVerification from "./page/PhoneVerification";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./page/LandingPage";
import ESGPage from "./page/ESGPage";

function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/login/phone-verification" element={<PhoneVerification />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/esg" element={<ESGPage />} />
      </Routes>
      {/* <SignIn /> */}
      {/* <PhoneVerification /> */}
    </BrowserRouter>
  );
}

export default App;
