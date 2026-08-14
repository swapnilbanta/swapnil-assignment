export default function DeliveryView({ step, onHome }) {
  return (
    <main className="delivery-view">
      {step < 3 ? (
        <div className="delivery-content">
          <div className="delivery-car blue-car" />

          <div className={`truck step-${step}`}>
            <span>VEHICLE DELIVERY</span>
          </div>
        </div>
      ) : (
        <div className="thanks">
          <h2>THANK YOU</h2>

          <button type="button" onClick={onHome}>
            Home
          </button>
        </div>
      )}
    </main>
  );
}