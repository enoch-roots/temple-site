import backgroundImage from "../assets/purp2.png";

const FullScreenBackground = () => {
  return (
    <div className="full-screen-background blur-borders blur-top">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="text-box">
        <h1>Purpose</h1>
        <p>
          The Tuning Temple is an ephemeral gateway to new sensory experiences,
          designed to harmonize mind and body through innovative
          biofeedback-controlled sensory modulation. Our purpose is to elevate
          the human experience, crafting unique, unforgettable events that
          redefine the boundaries between art, sound, and the human psyche.
        </p>
      </div>
    </div>
  );
};

export default FullScreenBackground;
