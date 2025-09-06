export interface Module {
    name: string;
    type: "Major" | "Minor";
    percent: number;
    point: number;
}

export const modules: Module[] = [
    { name: "Backend framework", type: "Major", percent: 10, point: 1 },
    { name: "Frontend framework", type: "Minor", percent: 5, point: 0.5 },
    { name: "Database", type: "Minor", percent: 5, point: 0.5 },
    { name: "Tournament in the Blockchain", type: "Major", percent: 10, point: 1 },
    { name: "User management", type: "Major", percent: 10, point: 1 },
    { name: "Remote authentication", type: "Major", percent: 10, point: 1 },
    { name: "Remote players", type: "Major", percent: 10, point: 1 },
    { name: "Multiplayer", type: "Major", percent: 10, point: 1 },
    { name: "Another game", type: "Major", percent: 10, point: 1 },
    { name: "Game customization", type: "Minor", percent: 5, point: 0.5 },
    { name: "Live chat", type: "Major", percent: 10, point: 1 },
    { name: "AI opponent", type: "Major", percent: 10, point: 1 },
    { name: "Stats dashboards", type: "Minor", percent: 5, point: 0.5 },
    { name: "WAF/ModSecurity and Vault", type: "Major", percent: 10, point: 1 },
    { name: "GDPR compliance", type: "Minor", percent: 5, point: 0.5 },
    { name: "2FA and JWT", type: "Major", percent: 10, point: 1 },
    { name: "Log management", type: "Major", percent: 10, point: 1 },
    { name: "Monitoring system", type: "Minor", percent: 5, point: 0.5 },
    { name: "Microservices backend", type: "Major", percent: 10, point: 1 },
    { name: "Advanced 3D techniques", type: "Major", percent: 10, point: 1 },
    { name: "Device support", type: "Minor", percent: 5, point: 0.5 },
    { name: "Browser compatibility", type: "Minor", percent: 5, point: 0.5 },
    { name: "Multiple languages", type: "Minor", percent: 5, point: 0.5 },
    { name: "Accessibility features", type: "Minor", percent: 5, point: 0.5 },
    { name: "SSR integration", type: "Minor", percent: 5, point: 0.5 },
    { name: "Server-side Pong and API", type: "Major", percent: 10, point: 1 },
    { name: "CLI gameplay", type: "Major", percent: 10, point: 1 },
];
