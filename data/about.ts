interface Education {
    from: string;
    to: string;
    title: string;
    description: string;
}

export const education: Education[] = [
    {
        from: 'August 2023',
        to: 'December 2023',
        title: 'NTNU - Norwegian University of Science and Technology, Gjovik',
        description:
            'Deep Learning for computer vision, Specialisation in colour imaging, Game programming, Flexible Automation and Artificial Intelligence',
    },
    {
        from: 'September 2019',
        to: 'July 2024',
        title: 'Epita - School of Engineering and Computer Science, Major in Computer Vision',
        description:
            'Computer vision, Machine learning, Deep Learning, Image processing, GPGPU, OpenGL',
    },
];

interface International {
    from: string;
    to: string;
    title: string;
    description: string;
}

export const international: International[] = [
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
