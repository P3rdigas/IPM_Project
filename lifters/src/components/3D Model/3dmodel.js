import {useGLTF,Stage, PresentationControls} from "@react-three/drei"
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef,Suspense, useState } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { Preload } from '@react-three/drei'




function Model(props){
    const { scene } = useGLTF("/body.glb");
    return <primitive object={scene} {...props}/>
}

function Muscle(props){
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    return (
        <mesh name="bicep"
              onClick={(eventClicked) => setActive(!active)}
              onPointerOver={(event) => setHover(true)}
              onPointerOut={(event) => setHover(false)}
              position={props.position}
              scale={hovered ?[0.0008, 0.0008, 0.0008]: [0.00065, 0.00065, 0.00065]}
        >
            <sphereGeometry/>
            <meshBasicMaterial  color={active ? 'red' : 'green'} />
        </mesh>
    )
}

function HumanModel3D(){
    return (
        <Canvas dpr={[1,2]} shadows={true} camera={{fov:45}} style={{"position":"absolute" ,"width":"40%"}}>
            <color attact="background" args={["#ffffff"]}/>
            <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
                <Stage environment={null}>
                    <Model scale={0.50}/>
                </Stage>
                <Muscle name="bicep" position={[0.008, 0.01, 0.00055]}/>
                <Muscle name="chest" position={[0.0025, 0.015, 0.0025]}/>
                <Muscle name="triceps" position={[0.0075, 0.012, -0.003]}/>
                <Muscle name="leg"  position={[0.004,  -0.005, 0.0024]}/>
                <Muscle name="back"  position={[-0.002, 0.0135, -0.004]}/>
                <Muscle name="abs"  position={[0, 0.008, 0.0035]}/>
                <Muscle name="shoulders"  position={[-0.0075, 0.016, -0.001]}/>
            </PresentationControls>
        </Canvas>
    )
}

export default HumanModel3D