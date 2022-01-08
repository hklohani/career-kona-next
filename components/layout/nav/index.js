import Link from "next/link"
const Nav = () => {
    return (
        <>
            <Link href="/"><a>user</a></Link>{"  "}
            <Link href="/Admin"><a>admin</a></Link>{"  "}
            <Link href="/Admin/add-post"><a>Add Post</a></Link>
        </>
    )
}
export default Nav;