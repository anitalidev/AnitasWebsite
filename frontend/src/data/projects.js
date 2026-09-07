const projects = [
    {
        title: 'Coursnote',
        link: 'https://github.com/anitalidev/Coursnote',
        date: 'Jun 2026 – Present',
        description: [
            'Designed and developed a full-stack course authoring and learning platform supporting hierarchical course content, private notes, enrollment, progress tracking, and course publishing.',
            'Architected a Go backend using repository-based persistence and REST APIs, modeling relationships between courses, modules, topics, pages, published versions, and enrollments.',
            'Designed an immutable publishing/versioning system that separates editable course content from published course snapshots while preserving student enrollment and progress.',
            'Built an extensible block-based course editor supporting rich text, code, tables, questions, presentations, and other content types through a type-based element registry.',
        ],
        tags: ['Go', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'SQL'],
    },
    {
        title: 'UBC Discovery Event Manager',
        link: 'https://github.com/anitalidev/EventScraper',
        date: 'Jun 2026 – Present',
        description: [
            'Independently designed and built an AI-assisted event ingestion and management system that transforms unstructured content from Gmail and Instagram into structured events for the UBC Discovery platform.',
            'Developed a generalized scraping and AI-processing pipeline with OCR, configurable batching, OpenAI-based event extraction and thumbnail selection, and SHA-1 deduplication.',
            'Built an internal event review dashboard and state-based workflow for reviewing, rejecting, approving, editing, and publishing generated events, with validated state transitions and local SQLite persistence.',
            'Integrated with the UBC Discovery REST API to retrieve existing events and publish approved events, separating temporary review data from events persisted in the production platform.',
        ],
        tags: ['Python', 'Flask', 'SQLite', 'OpenAI API', 'Gmail API'],
    },
    {
        title: 'ChessAlgo',
        link: 'https://github.com/anitalidev/ChessAlgo',
        date: 'Feb 2026 – Apr 2026',
        description: [
            'Developed a chess engine in C++ using Negamax search with alpha-beta pruning, supporting legal move generation, board evaluation, move/undo state management, and tactical search.',
            'Optimized search with move ordering, killer-move heuristics, and Zobrist hashing, enabling efficient position identification and laying the foundation for transposition-table caching.',
            'Improved search performance to evaluate 10M+ game-tree nodes and reach 8-ply search depth from the initial position.',
            'Integrated the native C++ engine with a Java Swing chess interface through JNI, supporting interactive gameplay, legal-move validation, engine responses, and move suggestions.',
        ],
        tags: ['C++', 'Java', 'JNI'],
    },
    {
        title: 'AlgoHub',
        link: 'https://github.com/anitalidev/AlgoHub',
        date: 'Dec 2025 – Present',
        description: [
            'Implemented, compiled modularly, and explained in detail the reasoning behind high-performance algorithmic primitives used in real-world systems (union-find, selection algorithms, dynamic programming).',
            'Selected key problems involving important algorithm concepts from experience solving 1000+ LeetCode problems.',
            'Applied advanced data structure knowledge and algorithms to produce efficient solutions and analyzed time/space complexity.',
        ],
        tags: ['C++', 'Data Structures and Algorithms'],
    },
    {
        title: 'Practice Game',
        link: 'https://github.com/anitalidev/GameMath',
        date: 'Aug 2025 – Oct 2025',
        description: [
            'Developed an interactive quiz game with a custom question editor, allowing users to create and practice Multiple Choice, True/False, and Short Answer questions.',
            'Designed modular GUI architecture using Qt Widgets and stacked views.',
            'Implemented scoring engine, randomized shuffling, and real-time answer validation.',
            'Applied object-oriented design principles with inheritance and polymorphism across question types (MCQuestion, TFQuestion, SAQuestion).',
        ],
        tags: ['C++', 'Qt', 'Qt Creator', 'Object-Oriented Programming'],
    },
    {
        title: 'Personal Website',
        link: 'https://github.com/anitalidev/AnitasWebsite',
        date: 'May 2025 – Present',
        description: [
            'Designed and developed a responsive personal portfolio website to showcase projects, skills, and experience.',
            'Built entirely from scratch using HTML, CSS, and JavaScript, with custom components for dynamic interaction and layout control.',
            'Currently being rebuilt in React with a modern component-based architecture.',
        ],
        tags: ['React', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'Academic: Software Construction Project',
        link: 'https://github.com/anitalidev/RentalSystem',
        date: 'Feb 2025 – Apr 2025',
        description: [
            'Developed a Java Swing app for vehicle rental management, applying object-oriented design principles to ensure code reusability and ease of maintenance.',
            'Built features for vehicle and location management, availability tracking, and rental history retrieval, with JSON serialization for data persistence.',
            'Implemented and ran unit tests to validate rental/return workflows, capacity limits, and accurate history logging.',
            'Managed 130+ commits using Git with structured version control practices.',
        ],
        tags: ['Java', 'Swing', 'JUnit', 'Git', 'Object-Oriented Programming'],
    },
]

export default projects
