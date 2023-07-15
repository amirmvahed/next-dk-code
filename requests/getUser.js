export async function getUser(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch users')
    }

    return res.json()
}