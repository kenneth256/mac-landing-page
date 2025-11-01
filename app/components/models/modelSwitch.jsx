'use client';
import { PresentationControls } from '@react-three/drei';
import Macbook3 from './Scene';
import { useRef } from 'react';
import { config } from 'process';

const ModelSwitcher = ({ scale, isMobile }) => {
  const showLargeModel = scale === 0.08 || scale === 0.05;
  const LargeModel = useRef();
  const SmallModel = useRef();
  
  const controlConfig = {
    snap: true,  
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 170, friction: 26 },
  };

  return (
    <>
      
        <PresentationControls {...controlConfig}>
          <group ref={LargeModel}> 
            <Macbook3 scale={isMobile ? 0.05 : 0.08} />
          </group>
        </PresentationControls>
        <PresentationControls {...controlConfig}>
          <group ref={SmallModel}> 
            <Macbook3 scale={isMobile ? 0.03 : 0.05} />
          </group>
        </PresentationControls>
    
    </>
  );
};

export default ModelSwitcher;