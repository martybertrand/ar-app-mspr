import React, { useRef } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import { ZapparCamera } from '@zappar/zappar-react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function App() {
  const cameraRef = useRef()

  return (
    <Canvas>
      <ZapparCamera ref={cameraRef} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Canvas>
  )

  function Model() {
    const gltfRef = useRef()
    const { gltf } = useLoader(GLTFLoader, './model/model.gltf')

    return <primitive ref={gltfRef} object={gltf.scene} />
  }
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
        
        <MyCustomObject />

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

export default App;


<InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]}>
          <mesh>
            <boxBufferGeometry />
            <meshStandardMaterial color="hotpink" />
          </mesh>
        </InstantTracker>
    <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
*/



