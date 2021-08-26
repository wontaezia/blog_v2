import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useWindowSize } from '@hooks';
import { EffectShaderMaterial } from '@components/blog/scene/materials';

function Effects() {
  const composer = useRef(null);
  const shaderRef = useRef(null);
  const { scene, gl, size, camera } = useThree();
  const { width, height } = useWindowSize();
  const effectShader = new EffectShaderMaterial();

  useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size],
  );
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass
        ref={shaderRef}
        attachArray="passes"
        args={[effectShader]}
        scene={scene}
        camera={camera}
        width={width}
        height={height}
        renderToScreen
      />
    </effectComposer>
  );
}

export default Effects;
