import { motion } from 'framer-motion';

export const WavingHand = () => {
    return (
        <motion.div
            className='text-5xl mx-5'
            animate={{ rotate: 20 }}
            transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                from: 0,
                duration: 0.3,
                ease: 'easeInOut',
                type: 'tween'
            }}
        >
            👋
        </motion.div>
    );
};
