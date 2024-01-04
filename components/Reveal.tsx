'use client';

import classNames from 'classnames';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView]);

    return (
        <div
            className={classNames('relative overflow-hidden', width)}
            ref={ref}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};
