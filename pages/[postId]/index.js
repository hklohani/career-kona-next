import PostDetail from "../../components/posts/PostDetails";

import { MongoClient, ObjectId } from "mongodb";

const PostDetails = (props) => {
  return <PostDetail data={props.postData} />;
};

export async function getStaticPaths() {

  const client = await MongoClient.connect(
    "mongodb+srv://hklohani:hklohani@cluster0.iat4x.mongodb.net/postsList?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postsCollection = db.collection("posts");
  const posts = await postsCollection.find({}, {_id: 1}).toArray();

  client.close()

  return {
    fallback: false,
    paths: posts.map(post => ({ params:{ postId: post._id.toString() } }))
  };
}

export async function getStaticProps(context) {
  const postId = context.params.postId;

  const client = await MongoClient.connect(
    "mongodb+srv://hklohani:hklohani@cluster0.iat4x.mongodb.net/postsList?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postsCollection = db.collection("posts");

  const selectedPost = await postsCollection.findOne({_id: ObjectId(postId)})
  client.close()


  return {
    props: {
      postData: {
          id: selectedPost._id.toString(),
          title: selectedPost.title,
          description: selectedPost.description
      },
    },
  };
}

export default PostDetails;
