import { Suspense } from 'react';
import { useWindowSize } from '@hooks';
import { Canvas } from '@react-three/fiber';
import Mesh from '@components/blog/scene/mesh';

function Scene({ images }) {
  const { width, height } = useWindowSize();

  return (
    <Canvas
      camera={{
        fov: 2 * Math.atan(height / 2 / 600) * (180 / Math.PI),
        aspect: width / height,
        near: 100,
        far: 2000,
        position: [1, 1, 600],
      }}
    >
      <Suspense fallback={null}>
        {images.map((img, index) => (
          <Mesh key={`${img.src + index}`} img={img} />
        ))}
      </Suspense>
    </Canvas>
  );
}

export default Scene;
