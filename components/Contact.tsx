import Title from '@/ui/Title';

export default function Contacts() {
    return (
        <div className='flex flex-col w-full h-full' id='contacts'>
            <Title>Contacts</Title>
            <div className='flex items-center justify-center h-full'>
                <div className='flex flex-col justify-center lg:w-1/2'>
                    <div className='flex flex-wrap justify-between md:flex-row'>
                        <input
                            className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2'
                            placeholder='Full Name'
                        />
                        <input
                            className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2'
                            placeholder='Email'
                        />
                    </div>
                    <div className='flex'>
                        <textarea
                            className='w-full p-2 m-2 text-black border rounded-lg'
                            placeholder='Message'
                            rows={5}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className='w-1/2 p-2 m-2 text-orange-400 border border-orange-400 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-white'>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
