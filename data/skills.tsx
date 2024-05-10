import { IconType } from 'react-icons';
import {
    SiAmazonaws,
    SiBlender,
    SiC,
    SiCplusplus,
    SiCsharp,
    SiDjango,
    SiDocker,
    SiGooglecloud,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiOpencv,
    SiOpengl,
    SiPandas,
    SiPostgresql,
    SiPython,
    SiPytorch,
    SiReact,
    SiScikitlearn,
    SiTailwindcss,
    SiTensorflow,
    SiThreedotjs,
    SiUnity,
    SiUnrealengine,
} from 'react-icons/si';

export interface SkillCategory {
    title: string;
    icon: IconType;
}

const skills: SkillCategory[] = [
    {
        title: 'Python',
        icon: SiPython,
    },
    {
        title: 'Tensorflow',
        icon: SiTensorflow,
    },
    {
        title: 'PyTorch',
        icon: SiPytorch,
    },
    {
        title: 'Scikit-Learn',
        icon: SiScikitlearn,
    },
    {
        title: 'Pandas',
        icon: SiPandas,
    },
    {
        title: 'OpenCV',
        icon: SiOpencv,
    },
    {
        title: 'React',
        icon: SiReact,
    },
    {
        title: 'Next.js',
        icon: SiNextdotjs,
    },

    {
        title: 'ThreeJS',
        icon: SiThreedotjs,
    },
    {
        title: 'TailwindCSS',
        icon: SiTailwindcss,
    },
    {
        title: 'Node.js',
        icon: SiNodedotjs,
    },
    {
        title: 'Django',
        icon: SiDjango,
    },
    {
        title: 'PostgreSQL',
        icon: SiPostgresql,
    },
    {
        title: 'MongoDB',
        icon: SiMongodb,
    },
    {
        title: 'Docker',
        icon: SiDocker,
    },
    {
        title: 'AWS',
        icon: SiAmazonaws,
    },
    {
        title: 'Google Cloud',
        icon: SiGooglecloud,
    },
    {
        title: 'C',
        icon: SiC,
    },
    {
        title: 'C#',
        icon: SiCsharp,
    },
    {
        title: 'C++',
        icon: SiCplusplus,
    },

    {
        title: 'Unity',
        icon: SiUnity,
    },
    {
        title: 'Unreal Engine',
        icon: SiUnrealengine,
    },
    {
        title: 'OpenGL',
        icon: SiOpengl,
    },
    {
        title: 'Blender',
        icon: SiBlender,
    },
];

export default skills;
