export async function getUserAlbums(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch users')
    }

    return res.json()
}