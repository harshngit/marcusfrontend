import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimatedSectionProps = {
    children: React.ReactNode;
    className?: string;
    as?: keyof JSX.IntrinsicElements;
    id?: string;
};

const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function AnimatedSection({ children, className, as: Tag = 'section', id }: AnimatedSectionProps) {
    const controls = useAnimation();
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root: null, rootMargin: '0px 0px -20% 0px', threshold: 0.1 }
        );
        observer.observe(element);
        return () => observer.disconnect();
    }, [controls]);

    return (
        <Tag ref={ref as any} id={id} className={className}>
            <motion.div initial="hidden" animate={controls} variants={variants}>
                {children}
            </motion.div>
        </Tag>
    );
}


