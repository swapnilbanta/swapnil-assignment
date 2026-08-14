import { laps } from "../utils/constants";

export default function Track({ activeLap = 2 }) {
  return (
    <section className="track" aria-label="Track progress">
      <svg viewBox="0 0 1000 150" preserveAspectRatio="none">
        <defs>
          <linearGradient
            id="trackFill"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop stopColor="#6a1014" stopOpacity=".55" />
            <stop
              offset="1"
              stopColor="#120607"
              stopOpacity=".85"
            />
          </linearGradient>
        </defs>

        <path d="M0 90 C90 74 150 105 230 78 S400 88 500 60 S680 80 770 35 S900 30 1000 10" />

        <path
          className="fill"
          d="M0 90 C90 74 150 105 230 78 S400 88 500 60 S680 80 770 35 S900 30 1000 10 L1000 150 L0 150Z"
        />
      </svg>

      <div className="lap-list">
        {laps.map((lap, index) => (
          <div
            key={lap[0]}
            className={`lap ${
              index === activeLap ? "current" : ""
            }`}
          >
            <i />
            <b>{lap[0]}</b>
            <span>{lap[1]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}