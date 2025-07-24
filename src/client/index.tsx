import React from 'react';
import ReactDOM from 'react-dom/client';
import Cobe from 'cobe';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1 style={{ fontWeight: 600, marginBottom: 10 }}>Raiders Gaming</h1>
      <p style={{ color: '#ccc', marginBottom: 40 }}>
        Competitive Counter-Strike 2 Team — Join our journey!
      </p>

      <div
        style={{
          margin: '0 auto',
          width: 600,
          height: 600,
          maxWidth: '100vw',
        }}
      >
        <Cobe
          style={{ width: 600, height: 600 }}
          options={{
            devicePixelRatio: 2,
            baseColor: [0, 0, 0],
            markerColor: [0, 255, 255],
            glowColor: [0, 255, 255],
            globeGlowRadiusScale: 0.6,
            markerGlowRadiusScale: 0.6,
            initialViewParameters: {
              longitude: 0,
              latitude: 0,
              zoom: 1.5,
            },
          }}
          onPointerDown={() => {}}
          onPointerUp={() => {}}
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
