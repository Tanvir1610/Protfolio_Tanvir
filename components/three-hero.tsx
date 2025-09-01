"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, useGLTF } from "@react-three/drei"
import { Suspense } from "react"

function Duck() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return <primitive object={scene} scale={1.2} />
}

export function ThreeHero() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 1.2, 3.5], fov: 50 }}>
        <color attach="background" args={["#0b1020"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
            <Duck />
          </Float>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}
