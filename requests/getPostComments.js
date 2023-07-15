export async function getPostComments(postId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)

    if (!res.ok) {
        throw new Error('Failed to fetch users')
    }

    return res.json()
}