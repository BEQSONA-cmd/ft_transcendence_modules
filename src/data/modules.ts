export interface Module {
    name: string;
    type: "Major" | "Minor";
    points: number;
}

export const modules: Module[] = [
    { name: "Backend framework", type: "Major", points: 10 },
    { name: "Frontend framework", type: "Minor", points: 5 },
    { name: "Database", type: "Minor", points: 5 },
    { name: "Tournament in the Blockchain", type: "Major", points: 10 },
    { name: "User management", type: "Major", points: 10 },
    { name: "Remote authentication", type: "Major", points: 10 },
    { name: "Remote players", type: "Major", points: 10 },
    { name: "Multiplayer", type: "Major", points: 10 },
    { name: "Another game", type: "Major", points: 10 },
    { name: "Game customization", type: "Minor", points: 5 },
    { name: "Live chat", type: "Major", points: 10 },
    { name: "AI opponent", type: "Major", points: 10 },
    { name: "Stats dashboards", type: "Minor", points: 5 },
    { name: "WAF/ModSecurity and Vault", type: "Major", points: 10 },
    { name: "GDPR compliance", type: "Minor", points: 5 },
    { name: "2FA and JWT", type: "Major", points: 10 },
    { name: "Log management", type: "Major", points: 10 },
    { name: "Monitoring system", type: "Minor", points: 5 },
    { name: "Microservices backend", type: "Major", points: 10 },
    { name: "Advanced 3D techniques", type: "Major", points: 10 },
    { name: "Device support", type: "Minor", points: 5 },
    { name: "Browser compatibility", type: "Minor", points: 5 },
    { name: "Multiple languages", type: "Minor", points: 5 },
    { name: "Accessibility features", type: "Minor", points: 5 },
    { name: "SSR integration", type: "Minor", points: 5 },
    { name: "Server-side Pong and API", type: "Major", points: 10 },
    { name: "CLI gameplay", type: "Major", points: 10 },
];
