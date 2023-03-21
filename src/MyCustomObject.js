import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function MyCustomObject() {
     const gltf = useLoader(GLTFLoader, './model/model.gltf')
     return <primitive object={gltf.scene} />
}
