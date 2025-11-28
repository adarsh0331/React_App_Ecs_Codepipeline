import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h1>Welcome to My React Real-Time App!</h1>
      <p>Current Time:</p>
      <div className="clock">{time.toLocaleTimeString()}</div>
    </div>
  );
}

export default App;
