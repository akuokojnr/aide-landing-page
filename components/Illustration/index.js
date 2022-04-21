import * as THREE from "three";

import { Canvas, useThree, useFrame, createPortal } from "@react-three/fiber";
import { OrbitControls, Box, Text } from "@react-three/drei";
import { useRef, useLayoutEffect, useState, useMemo } from "react";

import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  max-width: 70rem;
  min-height: 70rem;
`;

const TextCube = ({ textRef, children }) => {
  const [boxGeom, setBoxGeom] = useState();

  const boxRef = useRef();
  const { camera } = useThree();

  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color();

    const target = new THREE.WebGLMultipleRenderTargets(2048, 2048, 1);

    return [scene, target];
  }, []);

  useFrame(({ gl }) => {
    gl.setRenderTarget(target);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  useFrame(({ camera }) => {
    textRef.current.quaternion.copy(camera.quaternion);
  });

  useLayoutEffect(() => {
    if (!boxRef?.current) {
      return;
    }

    setBoxGeom(boxRef.current.geometry);
  }, []);

  return (
    <>
      {createPortal(children, scene)}
      <Box args={[4, 4, 4]} ref={boxRef}>
        {Array.from({ length: 6 }, (_, idx) =>
          idx == 0 ? (
            <meshBasicMaterial
              key={`texture-${idx}`}
              attach={`material-${idx}`}
              opacity={0.0}
              transparent
            />
          ) : (
            <meshBasicMaterial
              map={target.texture[0]}
              key={`texture-${idx}`}
              attach={`material-${idx}`}
              toneMapped={false}
            />
          )
        )}
      </Box>
      <lineSegments>
        <edgesGeometry args={[boxGeom]} />
        <meshBasicMaterial color="black" />
      </lineSegments>
    </>
  );
};

const Illustration = () => {
  const textRef = useRef();

  return (
    <div css={[STYLES_CONTAINER]}>
      <Canvas
        css={STYLES_CONTAINER}
        orthographic={true}
        camera={{ zoom: 60, position: [10, 10, 10] }}
      >
        <OrbitControls enableZoom={false} />
        <primitive object={new THREE.AxesHelper(10)} />

        <TextCube textRef={textRef}>
          <Text
            ref={textRef}
            color="black"
            fontSize={1.8}
            letterSpacing={0.15}
            textAlign="left"
            characters="recursive"
            maxWidth={10}
            anchorX="center"
            anchorY="middle"
          >
            recursive recursive recursive recursive recursive
          </Text>
        </TextCube>
      </Canvas>
    </div>
  );
};

export default Illustration;
