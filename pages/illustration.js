import * as THREE from "three";

import Scene from "components/Illustration/Scene";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  height: 100vh;
  background: #f0f0f0;
`;

const Illustration = () => {
  return (
    <div css={STYLES_CONTAINER}>
      <Canvas dpr={[1, 2]}>
        <Scene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Illustration;
