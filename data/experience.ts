interface WorkExperience {
    company: string;
    link: string;
    position: string;
    location: string;
    date: string;
    icon: string;
    description: string;
    skills?: string;
}

export const workexperiences: WorkExperience[] = [
    {
        company: 'OneCommerce',
        link: 'https://onecommerce.group',
        position: 'Software Engineer',
        location: 'London, UK',
        date: '09/2022 - 01/2023',
        icon: '/logos/onecommerce.webp',
        description: `<ul class="list-disclosure-closed px-4">
        <li>Reduced test suite runtime by 80% through parallelization</li>
        <li>Developed a tool extracting geolocation from inaccurate addresses in MENA with 60%+ accuracy</li>
        <li>Developed a business-oriented web application from scratch for managing Shopify's discount codes</li.
        </ul>`,
        skills: 'https://skillicons.dev/icons?i=ts,nodejs,express,react,nextjs,tailwind,python,mongodb,gcp,githubactions,docker',
    },
    {
        company: 'Freelance',
        link: 'https://www.malt.fr/profile/pierrelouisdelcroix',
        position: 'Fullstack Developer',
        location: 'Worldwide',
        date: '09/2021 - Present',
        icon: '/logos/malt.webp',
        description:
            'Currently working as a freelance in parallel of my studies on malt.fr for french companies and upwork.com for international companies.',
    },
];

interface FreelanceExperience {
    company: string;
    link: string;
    position: string;
    location: string;
    date: string;
    icon: string;
    description: string;
}

export const freelanceexperiences: FreelanceExperience[] = [
    {
        company: 'Avocalix',
        link: 'https://avocalix.com',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '09/2023',
        icon: 'data:image/png;base64,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',
        description: `<ul class="list-disclosure-closed px-4">
        <li>Development of a custom image generation system using node canvas</li>
        <li>Developed UI components & fixed errors</li>
        </ul>`,
    },
    {
        company: 'Sweez',
        link: 'https://sweez.io',
        location: 'Paris, France',
        position: 'Software Engineer',
        date: '05/2023 - present',
        icon: 'https://images.emojiterra.com/google/android-11/512px/1f349.png',
        description: `<ul class="list-disclosure-closed px-4">
            <li>Implemented real time collaboration on slatejs using CRDTs</li>
            <li>Developed a notification system</li>
            <li>Contributed to slate-yjs project</li>
            <li>Developed UI components & fixed errors</li>
            </ul>
            `,
    },
    {
        company: 'IROC',
        link: 'https://iroc.app',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '04/2023 - 06/2023',
        icon: 'https://cdn.fs.brandfolder.com/YeH8YOVsQcCYC00c5fMw/convert?rotate=exif&fit=max&w=400&h=300&format=png',
        description: `<ul class="list-disclosure-closed px-4">
        <li>Implemented an NLP API using Celery message broker</li>
        <li>Improved web scrapers runtime by 95% through parallelization and caching techniques</li>
        <li>Developed UI components & fixed errors</li>
        </ul>`,
    },
    {
        company: 'OneGrid',
        link: 'https://onegrid.me',
        location: 'London, UK',
        position: 'Fullstack Developer - CTO',
        date: '03/2023',
        icon: 'https://uploads-ssl.webflow.com/6448183e496bc3264491c91a/646ca8ebece104b428536f80_OG%20Favicon%20s.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Managed of team of 4 developers based in Pakistan to develop a web application from scratch</li>
        <li>Introduced daily meetings and code reviews to improve the quality of the code</li>
        <li>Implemented a CI/CD pipeline using Github Actions</li>
        <li>Developed UI components & fixed errors</li>
        </ul>
        `,
    },
    {
        company: 'Mobility Care',
        link: 'https://mobilitycare.fr',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '10/2022 - 01/2023',
        icon: 'https://res.cloudinary.com/dg6kenloy/image/upload/v1665392448/static/logo_xhhlzi.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Contributed to the development of an app used by french hospitals</li>
        <li>Implemented a live chat for users using pubnub</li>
        <li>Developed UI components & fixed errors</li>
        </ul>
        `,
    },
    {
        company: 'Smartmoms',
        link: 'https://smartmoms.fr',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '09/2022 - 11/2022',
        icon: 'https://parentsonboard.fr/wp-content/uploads/2023/04/POB-Logo-Officiel-transparent.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Developed the first version of the website</li>
        <li>Live chat integration using websocket</li>
        </ul>
        `,
    },
    {
        company: 'Lomed',
        link: 'https://www.lomed.fr',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '05/2022',
        icon: 'https://www.lomed.fr/hubfs/logoipsum-logo-50-1-_2_-1-_1_-_1_-2.png',
        description: 'Development of a landing page for hubspot CRM',
    },
    {
        company: 'Harmony Promotion',
        link: 'https://www.harmony-promotion.com',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '10/2021',
        icon: '/logos/harmonypromotion.png',
        description: 'Added fonctionalities to an admin panel',
    },
    {
        company: 'Legaware',
        link: 'https://legaware.com',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '03/2022 - Present',
        icon: 'https://d1hbpr09pwz0sk.cloudfront.net/logo_url/legaware-db493ab3',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Contributed to the UI development of <a href='https://infogreffe.mesobligations.fr/' target='_blank' class='text-primary'>https://infogreffe.mesobligations.fr/</a></li>
        <li>Developed from scratch a platform that has hundreds of users per day</li>
        <li>Currenly working on a new platform for entrepreneurs</li>
        </ul>
        `,
    },
    {
        company: 'Psychologies',
        link: 'https://www.psychologies.com',
        location: 'Paris, France',
        position: 'Fullstack Developer',
        date: '09/2021',
        icon: 'https://www.psychologies.com/wp-content/themes/psycho/assets/images/psychologies.svg',
        description: `🎉 My very first freelance mission 🎉<br> Fixed a javascript error on the website`,
    },
];
