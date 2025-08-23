import "./App.scss";
import BackgroundVideo from "./components/BGVideo";
import Navbar from "./components/Navbar";
import FullPhoto from "./components/FullPhoto";
import FullPhoto2 from "./components/FullPhoto2";
import BlocksContainer from "./components/BlocksContainer";
// import { CoverVid } from "./components/CoverVid";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  // const [hasTouched, setHasTouched] = useState(false);
  const hasTouched = true;
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const handleVideoEnd = () => {
    setIsVideoVisible(false);
  };
  // const handleTouch = () => {
  //   setHasTouched(true);
  // };

  // const lockoutClass = isVideoVisible ? "lockout" : "";
  const lockoutClass = "";

  const HomePage = () => (
    <div className={`App ${lockoutClass}`}>
      <BackgroundVideo
        hasTouched={hasTouched}
        isVideoVisible={isVideoVisible}
        handleVideoEnd={handleVideoEnd}
      />
      <FullPhoto />
      <FullPhoto2 />
      <BlocksContainer />
      {/* <CoverVid
        hasTouched={hasTouched}
        handleTouch={handleTouch}
        isVideoVisible={isVideoVisible}
      /> */}
      <Footer />
    </div>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
