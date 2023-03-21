import { ZapparCamera, ZapparCanvas } from "@zappar/zappar-react-three-fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React from 'react'


export default function App() {
  
  const gltf = useLoader(GLTFLoader, './model/model.gltf');

    return (
      <ZapparCanvas>
        <ZapparCamera>
        <primitive object={gltf.scene} />
      </ZapparCamera>
      </ZapparCanvas>
      
    )
}


/*import React, { useState } from 'react';
import {
 ZapparCamera, InstantTracker, ZapparCanvas, BrowserCompatibility, ImageTracker
} from '@zappar/zappar-react-three-fiber';
import MyCustomObject from './MyCustomObject';

function App() {
  const [placementMode, setPlacementMode] = useState(true);
  return (
    <>
      <BrowserCompatibility />
      <ZapparCanvas>
        <ZapparCamera />
        
        <ImageTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
            <MyCustomObject/>
        </ImageTracker>
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />

      </ZapparCanvas>
      <div
        id="zappar-button"
        role="button"
        onKeyPress={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
        tabIndex={0}
        onClick={() => { setPlacementMode(((currentPlacementMode) => !currentPlacementMode)); }}
      >
        Tap here to
        {placementMode ? ' place ' : ' pick up '}
        the object
      </div>
    </>
  );
}

export default App;*/