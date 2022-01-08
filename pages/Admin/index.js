import { MongoClient } from "mongodb";
import Nav from "../../components/layout/nav";
import PostList from "../../components/posts/PostList";
import Head from "next/head";

const Admin = (props) => {
  return (
    <>
      <Head>
        <title>Career Kona</title>
        <meta name="description" content="Get Current affairs for today" />
      </Head>
      <Nav />
      <br />
      <PostList posts={props.posts} />
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://hklohani:hklohani@cluster0.iat4x.mongodb.net/postsList?retryWrites=true&w=majority"
  );
  const db = client.db();
  const postsCollection = db.collection("posts");

  const posts = await postsCollection.find().toArray();
  client.close();

  return {
    props: {
      posts: posts.map((post) => ({
        title: post.title,
        description: post.description,
        id: post._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Admin;
