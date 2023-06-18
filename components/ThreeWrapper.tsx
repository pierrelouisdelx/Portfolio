import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { Vector3 } from 'three';

export default function ThreeWrapper() {
    return (
        <Canvas style={{ width: '100vw', height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enablePan={false} enableZoom={false} />
            <MouseFollower />
        </Canvas>
    );
}

const MouseFollower = () => {
    const followerRef = useRef<any>();
    const vec = new Vector3();

    useFrame(({ mouse }) => {
        const x = mouse.x * 5;
        const y = mouse.y * 5;
        followerRef?.current?.position.lerp(vec.set(x, y, 0), 0.05);

        console.log(followerRef?.current?.position);
    });

    return (
        <Box ref={followerRef} position={[0, 0, 0]} args={[1, 1, 1]}>
            <meshStandardMaterial color='red' />
        </Box>
    );
};
