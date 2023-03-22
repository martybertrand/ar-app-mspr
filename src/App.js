import React, { useState } from 'react';
import { ZapparCamera, InstantTracker, ZapparCanvas, BrowserCompatibility } from '@zappar/zappar-react-three-fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const [placementMode, setPlacementMode] = useState(true);
  const model = useLoader(GLTFLoader, '/model/test.gltf');

  return (
  <>
       <BrowserCompatibility />
       <ZapparCanvas>
         <ZapparCamera />
         <InstantTracker>
         <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

           <primitive object={model.scene} position={[0, 0, -5]} scale={[100, 100, 100]}/>
        </InstantTracker>
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

 /*
<mesh>
             <boxBufferGeometry />
             <meshStandardMaterial color="hotpink" />
           </mesh>
 */