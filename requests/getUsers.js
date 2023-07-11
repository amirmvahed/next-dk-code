export async function getUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return await res.json()
}