import "./App.scss";
import BackgroundVideo from "./components/BGVideo";
// import Navbar from "./components/Navbar";
import FullPhoto from "./components/FullPhoto";
import FullPhoto2 from "./components/FullPhoto2";
import BlocksContainer from "./components/BlocksContainer";
// import { CoverVid } from "./components/CoverVid";
import { useState } from "react";
import { Footer } from "./components/Footer";

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

  return (
    <div className={`App ${lockoutClass}`}>
      {/* <Navbar /> */}
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
}

export default App;
