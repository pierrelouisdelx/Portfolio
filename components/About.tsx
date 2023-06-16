import { Title } from '@/ui';

export default function About() {
    return (
        <div className='flex flex-col w-full text-left snap-center' id='about'>
            <Title>Who am I ?</Title>
            <p>
                My name is Pierre-Louis Delcroix and I've been coding since High School. During this
                past 6 years I did several projects such as a Music streaming Web App, an Optical
                Character Recognition, a POSIX shell, video games and many others. I'm passionate
                about computer since 2016 especially by cybersecurity and computer vision.{' '}
            </p>
        </div>
    );
}
