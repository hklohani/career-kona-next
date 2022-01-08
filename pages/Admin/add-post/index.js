import { useRouter } from "next/router";
import NewPost from "../../../components/posts/NewPost";

const Add = () => {
  const router = useRouter()
    async function onAddPost(postData) {
        const response = await fetch('/api/add-post', {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        router.push('/Admin')
    }
  return <NewPost onAddPost={onAddPost}/>;
};
export default Add;
