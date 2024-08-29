import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.2}>
                <Overlay />
                <Office />
            </ScrollControls>
        </>
    );
};
