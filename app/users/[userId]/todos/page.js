import {getUser} from "@/requests/getUser";
import {getUserTodos} from "@/requests/getUserTodos";
import {Suspense} from 'react'

export default async function UserTodos({params}) {
    const userRes = getUser(params['userId'])
    const todosRes = getUserTodos(params['userId'])

    const [user] = await userRes


    return (
        <>
            <h1>User Todos page</h1>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <hr/>
            <div>
                <h2>User todos</h2>
                {/* Send the todos information first, and wrap todos in a suspense boundary */}
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Todos promise={todosRes}/>
                </Suspense>
            </div>
        </>
    );
}


async function Todos({promise}) {
    // Wait for the albums promise to resolve
    const todos = await promise

    return (
        <ul>
            {todos.map((todo) => (
                <li style={{backgroundColor: todo['completed'] ? 'lightgreen' : 'red'}} key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
}