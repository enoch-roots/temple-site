const ImageBlock = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="image-block fat-blur">
      <img src={src} alt={text} className="image" />
      <div className="overlay">
        <span className="text">{text}</span>
      </div>
    </div>
  );
};

export default ImageBlock;
