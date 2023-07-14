export async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') //  use cache: 'no-cache' for disable caching

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch users')
    }

    return res.json()
}