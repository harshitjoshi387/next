"use client"

type User = {
    id: number;
    name: string;
    username: string;
}

import { useState } from "react";

export default function FilterUsers({ users }: { users: User[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.username})
                    </li>
                ))}
            </ul>
        </div>
    );
}