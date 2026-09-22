type User = {
    id: number;
    name: string;
    username: string;
}

import FilterUsers from "@/components/Filter";

export default async function Classroom() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    return (
        <main>
            <h1>Hello From Classroom</h1>
            <p>This is the classroom page of the application</p>
            <FilterUsers users={users} />
        </main>
    )
}