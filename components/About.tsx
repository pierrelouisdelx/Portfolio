import { Title } from '@/ui';

const education = [
    {
        from: 'September 2019',
        to: 'July 2024',
        title: 'Epita - School of Engineering and Computer Science, Major in Computer Vision',
        description:
            'EPITA, the school of engineers in computer intelligence. Since its creation in 1984, EPITA is the first engineering school in Paris. It prepares her passionate students in computer engineering jobs to build the world of tomorrow. ',
    },
];

const international = [
    {
        from: 'September 2015',
        to: 'July 2019',
        title: 'International Lycee of London Winston Churchill',
        description: 'High School Student, London, UK',
    },
    {
        from: 'September 2007',
        to: 'July 2011',
        title: 'Lived in Seoul, Hong Kong and Tokyo',
        description: 'International Student',
    },
];

export default function About() {
    return (
        <div className='flex flex-col w-full text-left snap-center bg-[#1a191d]' id='about'>
            <Title>About</Title>

            <p>
                My name is Pierre-Louis Delcroix, and my journey into the world of computer science
                began when I was just 15 years old. At that young age, I discovered my passion for
                coding and embarked on a continuous learning process. I started by exploring web
                development, where I gained a solid foundation in programming and created websites.
                As I delved deeper into the field, my curiosity led me to the fascinating realm of
                computer vision. At the age of 17, I took my first steps using OpenCV and Python to
                grasp the basics. It was an exciting introduction that opened doors to endless
                possibilities.
                <br />
                <br />
                Currently, I am pursuing my studies at Epita, one of France's esteemed engineering
                schools. At Epita, I am immersing myself in the world of computer vision and honing
                my skills in this specialized domain. The curriculum and resources at Epita provide
                me with valuable knowledge and a comprehensive understanding of the subject.
                <br />
                <br />
                In 2021, I began freelancing and working on a multitude of projects. This experience
                has been instrumental in my growth as a computer scientist and a professional.
                Freelancing has not only allowed me to apply my skills in real-world scenarios but
                has also taught me to adapt to different requirements and challenges. Throughout my
                journey, I have remained committed to continuous learning. I have taken the
                initiative to explore and master various languages and technologies beyond what was
                covered in my formal education. From Mediapipe and Tensorflow to Pytorch and Cuda, I
                have embraced these tools to broaden my knowledge and skill set. Learning has become
                a way of life for me, and I take pride in how far I have come. From starting with a
                humble laptop running Ubuntu, I have learned to navigate the intricacies of Linux
                and leverage the power of the terminal. This ongoing process of self-improvement has
                allowed me to pursue my passion and thrive in the ever-evolving world of computer
                science and computer vision.
            </p>

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                My businesses
            </h3>
            <p>
                In 2017, I embarked on my first entrepreneurial venture, armed with my older
                brother's hand-me-down Wiko Ozzy phone. It was during this time that I stumbled upon
                an app called AppLike, which presented an opportunity to earn money by playing
                games. Intrigued, I discovered a clever trick - playing games at night would yield
                more points and, consequently, more earnings. To optimize this strategy, I
                downloaded an app that prevented the screen from turning off, allowing me to keep
                the phone active throughout the night while playing a random game recommended by the
                app.
                <br />
                <br />
                After just five months, I had accumulated £35, and I felt like a millionaire. With
                this newfound wealth, I decided to pursue a long-standing dream of mine - building
                my own external battery. I purchased two 18650 batteries, a battery holder, a
                TP4056, and a 5V step-up converter, assembling a battery with a whopping 10,000mAh
                capacity for just a few bucks.
                <br />
                <br />
                With some funds still remaining, I turned to eBay, where I purchased broken laptops
                to refurbish and resell. My very first deal was an incredible find - a broken laptop
                priced at a mere 0.99£. The issue with this particular laptop was a severed power
                cable on the motherboard. Encouraged by the upcoming Christmas season, I asked my
                parents for a soldering iron as a gift and skillfully repaired the laptop. I
                thoroughly cleaned the device and installed a fresh copy of Windows, before listing
                it on eBay as "Like new." To my astonishment, it sold for 100£ - a staggering
                100-fold profit from my initial investment. My parents were equally impressed.
                <br />
                <br />
                Empowered by this early success, I continued my business of acquiring broken
                laptops, restoring them, and reselling them. With the profits I earned, I purchased
                my very own laptop - a significant milestone for me. It was with this laptop that I
                delved deeper into web development, particularly focusing on web scraping. In just
                one week, I crafted a Python bot capable of retrieving prices of specific phones
                from various Chinese websites. Whenever promotions presented themselves, I seized
                the opportunity to buy phones from China at discounted rates and sold them on eBay,
                consistently netting a minimum profit of 75£ per device. One of the most intriguing
                phones I came across was the VKWorld S8, which I offered at a lower price than my
                competitors. Within a fortnight, I successfully sold ten units.
                <br />
                <br />
                I continued these entrepreneurial endeavors until I returned to France to pursue my
                studies. During my first two years of college, I regrettably did not have the time
                to maintain these businesses. However, two years later, I found myself freelancing
                as a full-stack developer. Thanks to my prior experience in web development, which I
                had begun cultivating at the age of 15, I swiftly attracted clients. Creating
                numerous websites for diverse clientele, I have managed to sustain myself and turn
                my passion into a livelihood.
                <br />
                <br />
                Today, I am still in college, balancing my studies while earning a living doing what
                I love. The journey from utilizing an old phone to explore gaming apps to becoming a
                proficient full-stack developer has been a fulfilling and rewarding experience.
            </p>

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                Future
            </h3>
            <p>
                Currently, I am immersed in my studies at Epita, where my primary focus lies in the
                captivating domain of computer vision. My fervent desire is to apply my skills and
                knowledge in this field to tackle real-world challenges head-on. Alongside computer
                vision, I have developed a keen interest in the expansive realm of artificial
                intelligence and machine learning. As I envision my future, I aspire to carve out a
                career at the intersection of computer vision and artificial intelligence, where I
                can make significant contributions.
                <br />
                <br />
                While web development continues to be a freelance endeavor, a means through which I
                can both indulge in my passion and earn income, I must confess that my aspirations
                have shifted. Computer vision and artificial intelligence have taken center stage in
                my professional goals. These fields are where I wish to invest my time, energy, and
                expertise. As a result, web development no longer serves as my primary focus.
                Instead, I am driven to pursue a career dedicated to computer vision and artificial
                intelligence, where I can make a lasting impact.
            </p>

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                Education
            </h3>
            {education.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                />
            ))}

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                International
            </h3>
            {international.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

interface TimelineProps {
    from: string;
    to: string;
    title: string;
    description: string;
}

const Timeline = (props: TimelineProps) => {
    return (
        <ol className='relative border-l border-orange-400'>
            <li className='ml-4'>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                    {props.to}
                </time>
                <h3 className='text-lg font-semibold text-white'>{props.title}</h3>
                <p className='text-base italic font-normal text-gray-200'>{props.description}</p>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='text-sm font-normal leading-none text-gray-400'>{props.from}</time>
            </li>
        </ol>
    );
};
