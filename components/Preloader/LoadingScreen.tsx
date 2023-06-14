import { AnimatedTextCharacter } from './AnimatedTextCharacter';
import { WavingHand } from './WavingHand';

export const LoadingScreen = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen w-screen text-white text-left select-none'>
            <div className='flex items-center'>
                <AnimatedTextCharacter text='HI' />
                <WavingHand />
            </div>
            <AnimatedTextCharacter text='Pierre-Louis' />
        </div>
    );
};
