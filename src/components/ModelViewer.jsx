import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/models/alanwalker.glb'); // 👉 put your model here
  return <primitive object={gltf.scene} scale={2} />;
};

const ModelViewer = () => {
  return (
    <div className="w-full h-[80vh] md:h-[90vh]">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <Model />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
