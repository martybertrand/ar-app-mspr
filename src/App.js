import { render } from 'react-dom';
import React, { useRef } from 'react';
import './App.css'
import { ZapparCamera, ImageTracker, ZapparCanvas, BrowserCompatibility } from '@zappar/zappar-react-three-fiber';

export default function App() {
  // Setup a camera ref, as we need to pass it to the tracker.
  const camera = useRef();
  // Use Webpack to load in target file
  const targetFile = require('./Logo.png').default;
  return (
    <BrowserCompatibility>
    <ZapparCanvas>
      {/* Setup Zappar Camera, setting camera object's ref */}
      <ZapparCamera ref={camera} />
       {/* Setup Image Tracker, passing our target file and camera ref */}
      <ImageTracker targetImage={targetFile} camera={camera}>
      {/* Create a normal pink sphere to be tracked to the target */}
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </ImageTracker>
      {/* Normal directional light */}
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
    </ZapparCanvas>
    </BrowserCompatibility>
  );
}
render(<App />, document.getElementById('root'));