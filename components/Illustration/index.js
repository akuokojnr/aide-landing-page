import * as THREE from "three";

import positions from "./text-positions";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Box, Text } from "@react-three/drei";
import { useRef, useLayoutEffect, useState, useMemo } from "react";

import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  max-width: 70rem;
  min-height: 70rem;
`;

const Char = ({ letter, ...rest }) => {
  const ref = useRef();

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
  });

  return (
    <Text ref={ref} {...rest}>
      {letter}
    </Text>
  );
};

const Texts = () => {
  return (
    <>
      <Box args={[4, 4, 4]}>
        <meshBasicMaterial color="yellow" wireframe />
      </Box>

      {positions.map((item, index) => (
        <Char
          key={`char-${item.letter}-${index}`}
          color="black"
          fontSize={0.8}
          position={item.pos}
          letter={item.letter}
        />
      ))}
    </>
  );
};

const Illustration = () => {
  const controlsRef = useRef();

  return (
    <div css={[STYLES_CONTAINER]}>
      <Canvas
        css={STYLES_CONTAINER}
        orthographic={true}
        camera={{ zoom: 60, position: [10, 10, 10] }}
      >
        <OrbitControls enableZoom={false} ref={controlsRef} />
        <primitive object={new THREE.AxesHelper(10)} />

        <Texts controlsRef={controlsRef} />
      </Canvas>
    </div>
  );
};

export default Illustration;
