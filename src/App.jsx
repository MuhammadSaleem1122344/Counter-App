import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="power-card" role="region" aria-label="Higher power counter">
      <div className="power-title">
        <div className="logo-dot">HP</div>
        <div>
          <h2>Higher Power Counter</h2>
          <div className="power-sub">Strong UI with big typography & glowing accents</div>
        </div>
      </div>

      <div className="counter-wrap">
        <div className="counter">
          {count}
          <sup>xp</sup>
        </div>

        <div className="controls" aria-hidden={false}>
          <button
            className="btn btn-primary"
            onClick={() => setCount(prev => prev + 1)}
            aria-label="Increase value"
            title="Increase"
          >
            + Increase
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setCount(prev => Math.max(0, prev - 1))}
            disabled={count === 0}
            aria-label="Decrease value"
            title="Decrease"
          >
            − Decrease
          </button>

          <button
            className="btn btn-reset"
            onClick={() => setCount(0)}
            aria-label="Reset value"
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="note">Tip: Use the ↑ Increase button for a dramatic glowing effect.</div>
    </div>
  );
}

export default App;
