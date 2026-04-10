import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Sean',
    lastName:  'Tabu',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Africa/Nairobi',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to my Newsletter</>,
    description: <>Stay updated with my latest projects and tech insights.I occasionally write about technology, and share thoughts on software engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/SK108045',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: '',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/tabu_sean/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:seantabu@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `Sean`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Hi, I'm Sean</>,
    subline: <>I specialize in building robust enterprise applications and scalable microservices. Passionate about clean architecture and delivering high-performance solutions that drive business value.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'tel:+254717797420'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I specialize in building robust enterprise applications and scalable microservices. Passionate about clean architecture and delivering high-performance solutions that drive business value.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: <a href="#" target="_blank" rel="noopener noreferrer">Simka Technologies Fire Services</a>,
                timeframe: 'Mar 2025 - Aug 2025',
                role: 'Software Developer',
                achievements: [
                    <>Developed a comprehensive mobile app, web app, and management system to streamline operations, successfully led the migration from a legacy system to modern infrastructure, and maintained both frontend and backend systems for maximum efficiency.</>
                ],
                images: [
                    {
                        src: '/images/SimkaFire.png',
                        alt: 'Simka Tech Project',
                        width: 16,
                        height: 9,
                        //link: 'https://simkafire.com'
                    }
                ]                
            },
            {
                company: <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">Amazon Web Services (AWS)</a>,
                timeframe: 'Mar 2025 - Aug 2025',
                timeframe: 'Aug 2025 - Present', 
                role: 'Cloud Applications Engineer (Trainee)',
                achievements: [
                    <>Built and deployed a scalable Task Management App on AWS using EC2, S3, and RDS with real-time updates via WebSockets and auto-scaling for high performance, implemented a secure VPN solution with OpenVPN Access Server on AWS EC2 (documented on GitHub), and created comprehensive documentation and deployment guides for team knowledge sharing.</>
                ],
                images: []
            },
            {
                company: <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">Google Cloud</a>,
                timeframe: 'Mar 2025 - Aug 2025',
                timeframe: 'Jul 2025 - Dec 2025',
                role: 'AI Solutions Developer',
                achievements: [
                    <>Developed AI-powered solutions on Google Cloud to automate tasks and enhance user experiences, created a Twitter bot using Google Vertex AI that gained 300+ followers in one month, and built an AI Conversational Agent with real-time NLP and audio playback capabilities.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Maseno University',
                description: <>Currently Studying Computer Science.</>,
            },
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Full Stack Development',
                description: <>Built diverse applications, Task Management Systems, and Real-time Collaborative Tools. Proficient in Node.js, Express, React, Next.js, and various databases including MySQL, MongoDB, and Firebase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/App-optimized.mp4',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },

                ]
            },
            {
                title: 'Cloud & Infrastructure',
                description: <>Expert in AWS and Google Cloud Platform, specializing in EC2, S3, RDS, and VPN solutions. Implemented high-performance load balancing techniques with NGINX and developed scalable web applications.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/Cloud.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'AI & Automation',
                description: <>Developed AI-powered solutions including conversational agents, Twitter bots using Google Vertex AI, and automated content generation systems. Strong focus on practical AI applications and machine learning integration.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/AI.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },            

            {
                title: 'DevOps & Security',
                description: <>Experience in setting up development environments, implementing CI/CD pipelines, and managing server configurations. Strong background in cybersecurity, ethical hacking, and system optimization.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/devsecops.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }

        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about Tech and Software Engineering...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };