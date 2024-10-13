import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState({ top: '50%', left: '50%' });

  const handleMouseMove = (e) => {
    const button = document.getElementById('movingButton');
    const rect = button.getBoundingClientRect();
    const distance = 50; // distance to move the button away

    if (
      e.clientX > rect.left - distance &&
      e.clientX < rect.right + distance &&
      e.clientY > rect.top - distance &&
      e.clientY < rect.bottom + distance
    ) {
      const newTop = Math.random() * (window.innerHeight - rect.height);
      const newLeft = Math.random() * (window.innerWidth - rect.width);
      setPosition({ top: newTop, left: newLeft });
    }
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <h1>Hello World!</h1>
      <button
        id="movingButton"
        style={{
          position: 'absolute',
          top: position.top,
          left: position.left,
          transform: 'translate(-50%, -50%)',
        }}
      >
        Click here
      </button>
    </div>
  );
}

export default App;