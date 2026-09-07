const hackathonProjects = [
    {
        title: 'UBC Discovery — 1st Place',
        link: 'https://github.com/ubcdiscovery/ubc-discovery',
        date: 'May 2026',
        description: [
            'Helped design the cloud architecture for a campus discovery platform supporting user profiles, location-based connections, campus exploration, and event discovery.',
            'Architected and integrated an AWS-based backend infrastructure, containerizing a FastAPI service and connecting ECS Fargate, ECR, RDS PostgreSQL, S3, Cognito, and Bedrock within a secured VPC.',
            'Designed service interactions for authentication, media storage, database access, and AI-powered matching, including Cognito token verification, private S3 access through presigned URLs, and Bedrock model inference.',
            'Helped redesign the post-hackathon architecture to reduce infrastructure costs, migrating from ECR/ECS Fargate to GHCR/Lightsail and from Cognito to Firebase while preserving service boundaries.',
        ],
        tags: ['React Native', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
        title: 'Roshan',
        link: 'https://github.com/anitalidev/RoshanPrototype',
        date: 'Feb 2026',
        description: [
            'Built a browser-based NLP system for detecting rhetorical and potentially manipulative language, including name-calling, appeals to authority, exaggeration, and expressions of doubt.',
            'Developed a multi-label text-classification pipeline with Python, pandas, and NumPy, including preprocessing, per-label threshold validation, and model inference through a backend API.',
            'Engineered a Chrome extension that extracts article content and dynamically highlights classified text, with interactive tooltips and contextual AI follow-up functionality.',
            'Fine-tuned DistilBERT for multi-label classification across five categories on a 6,688-sentence dataset.',
        ],
        tags: ['JavaScript', 'Python', 'FastAPI', 'Hugging Face', 'NLP'],
    },
    {
        title: 'HackCamp: ColourGlow',
        link: 'https://github.com/anitalidev/ColourGlow',
        date: 'Nov 2024',
        description: [
            'Developed a web-based tool for artists to colorize images and experiment with blended tones.',
            'Worked on back-end palette generation and hue-based recolor logic alongside an interactive front-end, connecting the two together.',
            'Coordinated team integration and version control using GitHub, managing branches and code reviews for a demo-ready build.',
        ],
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
]

export default hackathonProjects
