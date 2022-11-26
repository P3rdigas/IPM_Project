import {Stage, PresentationControls, useGLTF} from "@react-three/drei"
import React, { useState } from 'react'
import { Canvas, } from '@react-three/fiber'

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

function HumanModel3DInjuries(){
    const [muscles, setMuscles] = useState([])
    const handleSetMuscle = (name) => {
        if(muscles.filter((item) => item === name).length > 0) {
            setMuscles(muscles.filter((item) => item !== name));
        }
        else {
            const newMuscles = [name,...muscles]
            setMuscles(newMuscles)
        };
    };
    const handleDelete = (name) => {
        setMuscles(muscles.filter((item) => item !== name));
    }
    return (
        <Canvas dpr={[1,2]} shadows={true} camera={{fov:45}} style={{"position":"absolute" ,"width":"40%", "height":"90%"}}>
            <color attact="background" args={["#ffffff"]}/>
            <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
                <Stage environment={null}>
                    <Model scale={0.50}/>
                </Stage>
                <Muscle name="Bicep" position={[0.008, 0.01, 0.00055]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Chest" position={[0.0025, 0.015, 0.0025]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Triceps" position={[0.0075, 0.012, -0.003]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Leg"  position={[0.004,  -0.005, 0.0024]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Back"  position={[-0.002, 0.0135, -0.004]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Abs"  position={[0, 0.008, 0.0035]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
                <Muscle name="Shoulders"  position={[-0.0075, 0.016, -0.001]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={muscles}/>
            </PresentationControls>
        </Canvas>
    )
}

export default HumanModel3DInjuries