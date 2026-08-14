import { process } from "../utils/constants";

const positions = [2, 32, 64, 94];

export default function TimelineView({ step }) {
  const safeStep = Math.min(
    Math.max(step, 0),
    process.length - 1,
  );

  const percentage = positions[safeStep];

  return (
    <main className="process-view">
      <div className="process-line">
        <div
          className="progress"
          style={{ width: `${percentage}%` }}
        />

        {process.slice(0, safeStep).map((item, index) => (
          <i
            key={item[0]}
            style={{ left: `${positions[index]}%` }}
          />
        ))}

        <div
          className="car-token"
          style={{ left: `${percentage}%` }}
        />
      </div>

      <div
        className="process-card"
        style={{
          left: `clamp(21%, ${percentage}%, 78%)`,
        }}
      >
        <b>{process[safeStep][0]}</b>
        <span>{process[safeStep][1]}</span>
      </div>
    </main>
  );
}