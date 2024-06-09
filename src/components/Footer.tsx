import x from "../assets/xlogo.png";
import tiktok from "../assets/tiknobg.png";
import youtube from "../assets/yt.png";
import etsy from "../assets/etsnobg.png";
import instalogo from "../assets/instanobg.png";

export function Footer() {
  //get current year
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {year} Tuning Temple</p>
      <a
        href="https://x.com/tuningtemple"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={x} alt="X Logo" />
      </a>
      <a
        href="https://www.tiktok.com/@tuningtemple"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={tiktok} alt="TikTok Logo" />
      </a>
      <a
        href="https://www.instagram.com/tuningtemple/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={instalogo} alt="Instagram Logo" />
      </a>
      <a
        href="https://www.youtube.com/@TuningTemple"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={youtube} alt="YouTube Logo" />
      </a>
      <a
        href="https://www.etsy.com/shop/tuningtemple"
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src={etsy} alt="Etsy Logo" />
      </a>
    </div>
  );
}
