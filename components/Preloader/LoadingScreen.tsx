import { AnimatedTextCharacter } from './AnimatedTextCharacter';
import { WavingHand } from './WavingHand';
import { motion } from 'framer-motion';

export const LoadingScreen = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen text-white bg-[#1a191d]'>
            <motion.div
                className='flex items-center text-9xl font-semibold tracking-wide uppercase mb-10'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                HI
                <WavingHand />!
            </motion.div>
            <AnimatedTextCharacter text='Welcome to my portfolio' />
        </div>
    );
};
