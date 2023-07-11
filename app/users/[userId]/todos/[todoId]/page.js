export default function TodoDetail({params}) {
    return (
        <h1>
            todo {params.todoId} for user {params.userId}
        </h1>
    );
}