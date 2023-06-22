import Title from '@/ui/Title';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const key = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;

export default function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef<any>();

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error('Please fill in all fields', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }

        emailjs.sendForm(serviceID, templateID, form.current, key).then(
            (result) => {
                toast.success('Message sent successfully', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });

                resetForm();
            },
            (error) => {
                toast.error('Message failed to send', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark',
                });

                console.log(error.text);

                resetForm();
            }
        );
    };

    return (
        <div className='flex flex-col w-full h-full' id='contacts'>
            <Title>Contacts</Title>
            <div className='flex items-center justify-center h-full'>
                <form
                    className='flex flex-col justify-center lg:w-1/2'
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <div className='flex flex-wrap justify-between md:flex-row'>
                        <input
                            className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2'
                            placeholder='Full Name'
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                            required
                        />
                        <input
                            className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            required
                        />
                    </div>
                    <div className='flex'>
                        <textarea
                            className='w-full p-2 m-2 text-black border rounded-lg'
                            placeholder='Message'
                            rows={5}
                            onChange={(e) => setMessage(e.target.value)}
                            name='message'
                            required
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button className='w-1/2 p-2 m-2 text-orange-400 border border-orange-400 rounded-lg cursor-pointer hover:bg-orange-400 hover:text-white'>
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    );
}
