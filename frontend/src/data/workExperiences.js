const workExperiences = [
    {
        featured: true,
        label: 'Odoo',
        title: 'Odoo Developer',
        type: 'Contract work',
        date: 'Jun 2026 – Present',
        description: [
            'Designed and implemented an asynchronous email queuing system, allowing callers to enqueue email jobs that are processed in controlled batches by scheduled Odoo cron jobs.',
            'Built email lifecycle and job-level status tracking with Pending, Sent, Cancelled, and Failed states, aggregating outcomes by unique job ID into HTML status reports.',
            'Implemented automated completion notifications through a messaging bot, notifying users once all emails associated with a job have finished processing.',
        ],
        tags: ['Python', 'Odoo'],
    },
    {
        featured: true,
        label: 'CRA',
        title: 'Canada Revenue Agency — IT Intern',
        type: 'Full-Time',
        date: 'May 2026 – Present',
        description: [
            'Developed a web scraping and data aggregation tool that extracts, processes, and combines emergency contact information from two independent web sources into a unified dataset.',
            'Analyzed change requests to perform software testing, developing and executing test cases to validate application functionality in regards to business logic and identify defects.',
            'Explored and integrated AI-assisted workflows into the test planning process, using AI to support test case development and improve testing efficiency and coverage.',
            'Worked closely with COBOL code and Mainframe.',
        ],
        tags: ['COBOL', 'Java'],
    },
    {
        label: 'UBC TA',
        title: 'UBC Computer Science Teaching Assistant',
        type: 'Part-Time',
        date: 'Sep 2025 – May 2026',
        description: [
            'Selected as a Teaching Assistant for CPSC 121 (Models of Computation), supporting students with logic, proofs, and computational problem-solving.',
            'Planned and led weekly problem-solving sessions, facilitating discussion and guiding students through course concepts.',
            'Collaborated with a team of three TAs to support students during weekly interactive labs.',
        ],
        tags: ['Teamwork', 'Communication'],
    },
    {
        label: 'UBC Course Dev',
        title: 'UBC Computer Science Course Development Assistant',
        type: 'Part-Time',
        date: 'Jan 2026 – May 2026',
        description: [
            'Designed and programmed auto-graded PrairieLearn questions, developing randomized and programmable variants to provide CPSC 121 students with additional practice and automated feedback.',
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'GitHub'],
    },
]

export default workExperiences
