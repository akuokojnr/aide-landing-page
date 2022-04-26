import * as THREE from "three";

import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
  Text,
  Sphere,
} from "@react-three/drei";
import { useFrame, createPortal } from "@react-three/fiber";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useState, useRef, useMemo } from "react";

const Embeddings = () => {
  const [points] = useState(() => {
    const n = 3.5;
    return Array.from({ length: n * n * n }, () => {
      return [
        THREE.MathUtils.randFloatSpread(0.8),
        THREE.MathUtils.randFloatSpread(0.8),
        THREE.MathUtils.randFloatSpread(0.8),
      ];
    });
  });

  return (
    <>
      {points.map((item, index) => (
        <Sphere key={`point-${index}`} args={[0.05, 20, 20]} position={item}>
          <meshPhysicalMaterial color="blue" />
        </Sphere>
      ))}
    </>
  );
};

const TextTexture = ({ children, scene, target, textRef }) => {
  useFrame(({ gl, camera }) => {
    gl.setRenderTarget(target);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  useFrame(({ camera }) => {
    textRef.current.quaternion.copy(camera.quaternion);
  });

  return <>{createPortal(children, scene)}</>;
};

const Scene = () => {
  const light = useRef();
  const cube = useRef();
  const textRef = useRef();

  const [hovered, setHovered] = useState(false);

  const [{ ambient, env, coat, transmission, envMap }] = useSpring(
    {
      ambient: 0.5,
      env: 1,
      envMap: hovered ? 0.2 : 1,
      coat: 1,
      transmission: hovered ? 1 : 0,
      config: { tension: 320 },
    },
    [hovered]
  );

  useFrame((state) => {
    if (cube.current) {
      cube.current.position.x = THREE.MathUtils.lerp(
        cube.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );

      cube.current.position.y = THREE.MathUtils.lerp(
        cube.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 +
          (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color();

    const target = new THREE.WebGLMultipleRenderTargets(2048, 2048, 1);

    return [scene, target];
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[2, 2, 2]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <group ref={cube}>
        <a.mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          rotation={[0, 0, 0.7]}
        >
          <boxBufferGeometry args={[1.3, 1.3, 1.3]} />
          <a.meshPhysicalMaterial
            map={target.texture[0]}
            color="white"
            envMapIntensity={envMap}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.1}
            roughness={0.1}
            transmission={transmission}
            thickness={0.1}
          />
        </a.mesh>
        <Embeddings />
      </group>

      <Environment preset="warehouse" />
      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -1.4, 0]}
        opacity={0.8}
        width={3.8}
        height={3.8}
        blur={1.3}
        far={2.6}
      />

      <TextTexture textRef={textRef} scene={scene} target={target}>
        <Text
          ref={textRef}
          color="black"
          fontSize={1.3}
          letterSpacing={0.15}
          textAlign="left"
          characters="recursive"
          maxWidth={10}
          anchorX="center"
          anchorY="middle"
          fillOpacity={hovered ? 0 : 1}
        >
          recursive
        </Text>
      </TextTexture>
    </>
  );
};

export default Scene;
