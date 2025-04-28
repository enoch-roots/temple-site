// import { useEffect, useRef } from "react";
// import bgvid from "../assets/movie4.mp4";
import logo from "../assets/temple-logo.png";
// import anilogo from "../assets/anilogo2.mp4";
// import rise from "../assets/rise.png";
import whitedown from "../assets/whitedown.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const BackgroundVideo = ({
  hasTouched,
  isVideoVisible,
  handleVideoEnd,
}: {
  hasTouched: boolean;
  isVideoVisible: boolean;
  handleVideoEnd: () => void;
}) => {
  // const hideAnimationContainerClass =
  //   hasTouched && !isVideoVisible ? "hide" : "";

  // const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus("sending");

    // Using environment variables for EmailJS credentials
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

    // Validation to make sure env variables are present
    if (!serviceId || !publicKey || !templateId) {
      console.error("Missing EmailJS credentials in environment variables");
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
      return;
    }

    const templateParams = {
      to_email: "tuningtemple@gmail.com",
      name: email,
      from_email: email,
      message: message,
      time: new Date().toLocaleString(),
      subject: "New Booking Request from Tuning Temple Website",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setSubmitStatus("success");
        setEmail("");
        setMessage("");

        // Close the modal after showing success message
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus(null);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        setSubmitStatus("error");

        // Clear error status after a few seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 3000);
      });
  };

  // useEffect(() => {
  //   const video: any = videoRef.current;

  //   const playVideo = () => {
  //     if (video && video.paused) {
  //       video.play().catch((error: any) => {
  //         console.error("Error attempting to play", error);
  //       });
  //     }
  //   };

  //   video.addEventListener("canplay", playVideo);

  //   playVideo();

  //   // Clean up event listener on component unmount
  //   return () => {
  //     video.removeEventListener("canplay", playVideo);
  //   };
  // }, []);
  return (
    <div className="video-container blur-borders">
      <img src={whitedown} alt="background" className="video-bg" />
      {/* <video
        ref={videoRef}
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      >
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className="dot-container">
        <div className="dot" />
      </div> */}
      <div className="overlay-desktop">
        <h1 className="misty-text">Tuning Temple</h1>
        <div className="logo-container misty-image">
          <img src={logo} alt="logo" className="temple-logo misty-image" />
        </div>
        <button className="book-now-btn" onClick={() => setShowModal(true)}>
          Book Now
        </button>
      </div>
      <div className="overlay-mobile">
        <h1 className="misty-text text-shadow">Tuning Temple</h1>
        {/* {hasTouched && isVideoVisible && (
          <div className={`ani-container ${hideAnimationContainerClass}`}>
            <video className="ani-logo" autoPlay muted onEnded={handleVideoEnd}>
              <source src={anilogo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )} */}
        {/* {!hasTouched && ( */}
        <div className="logo-container misty-image">
          <img src={logo} alt="logo" className="temple-logo misty-image" />
        </div>
        {/* )} */}
        <button
          className="book-now-btn mobile"
          onClick={() => setShowModal(true)}
        >
          Book Now
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              ×
            </button>
            <h2>Contact Us</h2>
            {submitStatus === "success" ? (
              <div className="success-message">
                Message sent successfully! We'll be in touch soon.
              </div>
            ) : submitStatus === "error" ? (
              <div className="error-message">
                There was an error sending your message. Please try again.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={submitStatus === "sending"}
                >
                  {submitStatus === "sending" ? "Sending..." : "Send"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BackgroundVideo;
