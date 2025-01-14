import { useCreatePostMutation, useGetPostsQuery } from "../state/posts/postApiSlice"


const PostsList = () => {
    const { data: posts, isLoading, isError, error } = useGetPostsQuery({ limit: 5, offset: 0 });
    const [createPostMutation, { isLoading: isCreatingPost }] = useCreatePostMutation();
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error: {JSON.stringify(error)}</div>
    }
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts?.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <button onClick={()=>{createPostMutation({title: "Hello"})}}>{isCreatingPost ? "Creating": "Create Post"}</button>
        </div>
    )
}

export default PostsList