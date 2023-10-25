'use client';

import dynamic from 'next/dynamic';

import Title from '@/ui/Title';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Reveal } from './Reveal';

// @ts-ignore
const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'));

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const key = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
const captcha = process.env.NEXT_PUBLIC_CAPTCHA_KEY as string;

export default function Contacts() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaNeeded, setRecaptchaNeeded] = useState(false);
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

    const handleChange = () => {
        if (!recaptchaNeeded) {
            setRecaptchaNeeded(true);
        }
    };

    return (
        <div className='flex flex-col w-full h-screen' id='contacts'>
            <Title>Contacts</Title>
            <div className='flex items-center justify-center h-full'>
                <form
                    className='flex flex-col justify-center lg:w-1/2'
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    ref={form}
                >
                    <Reveal>
                        <div className='flex flex-wrap justify-between md:flex-row'>
                            <input
                                className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2 text-slate-800'
                                placeholder='Full Name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                name='name'
                                required
                            />
                            <input
                                className='w-full p-2 m-2 text-black border rounded-lg md:max-w-1/2 text-slate-800'
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name='email'
                                required
                            />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className='flex'>
                            <textarea
                                className='w-full p-2 m-2 text-black border rounded-lg text-slate-800'
                                placeholder='Message'
                                rows={5}
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                name='message'
                                required
                            />
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className='flex justify-center py-2'>
                            {recaptchaNeeded && (
                                <ReCAPTCHA sitekey={captcha} ref={captchaRef} />
                            )}
                        </div>
                    </Reveal>
                    <Reveal>
                        <div className='flex justify-center'>
                            <button className='w-1/2 p-2 m-2 relative inline-flex items-center justify-center text-primary border border-primary rounded-lg transition-all group'>
                                <span className='w-0 h-0 rounded bg-primary absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                                <span className='w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                                    Send
                                </span>
                            </button>
                        </div>
                    </Reveal>
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
