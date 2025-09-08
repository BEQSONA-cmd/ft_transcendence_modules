export interface Task {
    id: number;
    type: "Major" | "Minor";
    title: string;
    description?: string;
    tasks?: string[];
}

export const tasks: Task[] = [
    {
        id: 1,
        type: "Major",
        title: "Use a framework to build the backend.",
        description: "In this major module, you are required to use a specific web framework for backend development: Fastify with Node.js.",
    },
    {
        id: 2,
        type: "Minor",
        title: "Use a framework or toolkit to build the front-end.",
        description: "Your frontend development must use the Tailwind CSS in addition of the TypeScript, and nothing else.",
    },
    {
        id: 3,
        type: "Minor",
        title: "Use a database for the backend -and more.",
        description: "The designated database for all DB instances in your project is SQLite This choice ensure data consistency and compatibility across all project components and may be a prerequisite for other modules, such as the backend Framework module.",
    },
    {
        id: 4,
        type: "Major",
        title: "Store the score of a tournament in the Blockchain.",
        description: "This Major module focuses on implementing a feature within the Pong website to securely store tournament scores on a blockchain. It is essential to clarify that for development and testing purposes, we will use a testing blockchain environment. The chosen blockchain for this implementation is Avalanche , and Solidity will be the programming language used for smart contract development.",
        tasks: [
            "Blockchain Integration: The primary goal of this module is to seamlessly in- tegrate blockchain technology, specifically Avalache , into the Pong website. This integration ensures the secure and immutable storage of tournament scores, providing players with a transparent and tamper-proof record of their gaming achievements.",
            "Solidity Smart Contracts: To interact with the blockchain, we will develop Solidity smart contracts. These contracts will be responsible for recording, managing, and retrieving tournament scores.",
            "Testing Blockchain: As mentioned earlier, a testing blockchain will be used for development and testing purposes. This ensures that all blockchain-related functionalities are thoroughly validated without any risks associated with alive blockchain.",
            "Interoperability: This module may have dependencies on other modules, par- ticularly the Backend Framework module. Integrating blockchain functionality might require adjustments in the backend to accommodate interactions with the blockchain.",
        ],
    },
    {
        id: 5,
        type: "Major",
        title: "Standard user management, authentication, users across tournaments.",
        tasks: [
            "Users can securely subscribe to the website.",
            "Registered users can securely log in.",
            "Users can select a unique display name to participate in tournaments.",
            "Users can update their information.",
            "Users can upload an avatar, with a default option if none is provided.",
            "Users can add others as friends and view their online status.",
            "User profiles display stats, such as wins and losses.",
            "Each user has a Match History including 1v1 games, dates, and relevant details, accessible to logged-in users.",
        ],
    },
    {
        id: 6,
        type: "Major",
        title: "Implementing a remote authentication.",
        description: "In this major module, the goal is to implement a secure external authentication system using OAuth 2.0 . ",
        tasks: [
            "You are free to choose any OAuth-compatible provider (e.g., Google, GitHub, etc.).",
            "Integrate the authentication system, allowing users to securely sign in.",
            "Obtain the necessary credentials and permissions from the authority to enable secure login.",
            "Implement user-friendly login and authorization flows that adhere to best practices and security standards.",
            "Ensure the secure exchange of authentication tokens and user information between the web application and the authentication provider.",
        ],
    },
    {
        id: 7,
        type: "Major",
        title: "Remote players",
        description: "It should be possible for two players to play remotely. Each player is located on a separated computer, accessing the same website and playing the same Pong game.",
    },
    {
        id: 8,
        type: "Major",
        title: "Multiple Players",
        description: "It should be possible to have more than two players. Each player needs live control (so the “remote players” module is strongly recommended). It's up to you to decide how the game could be played with 3, 4, 5, 6 or more players. Along with the regular 2 players game, you can define a specific number of players, greater than 2, for this multiplayer module. Ex: 4 players could play on a square board, with each player controlling one unique side of the square.",
    },
    {
        id: 9,
        type: "Major",
        title: "Add another game with user history and matchmaking.",
        description: "The goal of this major module, is to introduce a new game, distinct from Pong, and incorporate features such as user history tracking and matchmaking. Key features and objectives include:",
        tasks: [
            "Develop a new, engaging game to diversify the platform's offerings and entertain users.",
            "Implement user history tracking to record and display individual users' gameplay statistics.",
            "Create a matchmaking system to allow users to find opponents and participate in fair and balanced matches.",
            "Ensure that user game history and matchmaking data are stored securely and remain up-to-date.",
            "Optimize the performance and responsiveness of the new game to provide an enjoyable user experience. Regularly update and maintain the game to fix bugs, add new features, and enhance gameplay.",
        ],
    },
    {
        id: 10,
        type: "Minor",
        title: "Game customization options.",
        description: "In this minor module, the goal is to provide customization options for all available games on the platform. Key features and objectives include:",
        tasks: [
            "Offer customization features, such as power-ups, attacks, or different maps, that enhance the gameplay experience.",
            "Allow users to choose a default version of the game with basic features if they prefer a simpler experience.",
            "Ensure that customization options are available and applicable to all games offered on the platform.",
            "Implement user-friendly settings menus or interfaces for adjusting game parameters.",
            "Maintain consistency in customization features across all games to provide a unified user experience.",
        ],
    },
    {
        id: 11,
        type: "Major",
        title: "Live Chat",
        description: "In this module, you need to create a chat feature for users.",
        tasks: [
            "The user should be able to send direct messages to other users.",
            "The user should be able to block other users, preventing them from seeing any further messages from the blocked account.",
            "The user should be able to invite other users to play a Pong game through the chat interface.",
            "The tournament system should be able to notify users about the next game.",
            "The user should be able to access other players' profiles through the chat interface.",
        ],
    },
    {
        id: 12,
        type: "Major",
        title: "Introduce an AI opponent.",
        description: "In this major module, the objective is to incorporate an AI player into the game. Notably, the use of the A* algorithm is not permitted for this task.",
        tasks: [
            "Develop an AI opponent that provides a challenging and engaging gameplay experience for users.",
            "The AI must replicate human behavior, which means that in your AI implementation, you must simulate keyboard input. The constraint here is that the AI can only refresh its view of the game once per second, requiring it to anticipate bounces and other actions.",
            "Implement AI logic and decision-making processes that enable the AI player to make intelligent and strategic moves.",
            "Explore alternative algorithms and techniques to create an effective AI player without relying on A*.",
            "Ensure that the AI adapts to different gameplay scenarios and user interactions.",
        ],
    },
    {
        id: 13,
        type: "Minor",
        title: "User and Game Stats Dashboards.",
        description: "In this minor module, the goal is to introduce dashboards that display statistics for individual users and game sessions. Key features and objectives include:",
        tasks: [
            "Create user-friendly dashboards that provide users with insights into their gaming statistics.",
            "Develop a separate dashboard for game sessions, showing detailed statistics, outcomes, and historical data for each match.",
            "Ensure that the dashboards offer an intuitive and informative user interface for tracking and analyzing data.",
            "Implement data visualization techniques, such as charts and graphs, to present statistics in a clear and visually appealing manner.",
            "Allow users to access and explore their own gaming history and performance metrics conveniently.",
            "Feel free to add any metrics you deem useful",
        ],
    },
    {
        id: 14,
        type: "Major",
        title: "Implement WAF/ModSecurity with a hardened configuration and HashiCorp Vault for secrets management.",
        description: "The objective of this major module is to enhance the security infrastructure of the project by implementing several key components. Key features and goals include:",
        tasks: [
            "Configure and deploy a Web Application Firewall (WAF) and ModSecurity with a strict and secure configuration to protect against web-based attacks.",
            "Integrate HashiCorp Vault to securely manage and store sensitive information, such as API keys, credentials, and environment variables, ensuring that these secrets are properly encrypted and isolated.",
        ],
    },
    {
        id: 15,
        type: "Minor",
        title: "GDPR compliance options with user anonymization, local data management, and account deletion.",
        description: "The goal of this minor module is to introduce GDPR compliance options that allow users to exercise their data privacy rights. Key features and objectives include:",
        tasks: [
            "Implement GDPR-compliant features that enable users to request anonymization of their personal data, ensuring that their identity and sensitive information are protected.",
            "Provide tools for users to manage their local data, including the ability to view, edit, or delete their personal information stored within the system.",
            "Offer a streamlined process for users to request the permanent deletion of their accounts, including all associated data, ensuring compliance with data protection regulations.",
            "Maintain clear and transparent communication with users regarding their data privacy rights, with easily accessible options to exercise these rights.",
        ],
    },
    {
        id: 16,
        type: "Major",
        title: "Implement Two-Factor Authentication (2FA) and JWT.",
        description: "The goal of this major module is to enhance security and user authentication by introducing Two-Factor Authentication (2FA) and utilizing JSON Web Tokens (JWT). Key features and objectives include:",
        tasks: [
            "Implement Two-Factor Authentication (2FA) as an additional layer of security for user accounts, requiring users to provide a secondary verification method, such as a one-time code, in addition to their password.",
            "Utilize JSON Web Tokens (JWT) as a secure method for authentication and authorization, ensuring that user sessions and access to resources are managed securely.",
            "Provide a user-friendly setup process for enabling 2FA, with options for SMS codes, authenticator apps, or email-based verification.",
            "Ensure that JWT tokens are issued and validated securely to prevent unauthorized access to user accounts and sensitive data.",
        ],
    },
    {
        id: 17,
        type: "Major",
        title: "Infrastructure Setup with ELK (Elasticsearch, Logstash, Kibana) for Log Management.",
        description: "The objective of this major module is to establish a robust infrastructure for log management and analysis using the ELK stack (Elasticsearch, Logstash, Kibana). Key features and goals include:",
        tasks: [
            "Deploy Elasticsearch to efficiently store and index log data, ensuring it is easily searchable and accessible.",
            "Configure Logstash to collect, process, and transform log data from various sources, sending it to Elasticsearch.",
            "Set up Kibana for visualizing log data, creating dashboards, and generating insights from log events.",
            "Define data retention and archiving policies to manage log data storage effectively.",
            "Implement security measures to protect log data and access to the ELK stack components.",
        ],
    },
    {
        id: 18,
        type: "Minor",
        title: "Monitoring system.",
        description: "The goal of this minor module is to set up a comprehensive monitoring system using Prometheus and Grafana . Key features and goals include:",
        tasks: [
            "Deploy Prometheus as the monitoring and alerting toolkit to collect metrics and monitor the health and performance of various system components.",
            "Configure data exporters and integrations to capture metrics from different services, databases, and infrastructure components.",
            "Create custom dashboards and visualizations using Grafana to provide real-time insights into system metrics and performance.",
            "Set up alerting rules in Prometheus to proactively detect and respond to critical issues and anomalies.",
            "Ensure proper data retention and storage strategies for historical metrics data.",
            "Implement secure authentication and access control mechanisms for Grafana to protect sensitive monitoring data.",
        ],
    },
    {
        id: 19,
        type: "Major",
        title: "Designing the backend as microservices.",
        description: "The goal of this major module is to architect the backend of the system using a microservices approach. Key features and objectives include:",
        tasks: [
            "Divide the backend into smaller, loosely-coupled microservices, each responsible for specific functions or features.",
            "Define clear boundaries and interfaces between microservices to enable independent development, deployment, and scaling.",
            "Implement communication mechanisms between microservices, such as RESTful APIs or message queues, to facilitate data exchange and coordination.",
            "Ensure that each microservice is responsible for a single, well-defined task or business capability, promoting maintainability and scalability.",
        ],
    },
    {
        id: 20,
        type: "Major",
        title: "Implementing Advanced 3D Techniques",
        description: "This major module,'Graphics,' focuses on enhancing the visual aspects of the Pong game. It introduces the use of advanced 3D techniques to create a more immersive gaming experience. Specifically, the Pong game will be developed using Babylon.js to achieve the desired visual effects.",
        tasks: [
            "Advanced 3D Graphics: The primary goal of this module is to implement advanced 3D graphics techniques to elevate the visual quality of the Pong game. By utilizing Babylon.js, the goal is to create stunning visual effects that immerse players in the gaming environment.",
            "Immersive Gameplay: The incorporation of advanced 3D techniques enhances the overall gameplay experience by providing users with a visually engaging and captivating Pong game.",
            "Technology Integration: The chosen technology for this module is Babylon.js. These tools will be used to create the 3D graphics, ensuring compatibility and optimal performance.",
        ],
    },
    {
        id: 21,
        type: "Minor",
        title: "Support on all devices.",
        description: "In this module, the main focus is to ensure that your website works seamlessly on all types of devices. Key features and objectives include:",
        tasks: [
            "Ensure the website is responsive, adapting to different screen sizes and orientations, providing a consistent user experience on desktops, laptops, tablets, and smartphones.",
            "Ensure that users can easily navigate and interact with the website using different input methods, such as touchscreens, keyboards, and mice, depending on the device they are using.",
        ],
    },
    {
        id: 22,
        type: "Minor",
        title: "Expanding Browser Compatibility.",
        description: "In this minor module, the objective is to enhance the compatibility of the web application by adding support for an additional web browser. Key features and objectives include:",
        tasks: [
            "Extend browser support to include an additional web browser, ensuring that users can access and use the application seamlessly.",
            "Conduct thorough testing and optimization to ensure that the web application functions correctly and displays correctly in the newly supported browser.",
            "Address any compatibility issues or rendering discrepancies that may arise in the added web browser.",
            "Ensure a consistent user experience across all supported browsers, maintaining usability and functionality.",
        ],
    },
    {
        id: 23,
        type: "Minor",
        title: "Multiple language support.",
        description: "In this minor module, the objective is to ensure that your website supports multiple languages to cater to a diverse user base. Key features and goals include:",
        tasks: [
            "Implement support for a minimum of three languages on the website to accommodate a broad audience.",
            "Provide a language switcher or selector that allows users to easily change the website's language based on their preferences.",
            "Translate essential website content, such as navigation menus, headings, and key information, into the supported languages.",
            "Ensure that users can navigate and interact with the website seamlessly, regardless of the selected language.",
            "Consider using language packs or localization libraries to simplify the translation process and maintain consistency across different languages.",
            "Allow users to set their preferred language as the default for subsequent visits.",
        ],
    },
    {
        id: 24,
        type: "Minor",
        title: "Add accessibility for Visually Impaired Users.",
        description: "In this minor module, the goal is to make your website more accessible for visually impaired users. Key features include:",
        tasks: [
            "Support for screen readers and assistive technologies.",
            "Clear and descriptive alt text for images.",
            "High-contrast color scheme for readability.",
            "Keyboard navigation and focus management.",
            "Options for adjusting text size.",
            "Regular updates to meet accessibility standards.",
        ],
    },
    {
        id: 25,
        type: "Minor",
        title: "Server-Side Rendering (SSR) Integration.",
        description: "In this minor module, the focus is on integrating Server-Side Rendering (SSR) to enhance the performance and user experience of your website. Key objectives include:",
        tasks: [
            "Implement SSR to improve the website's loading speed and overall performance.",
            "Ensure that content is pre-rendered on the server and delivered to users' browsers for faster initial page loads.",
            "Optimize SEO by providing search engines with pre-rendered HTML content.",
            "Maintain a consistent user experience while benefiting from the advantages of SSR.",
        ],
    },
    {
        id: 26,
        type: "Major",
        title: "Replace basic Pong with server-side Pong and implement an API.",
        description: "In this major module, the goal is to replace the basic Pong game with a server- side Pong game, accompanied by the implementation of an API. Key features and objectives include:",
        tasks: [
            "Develop server-side logic for the Pong game to handle gameplay, ball movement, scoring, and player interactions.",
            "Create an API that exposes the necessary resources and endpoints to interact with the Pong game, allowing partial usage of the game via the Command-Line Interface (CLI) and web interface.",
            "Design and implement the API endpoints to support game initialization, player controls, and game state updates.",
            "Ensure that the server-side Pong game is responsive, providing an engaging and enjoyable gaming experience.",
            "Integrate the server-side Pong game with the web application, allowing users to play the game directly on the website.",
        ],
    },
    {
        id: 27,
        type: "Major",
        title: "Enabling Pong gameplay via CLI against web users with API integration",
        description: "In this major module, the goal is to develop a Command-Line Interface (CLI) that allows users to play Pong against players using the web version of the game. The CLI should connect to the web application seamlessly, enabling CLI users to join and interact with web players. Key features and objectives include:",
        tasks: [
            "Create a robust CLI application that replicates the Pong gameplay experience available on the website, providing CLI users with the ability to initiate and participate in Pong matches.",
            "Utilize the API to establish communication between the CLI and the web application, enabling CLI users to connect to the site and interact with web players.",
            "Develop a user authentication mechanism within the CLI, allowing CLI users to log in to the web application securely.",
            "Implement real-time synchronization between the CLI and web users, ensuring that gameplay interactions are seamless and consistent.",
            "Enable CLI users to join and create Pong matches with web players, facilitating cross-platform gameplay.",
            "Provide comprehensive documentation and guidance on how to use the CLI effectively for Pong matches against web users."
        ]
    }
];


export function GetModulesByIds(ids: number[]): Task[] {
    if (!Array.isArray(ids)) return [];
    return tasks.filter(task => ids.includes(task.id));
}