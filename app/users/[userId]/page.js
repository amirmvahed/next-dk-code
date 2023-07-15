import {getUserPosts} from "@/requests/getUserPosts";
import {getUser} from "@/requests/getUser";

export default async function UserDetail({params}) {
    const userRes = getUser(params['userId']) // it takes 5 sec.
    const userPostsRes = getUserPosts(params['userId']) // it takes 3 sec.

    const [userData, postsData] = await Promise.all([userRes, userPostsRes]) // it takes 5 sec (instead of 8 sec)

    const [user] = userData


    return <>
        <h1>User Page</h1>
        <div>
            <h2>User details: </h2>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
        <hr/>
        <div>
            <h2>User posts: </h2>
            {postsData.map(post => {
                return (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </div>
    </>
}