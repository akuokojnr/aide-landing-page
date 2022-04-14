import * as THREE from "three";

import { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  max-width: 70rem;
  min-height: 70rem;
`;

const CameraController = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.enableZoom = false;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return null;
};

const Illustration = () => {
  return (
    <div>
      <Canvas css={STYLES_CONTAINER} orthographic={true} camera={{ zoom: 50 }}>
        <CameraController />
        <ambientLight intensity={0.6} color="white" />
        <directionalLight
          color="white"
          intensity={0.6}
          position={[200, 500, 300]}
        />
        <primitive object={new THREE.AxesHelper(10)} />
        <mesh>
          <boxGeometry args={[5, 5, 5]} />
          <meshPhongMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Illustration;
