import * as THREE from "three";

import { textPositions, vertices } from "./positions";

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
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log(boxRef);
  }, []);

  return (
    <>
      <Box args={[4, 4, 4]} ref={boxRef}>
        <meshBasicMaterial
          color={["red", "yellow", "blue", "green", "yellow", "blue"]}
          vertexColors
        />
      </Box>

      {textPositions.map((item, index) => (
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
