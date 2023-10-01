import Title from '@/ui/Title';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const key = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
const captcha = process.env.NEXT_PUBLIC_CAPTCHA_KEY as string;

export default function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const captchaRef = useRef<any>();

    const form = useRef<any>();

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!name.length || !email.length || !message.length) {
            Error({ message: 'Please fill in all fields' });
            return;
        }

        if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            Error({ message: 'Please enter a valid email' });
            return;
        }

        if (!captchaRef.current.getValue()) {
            Error({ message: 'Please verify you are not a robot' });
            return;
        }

        emailjs.sendForm(serviceID, templateID, form.current, key).then(
            (result) => {
                Success({ message: 'Message sent successfully' });
                resetForm();
            },
            (error) => {
                Error({ message: 'An error occurred, Please try again' });
                console.log(error.text);
                resetForm();
            }
        );
    };

    return (
        <div className='flex flex-col w-full h-screen' id='contacts'>
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
                            value={name}
                            name='name'
                            required
                        />
                        <input
                            className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2'
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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
                            value={message}
                            name='message'
                            required
                        />
                    </div>
                    <div className='flex justify-center py-2'>
                        <ReCAPTCHA sitekey={captcha} ref={captchaRef} />
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

const Error = ({ message }: { message: string }) => {
    toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
};

const Success = ({ message }: { message: string }) => {
    toast.success(message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
    });
};
