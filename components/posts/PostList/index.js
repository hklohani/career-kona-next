import PostItem from "../PostItem";
const PostList = (props) => {
  return (
    <ul className="{classes.list}">
      {props.posts.map((post) => {
        return (
          <PostItem
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </ul>
  );
};

export default PostList;
