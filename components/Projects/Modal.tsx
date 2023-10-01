import Image from 'next/image';

interface ModalProps {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
    background?: string;
    video?: string;
    demo?: string;
    setSelectedProject: (index: any) => void;
    innerRef: any;
    height: number;
}

export default function Modal(props: ModalProps) {
    const video = props.video || props.demo || null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 bg-black bg-opacity-80'>
            <div
                className='flex flex-col justify-center w-full bg-gray-700 rounded-lg shadow md:w-auto'
                ref={props.innerRef}
            >
                <div className='flex items-center justify-between p-4 border-b border-gray-600 rounded-t'>
                    <h3 className='text-xl font-semibold text-white max-w-[80%] text-start'>
                        {props.name}
                    </h3>
                    <button
                        className='text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white'
                        onClick={() => props.setSelectedProject(null)}
                    >
                        <svg
                            aria-hidden='true'
                            className='w-5 h-5'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                        <span className='sr-only'>Close modal</span>
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center p-3'>
                    <p className='text-base leading-relaxed text-gray-400'>
                        {props.description}
                    </p>
                    <p className='pt-2 italic text-slate-500'>
                        {props.technologies.join(', ')}
                    </p>
                    {!video && props.background && (
                        <Image
                            src={props.background}
                            alt={props.name}
                            className='p-4 rounded-lg max-h-96'
                            width={658}
                            height={props.height * 1.7}
                            fill
                        />
                    )}
                    {video && (
                        <video
                            autoPlay
                            controls
                            className='w-full p-4 rounded-lg max-h-96'
                        >
                            <source src={video} type='video/mp4' />
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
}
