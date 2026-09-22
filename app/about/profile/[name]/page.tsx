type ProfilePageProps = {
    params: Promise<{ name: string }>
}

export default async function ProfilePage({ params }: ProfilePageProps) {
    const { name } = await params;

    const users = [
        {
            id: 1,
            name: "rohan",
            email: "rohan.gupta@gmail.com",
            bio: "software engineer"
        },
        {
            id: 2,
            name: "priya",
            email: "priya.sharma@gmail.com",
            bio: "frontend developer"
        },
        {
            id: 3,
            name: "amit",
            email: "amit.verma@gmail.com",
            bio: "backend developer"
        },
        {
            id: 4,
            name: "neha",
            email: "neha.singh@gmail.com",
            bio: "ui/ux designer"
        },
        {
            id: 5,
            name: "karan",
            email: "karan.mehta@gmail.com",
            bio: "full stack developer"
        }
    ]

    const user = users.find((u) => u.name === name);

    return (
        <div>
            <h1>{user ? `${user.name}'s Profile Page` : "User not found"}</h1>
            {user && (
                <>
                    <p>Email: {user.email}</p>
                    <p>Bio: {user.bio}</p>
                </>
            )}
        </div>
    )
}