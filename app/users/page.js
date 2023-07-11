import Link from 'next/link'

const users = [
    {
        id: '1',
        name: 'amir'
    },
    {
        id: '2',
        name: 'ali'
    },
    {
        id: '3',
        name: 'maryam'
    },
    {
        id: '4',
        name: 'zahra'
    },
]

export default function Users() {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    )
}