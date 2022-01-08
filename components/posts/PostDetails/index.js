const PostDetail = ({data}) => {
    return(
        <>
            <h1>{data.description}</h1>
            <p>{data.title}</p>
        </>
    )
}
export default PostDetail