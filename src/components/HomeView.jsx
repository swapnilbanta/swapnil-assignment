export default function HomeView({ performance = false }) {
  return (
    <main className="center-view home-view">
      {performance ? (
        <>
          <div className="stats left">
            <b>352</b>
            <small>Top Speed</small>

            <b>620</b>
            <small>Power (HP)</small>

            <b>780</b>
            <small>Torque</small>
          </div>

          <div className="car-circle performance-car" />

          <div className="stats right">
            <b>3.2 Sec</b>
            <small>0–100 KM/H</small>

            <b>2,450 KM</b>
            <small>Oil Change</small>

            <b>520 KM</b>
            <small>Range</small>
          </div>
        </>
      ) : (
        <div className="car-circle red-car" />
      )}
    </main>
  );
}