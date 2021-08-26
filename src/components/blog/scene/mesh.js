import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { useThree, useFrame, extend } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useWindowSize } from '@hooks';
import { ImageShaderMaterial } from '@components/blog/scene/materials';

extend({
  ImageShaderMaterial,
});

function Mesh({ img }) {
  const [sizes, setSizes] = useState({});
  const [position, setPosition] = useState({});
  const materialRef = useRef(null);
  const { width, height } = useWindowSize();
  const { scene, camera } = useThree();
  const texture = useTexture(img.src);
  const raycaster = new THREE.Raycaster();

  useFrame(({ clock }) => (materialRef.current.time = clock.getElapsedTime()));

  const onMouseEnter = (e) => {
    gsap.to(materialRef.current.uniforms.hoverState, {
      duration: 1,
      value: 1,
      ease: 'Power2.easeOut',
    });
  };

  const onMouseLeave = (e) => {
    gsap.to(materialRef.current.uniforms.hoverState, {
      duration: 1,
      value: 0,
      ease: 'Power2.easeOut',
    });
  };

  const onMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera({ x, y }, camera);
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
      const obj = intersects[0].object;
      obj.material.uniforms.hover.value = intersects[0].uv;
    }
  };

  const onScroll = () => {
    const bounds = img.getBoundingClientRect();

    setPosition({
      left: bounds.left,
      top: bounds.top,
    });
  };

  const getSizes = () => {
    const bounds = img.getBoundingClientRect();
    setSizes({
      width: bounds.width,
      height: bounds.height,
    });
    setPosition({
      left: bounds.left,
      top: bounds.top,
    });
  };

  useEffect(() => {
    getSizes();

    img.addEventListener('mouseenter', onMouseEnter);
    img.addEventListener('mouseleave', onMouseLeave);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', getSizes);
    window.addEventListener('scroll', onScroll);

    return () => {
      img.removeEventListener('mouseenter', onMouseEnter);
      img.removeEventListener('mouseleave', onMouseLeave);

      window.addEventListener('resize', getSizes);
      window.addEventListener('scroll', onScroll);
      window.addEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <mesh
      scale={[sizes.width, sizes.height, 1]}
      position={[
        position.left - width / 2 + sizes.width / 2,
        -position.top + height / 2 - sizes.height / 2,
        1,
      ]}
    >
      <planeGeometry args={[1, 1, 10, 10]} />
      <imageShaderMaterial
        ref={materialRef}
        attach="material"
        uImage={texture}
      />
    </mesh>
  );
}

export default Mesh;
