import backgroundImage from "../assets/red.png";

const FullScreenBackground = () => {
  return (
    <div className="dual-screen-background blur-borders">
      <img
        src={backgroundImage}
        alt="Background"
        className="background-image"
      />
      <div className="text-box push-up">
        <h1 className="left">Experience</h1>
        <p className="left">
          Each Tuning Temple installation offers a high-class psychedelic zen
          den vibe, blending art, technology, and human consciousness. Utilizing
          our Quantum Qube, sound-reactive environments, and the principle of
          sympathetic resonance, we guide visitors through auditory, visual, and
          bio-haptic stimulation to explore harmonious states of awareness and
          fine-tune their inner ohm.
        </p>
      </div>
      <div className="text-box push-down">
        <h1 className="right">Ethos</h1>
        <p className="right">
          At the core of our ethos is the principle of sympathetic resonance,
          where harmonic vibrations, ambient soundscapes, and deep bass
          resonators synchronize with mesmerizing LED patterns. This interplay
          aims to induce brainwave entrainment, guiding visitors to profound
          transcendental states akin to those experienced with psychedelic
          compounds, yet achieved entirely through sensory stimulation in
          harmony with the meditative mind.
        </p>
      </div>
    </div>
  );
};

export default FullScreenBackground;
