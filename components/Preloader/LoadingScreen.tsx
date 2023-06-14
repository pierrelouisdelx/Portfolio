import { AnimatedTextCharacter } from './AnimatedTextCharacter';
import { WavingHand } from './WavingHand';

export const LoadingScreen = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen text-white select-none'>
            <div className='flex items-start flex-col'>
                <div className='flex items-center text-7xl font-semibold tracking-wide uppercase'>
                    HI
                    <WavingHand />!
                </div>
                <AnimatedTextCharacter text='Welcome to my portfolio' />
            </div>
        </div>
    );
};
