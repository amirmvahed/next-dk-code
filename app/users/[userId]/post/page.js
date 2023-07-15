import {Suspense} from 'react'
import {getUserPosts} from "@/requests/getUserPosts";
import {getPostComments} from "@/requests/getPostComments";

export default async function UserPosts({params}) {
    const userFirstPost = await getUserPosts(params['userId'])
    const postData = userFirstPost[0]

    return (
        <>
            <h1>{postData.title}</h1>
            <p>{postData.body}</p>
            <hr/>
            <Suspense fallback={<div>Loading...</div>}>
                <Comments postId={postData.id} />
            </Suspense>
        </>

    );
}
async function Comments({ postId }) {
    // Wait for the comments
    const postComments = await getPostComments(postId)

    return (
        <ul>
            {postComments.map((comment) => (
                <li key={comment.id}>{comment.body}</li>
            ))}
        </ul>
    )
}