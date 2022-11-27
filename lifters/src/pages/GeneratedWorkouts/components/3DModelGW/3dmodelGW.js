import {Stage, PresentationControls, useGLTF} from "@react-three/drei"
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'
import CardMuscleChosenGW from "../CardMuscleChosenGW/cardMuscleChosenGW";

function Model(props){
    const { scene } = useGLTF("/body.glb");
    return <primitive object={scene} {...props}/>
}

function Muscle(props){
    const [hovered, setHover] = useState(false);
    const muscleInMuscles = props.muscles.filter((item) => item === props.name).length > 0
    const handleClick = () => {
        if (muscleInMuscles)
            props.handleDelete(props.name)
        else
            props.handleSetMuscle(props.name);
    }
    return (
        <mesh name={props.name}
              onClick={handleClick}
              onPointerOver={() => setHover(true)}
              onPointerOut={() => setHover(false)}
              position={props.position}
              scale={hovered ?[0.001, 0.001, 0.0008]: [0.0008, 0.0008, 0.0008]}
        >
            <sphereGeometry/>
            <meshBasicMaterial  color={muscleInMuscles ? 'red' : 'green'}/>
        </mesh>
    )
}

function HumanModel3DGW(props){
    return (
        <div>
            <Canvas dpr={[1,2]} shadows={true} camera={{fov:45}} style={{"position":"absolute" ,"width":"40%", "height":"90%"}}>
                <color attact="background" args={["#ffffff"]}/>
                <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
                    <Stage environment={null}>
                        <Model scale={0.50}/>
                    </Stage>
                    <Muscle name="Bicep" position={[0.008, 0.01, 0.00055]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Chest" position={[0.0025, 0.015, 0.0025]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Triceps" position={[0.0075, 0.012, -0.003]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Leg"  position={[0.004,  -0.005, 0.0024]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Back"  position={[-0.002, 0.0135, -0.004]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Abs"  position={[0, 0.008, 0.0035]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                    <Muscle name="Shoulders"  position={[-0.0075, 0.016, -0.001]} handleSetMuscle={props.handleSetMuscle} handleDelete={props.handleDelete} muscles={props.muscles}/>
                </PresentationControls>
            </Canvas>
            <CardMuscleChosenGW handleDelete={props.handleDelete} muscles={props.muscles}/>
        </div>
    )
}

export default HumanModel3DGW