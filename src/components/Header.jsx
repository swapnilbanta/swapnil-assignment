import {
  ArrowLeft,
  Check,
  Download,
  Moon,
  Share2,
  Sun,
} from "lucide-react";

import RoundButton from "./RoundButton";

export default function Header({
  onBack,
  onComplete,
  light,
  setLight,
}) {
  return (
    <>
      <div className="logo">
        <img src="/assets/car-logo.png" alt="Car Logo" />
      </div>

      <RoundButton
        label="Go back"
        onClick={onBack}
        className="back"
      >
        <ArrowLeft />
      </RoundButton>

      <div className="theme">
        <button
          type="button"
          className={light ? "selected" : ""}
          aria-label="Use light theme"
          onClick={() => setLight(true)}
        >
          <Sun />
        </button>

        <button
          type="button"
          className={!light ? "selected" : ""}
          aria-label="Use dark theme"
          onClick={() => setLight(false)}
        >
          <Moon />
        </button>
      </div>

      <div className="actions">
        <RoundButton label="Download">
          <Download />
        </RoundButton>

        <RoundButton label="Share">
          <Share2 />
        </RoundButton>

        <RoundButton
          label="Continue"
          active
          onClick={onComplete}
        >
          <Check />
        </RoundButton>
      </div>
    </>
  );
}