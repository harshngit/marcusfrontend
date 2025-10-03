import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const cursorX = useSpring(mouseX, { stiffness: 300, damping: 30, mass: 0.4 });
    const cursorY = useSpring(mouseY, { stiffness: 300, damping: 30, mass: 0.4 });

    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const role = target.getAttribute('role');
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.tagName === 'INPUT' ||
                target.tagName === 'SELECT' ||
                target.tagName === 'TEXTAREA' ||
                role === 'button' ||
                role === 'link';
            setIsPointer(isInteractive);
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseover', handleOver as any);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseover', handleOver as any);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
                style={{ translateX: cursorX, translateY: cursorY }}
            >
                <div className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${isPointer ? 'w-8 h-8 bg-cyan-400/20 ring-2 ring-cyan-400/50' : 'w-6 h-6 bg-blue-500/10 ring-2 ring-blue-500/40'} backdrop-blur-sm`} />
            </motion.div>
        </>
    );
}


