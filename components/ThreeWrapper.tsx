import React, { useRef, useEffect } from 'react';
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function MouseFollower() {
    const followerRef = useRef();

    const { camera, gl } = useThree();
    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.enabled = false;
        controls.enablePan = false;
        controls.enableZoom = false;

        return () => {
            controls.dispose();
        };
    }, [camera, gl]);

    useFrame(() => {
        const { clientX, clientY } = followerRef.current.mouse;
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;
        followerRef.current.position.x = x * 5;
        followerRef.current.position.y = y * 5;
    });

    return (
        <mesh ref={followerRef} position={[0, 0, 0]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='red' />
        </mesh>
    );
}

export default function ThreeWrapper() {
    return (
        <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MouseFollower />
        </Canvas>
    );
}
