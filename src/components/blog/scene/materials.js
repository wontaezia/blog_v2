import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'glslify';

export const ImageShaderMaterial = shaderMaterial(
  {
    time: 0.0,
    uImage: new THREE.Texture(),
    hover: new THREE.Vector2(0.5, 0.5),
    hoverState: 0.0,
  },
  glsl`
    uniform float time;
    uniform vec2 hover;
    uniform float hoverState;

    varying float vNoise;
    varying vec2 vUv;

    void main() {
        vec3 newPosition = position;
        float dist = distance(uv, hover);

        newPosition.z += hoverState * 10.0 * sin(dist * 10.0 + time * 5.0);
        vNoise = hoverState * sin(dist * 20.0 - time);
        vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  glsl`
    uniform sampler2D uImage;
    uniform float time;
    uniform float hoverState;
    
    varying float vNoise;
    varying vec2 vUv;
    
    void main() {
        vec2 newUV = vUv;
    
        vec4 imgTexture = texture2D(uImage, newUV);
    
        float displace = (imgTexture.r + imgTexture.g + imgTexture.b) * 0.1;
    
        vec4 t1 = texture2D(uImage, vec2(newUV.x, newUV.y + hoverState * (displace * 0.1)));
        vec4 t2 = texture2D(uImage, vec2(newUV.x, newUV.y + (1.0 - hoverState) * (displace * 0.1)));
    
        gl_FragColor = mix(t1, t2, hoverState);
        gl_FragColor.rgb +=  0.03 * vec3(vNoise);
    }
  `,
);

export const EffectShaderMaterial = shaderMaterial(
  {
    tDiffuse: null,
    scrollSpeed: null,
  },
  glsl`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl`
    uniform sampler2D tDiffuse;
    uniform float scrollSpeed;
    varying vec2 vUv;

    void main() {
      vec2 newUV = vUv;
      float area = smoothstep(0.4, 0.0, vUv.y);

      area = pow(area, 3.0);
      newUV.x -= (vUv.x - 0.5) * 0.1 * area;
      gl_FragColor = texture2D(tDiffuse, newUV);
    }
  `,
);
