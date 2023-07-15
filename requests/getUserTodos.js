export async function getUserTodos(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch users')
    }

    return res.json()
}