import bgvid from "../assets/movie4.mp4";
import logo from "../assets/temple-logo.png";
import anilogo from "../assets/anilogo2.mp4";

const BackgroundVideo = ({
  hasTouched,
  isVideoVisible,
  handleVideoEnd,
}: {
  hasTouched: boolean;
  isVideoVisible: boolean;
  handleVideoEnd: () => void;
}) => {
  const hideAnimationContainerClass =
    hasTouched && !isVideoVisible ? "hide" : "";
  return (
    <div className="video-container blur-borders">
      <video className="video-bg" autoPlay loop muted>
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay-desktop">
        <h1 className="misty-text">Tuning Temple</h1>
        <div className="logo-container misty-image">
          <img src={logo} alt="logo" className="temple-logo misty-image" />
        </div>
        <p></p>
      </div>
      <div className="overlay-mobile">
        <h1 className="misty-text text-shadow">Tuning Temple</h1>
        {hasTouched && isVideoVisible && (
          <div className={`ani-container ${hideAnimationContainerClass}`}>
            <video className="ani-logo" autoPlay muted onEnded={handleVideoEnd}>
              <source src={anilogo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        {!hasTouched && (
          <div className="logo-container misty-image">
            <img src={logo} alt="logo" className="temple-logo misty-image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundVideo;