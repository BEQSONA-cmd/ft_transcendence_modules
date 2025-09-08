export interface Module {
    id: number;
    name: string;
    type: "Major" | "Minor";
    percent: number;
    point: number;
}

export const modules: Module[] = [
    { id: 1, name: "Backend framework", type: "Major", percent: 10, point: 1 },
    { id: 2, name: "Frontend framework", type: "Minor", percent: 5, point: 0.5 },
    { id: 3, name: "Database", type: "Minor", percent: 5, point: 0.5 },
    { id: 4, name: "Tournament in the Blockchain", type: "Major", percent: 10, point: 1 },
    { id: 5, name: "User management", type: "Major", percent: 10, point: 1 },
    { id: 6, name: "Remote authentication", type: "Major", percent: 10, point: 1 },
    { id: 7, name: "Remote players", type: "Major", percent: 10, point: 1 },
    { id: 8, name: "Multiplayer", type: "Major", percent: 10, point: 1 },
    { id: 9, name: "Another game", type: "Major", percent: 10, point: 1 },
    { id: 10, name: "Game customization", type: "Minor", percent: 5, point: 0.5 },
    { id: 11, name: "Live chat", type: "Major", percent: 10, point: 1 },
    { id: 12, name: "AI opponent", type: "Major", percent: 10, point: 1 },
    { id: 13, name: "Stats dashboards", type: "Minor", percent: 5, point: 0.5 },
    { id: 14, name: "WAF/ModSecurity and Vault", type: "Major", percent: 10, point: 1 },
    { id: 15, name: "GDPR compliance", type: "Minor", percent: 5, point: 0.5 },
    { id: 16, name: "2FA and JWT", type: "Major", percent: 10, point: 1 },
    { id: 17, name: "Log management", type: "Major", percent: 10, point: 1 },
    { id: 18, name: "Monitoring system", type: "Minor", percent: 5, point: 0.5 },
    { id: 19, name: "Microservices backend", type: "Major", percent: 10, point: 1 },
    { id: 20, name: "Advanced 3D techniques", type: "Major", percent: 10, point: 1 },
    { id: 21, name: "Device support", type: "Minor", percent: 5, point: 0.5 },
    { id: 22, name: "Browser compatibility", type: "Minor", percent: 5, point: 0.5 },
    { id: 23, name: "Multiple languages", type: "Minor", percent: 5, point: 0.5 },
    { id: 24, name: "Accessibility features", type: "Minor", percent: 5, point: 0.5 },
    { id: 25, name: "SSR integration", type: "Minor", percent: 5, point: 0.5 },
    { id: 26, name: "Server-side Pong and API", type: "Major", percent: 10, point: 1 },
    { id: 27, name: "CLI gameplay", type: "Major", percent: 10, point: 1 },
];
