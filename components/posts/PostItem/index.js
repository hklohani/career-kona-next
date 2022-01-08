import { useRouter } from "next/router"

const PostItem = ({id, title}) => {
    const router = useRouter()

    const showDetails = () => {
        router.push('Admin/'+ id)
    }
    return(
        <>
            <h1 onClick={showDetails}>{title}</h1>
        </>
    )
}
export default PostItem