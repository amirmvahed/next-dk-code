import Link from 'next/link'
import {getUsers} from "@/requests/getUsers";


export default async function Users() {
    const users = await getUsers()

    return (
        <ul>
            {users?.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    )
}