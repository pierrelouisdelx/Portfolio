import { motion } from 'framer-motion';

export const AnimatedTextCharacter = ({ text }: { text: string }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 * i }
        })
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        },
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className='text-7xl uppercase tracking-wide font-semibold overflow-hidden flex text-left flex-wrap'
            variants={container}
            initial='hidden'
            animate='visible'
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};
