import {getUser} from "@/requests/getUser";
import {getUserAlbums} from "@/requests/getUserAlbums";
import {getUsers} from "@/requests/getUsers";

export default async function UserDetail({params}) {
    const userRes = getUser(params['userId']) // it takes 5 sec.
    const userAlbumsRes = getUserAlbums(params['userId']) // it takes 3 sec.

    const [userData, albumsData] = await Promise.all([userRes, userAlbumsRes]) // it takes 5 sec (instead of 8 sec)

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
            <h2>User albums: </h2>
            {albumsData.map(album => {
                return (
                    <div>
                        <h3>{album.title}</h3>
                    </div>
                )
            })}
        </div>
    </>
}

// Return a list of `params` to populate the [userId] dynamic segment
export async function generateStaticParams() {
    const users = await getUsers()

    return users.map((user) => ({
        userId: String(user.id)
    }))
}
