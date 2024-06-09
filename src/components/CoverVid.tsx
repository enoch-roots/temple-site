import bgvid from "../assets/movie4.mp4";

export function CoverVid({
  hasTouched,
  handleTouch,
  isVideoVisible,
}: {
  hasTouched: boolean;
  handleTouch: () => void;
  isVideoVisible: boolean;
}) {
  const hideClass = hasTouched && !isVideoVisible ? "hide" : "";

  return (
    <div className={`${hideClass} covervid`} onClick={handleTouch}>
      <video autoPlay muted loop id="myVideo">
        <source src={bgvid} type="video/mp4" />
      </video>
    </div>
  );
}
