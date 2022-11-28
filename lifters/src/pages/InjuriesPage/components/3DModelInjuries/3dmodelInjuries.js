import {Stage, PresentationControls, useGLTF} from "@react-three/drei"
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'

function Model(props){
    const { scene } = useGLTF("/body.glb");
    return <primitive object={scene} {...props}/>
}

function Muscle(props){
    const [hovered, setHover] = useState(false);
    const handleClick = () => {
        if (props.name === props.muscle)
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
            <meshBasicMaterial  color={props.name === props.muscle ? 'red' : 'green'}/>
        </mesh>
    )
}

function HumanModel3DInjuries(props){

    const handleSetMuscle = (name) => {
        props.setMuscle(name)
    };

    const handleDelete = (name) => {
        props.setMuscle("");
    }
    return (
        <Canvas dpr={[1,2]} shadows={true} camera={{fov:45}} style={{"position":"absolute" ,"width":"40%", "height":"90%"}}>
            <color attact="background" args={["#ffffff"]}/>
            <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
                <Stage environment={null}>
                    <Model scale={0.50}/>
                </Stage>
                <Muscle name="Bicep" position={[0.008, 0.01, 0.00055]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Chest" position={[0.0025, 0.015, 0.0025]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Triceps" position={[0.0075, 0.012, -0.003]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Leg"  position={[0.004,  -0.005, 0.0024]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Back"  position={[-0.002, 0.0135, -0.004]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Abs"  position={[0, 0.008, 0.0035]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
                <Muscle name="Shoulders"  position={[-0.0075, 0.016, -0.001]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscle={props.muscle}/>
            </PresentationControls>
        </Canvas>
    )
}

export default HumanModel3DInjuries