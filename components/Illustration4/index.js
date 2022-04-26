import * as THREE from "three";

import Scene from "./Scene";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  height: 100%;
  max-width: 70rem;
`;

const Illustration = () => {
  return (
    <div css={STYLES_CONTAINER}>
      <Canvas dpr={[1, 2]} shadows>
        <Scene />
        <OrbitControls
          enableZoom={false}
          /* enablePan={false} */
          /* maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} */
        />
      </Canvas>
    </div>
  );
};

export default Illustration;
