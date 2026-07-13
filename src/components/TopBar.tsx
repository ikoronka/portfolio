import LanguageSelector from "./LanguageSelector";
import "../styles/index.css";
import logo from "../assets/ikoronka.svg";

export default function TopBar() {
  return (
    <div id="top">
      <div className="logo-container">
        <img id="logo" src={logo} alt="Logo" />
      </div>
      <div className="top-right">
        <LanguageSelector />
      </div>
    </div>
  );
}
