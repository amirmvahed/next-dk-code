import Link from 'next/link'
import {getUser} from "@/requests/getUsers";


export default async function Users() {
    const users = await getUser()

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