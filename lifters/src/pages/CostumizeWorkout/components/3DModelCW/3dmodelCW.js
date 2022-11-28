import {Stage, PresentationControls, useGLTF} from "@react-three/drei"
import React, { useState,useEffect } from 'react'
import { Canvas, } from '@react-three/fiber'
import CardExercisesPerMuscleCW from "../CardExercisesPerMuscleCW/cardExercisesPerMuscleCW";

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

function HumanModel3DCW(props){

    const [exercises, setExercises] = useState([])

    useEffect(()=>{
        console.log(props.muscles)
        if (props.muscles.length > 0){
            const muscleslist = props.muscles.toString().replaceAll(',', '_')
            console.log(muscleslist)
            fetch(`/rest/exercises/${muscleslist}`, {
                method: 'GET',
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                    if(response.status === 200) {
                        return response.json()
                    } else {
                        alert("No exercises found")
                    }
                }
            ).then(data => {
                setExercises(data)
            })
        }
        else{
            setExercises([])
        }
    },[props.muscles])



    const handleSetMuscle = (name) => {
        if(props.muscles.filter((item) => item === name).length > 0) {
            props.setMuscles(props.muscles.filter((item) => item !== name));
        }
        else {
            const newMuscles = [name,...props.muscles]
            props.setMuscles(newMuscles)
        }
    };
    const handleDelete = (name) => {
        props.setMuscles(props.muscles.filter((item) => item !== name));
    }
    return (
        <div>
            <Canvas dpr={[1,2]} shadows={true} camera={{fov:45}} style={{"position":"absolute" ,"width":"40%", "left":"30%","height":"90%"}}>
                <color attact="background" args={["#ffffff"]}/>
                <PresentationControls speed={3.5} global zoom={.5} polar={[-0.1,Math.PI/4]}>
                    <Stage environment={null}>
                        <Model scale={0.50}/>
                    </Stage>
                    <Muscle name="Bicep" position={[0.008, 0.01, 0.00055]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Chest" position={[0.0025, 0.015, 0.0025]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Triceps" position={[0.0075, 0.012, -0.003]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Leg"  position={[0.004,  -0.005, 0.0024]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Back"  position={[-0.002, 0.0135, -0.004]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Abs"  position={[0, 0.008, 0.0035]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                    <Muscle name="Shoulders"  position={[-0.0075, 0.016, -0.001]} handleSetMuscle={handleSetMuscle} handleDelete={handleDelete} muscles={props.muscles}/>
                </PresentationControls>
            </Canvas>
            <CardExercisesPerMuscleCW exercises={exercises} muscles={props.muscles}/>
        </div>
    )
}

export default HumanModel3DCW