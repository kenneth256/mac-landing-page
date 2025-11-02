'use client';
import { PresentationControls } from '@react-three/drei';
import Macbook3 from './Scene';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Macbook from './scene2';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 10;

const fadeMesh = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.transparent = true;
        gsap.to(child.material, {
          opacity: opacity, 
          duration: ANIMATION_DURATION,
        });
      
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  
    gsap.to(group.position, { 
      x, 
      duration: ANIMATION_DURATION,
      
    })
  
};

const ModelSwitcher = ({ scale, materialColor, isMobile }) => {
const showLargeModel = scale === 0.08 || scale === 0.06;
  const LargeModel = useRef();
  const SmallModel = useRef();
  const isInitialized = useRef(false);
  
  console.log('Current scale:', scale, 'Show 16" model:', showLargeModel);
  
  const controlConfig = {
    snap: true,     
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 170, friction: 26 },
  };


  useEffect(() => {
      if (showLargeModel) {
       
        LargeModel.current.position.x = 0;
        SmallModel.current.position.x = -OFFSET_DISTANCE;
        fadeMesh(LargeModel.current, 1);
        fadeMesh(SmallModel.current, 0);
      } else {
     
        LargeModel.current.position.x = -OFFSET_DISTANCE;
        SmallModel.current.position.x = 0;
        fadeMesh(LargeModel.current, 0);
        fadeMesh(SmallModel.current, 1);
      }
      
    
  }, [showLargeModel, scale]);

 
  useGSAP(() => {
    if (!isInitialized.current) return;
    
    console.log('Animating to:', showLargeModel ? '16" model' : '14" model');
    
    if (showLargeModel) {
      
      moveGroup(LargeModel.current, 0);
      moveGroup(SmallModel.current, -OFFSET_DISTANCE);
      fadeMesh(LargeModel.current, 1);
      fadeMesh(SmallModel.current, 0);
    } else {
      
      moveGroup(LargeModel.current, OFFSET_DISTANCE);
      moveGroup(SmallModel.current, 0);
      fadeMesh(LargeModel.current, 0);
      fadeMesh(SmallModel.current, 1);
    }
  }, [scale, showLargeModel]);

  return (
    <>  
    <PresentationControls {...controlConfig}>
      <group ref={LargeModel}> 
        <Macbook3 scale={isMobile ? scale - 0.03 : scale} color={materialColor} />
      </group>
    </PresentationControls>
    <PresentationControls {...controlConfig}>
      <group ref={SmallModel}>
        <Macbook scale={isMobile ? 0.03 : 0.06} color={materialColor} />
      </group>
    </PresentationControls>  
    </>
  );
};

export default ModelSwitcher;