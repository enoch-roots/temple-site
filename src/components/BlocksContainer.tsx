import pink from "../assets/pink.png";
import purp3 from "../assets/purp3.png";
import purple from "../assets/purple.png";
import whitedown from "../assets/whitedown.png";
import glow from "../assets/glow.png";
import rise from "../assets/rise.png";
import redout from "../assets/redout.png";

import ImageBlock from "./ImageBlock";

const images = [
  { src: whitedown, text: "Immerse" },
  { src: rise, text: "Imagine" },
  { src: purple, text: "Align" },
  { src: purp3, text: "Design" },
  { src: glow, text: "Bespoke" },
  { src: pink, text: "Behold" },
];

const BlocksContainer = () => {
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <ImageBlock key={index} src={image.src} text={image.text} />
      ))}
    </div>
  );
};

export default BlocksContainer;
