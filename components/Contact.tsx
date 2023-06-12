import Image from 'next/image';

const contacts = [
    {
        image: '/linkedin.png',
        link: 'https://linkedin.com',
    },
];

export default function Contacts() {
    return (
        <div className='flex flex-row justify-evenly'>
            {contacts.map((contact) => (
                <Contact {...contact} key={contact.link} />
            ))}
        </div>
    );
}

interface ContactProps {
    image: string;
    link: string;
}

const Contact = (props: ContactProps) => {
    return (
        <a href={props.link} target='_blank'>
            <Image src={props.image} width={20} height={20} alt={props.image} />
        </a>
    );
};
