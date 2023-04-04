import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData(); // we use loader data here
  /*
  const [isFetching, setIsFetching] = useState(false); // for loading spinners

  // we cannot use fetch to get all posts bcz if do so then it will cause an infinite loop, as state update react component re-renders and then again this function will call fetch for get method and this loop will continue, so instead we use another react hook useEffect
  // useEffect is used where we directly dont manupulate react JSX code but may be in future we do so, with this we can be saved from infinite loop

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPosts();
  }, []); // it takes 2 arguments , 1- function, 2- Array, 1- this function will be executed by react whenever it considers effect to require execution, and this function doesnt return anything , we can have another async function inside it which handle promise, so sometimes it exute and sometimes it doesn't , but when does it executes ?, that is controlled by 2nd argument (Array), 2- this array defines dependencies, dependencies are function or variable defined outside this useEffect function and that variable or function changes and recieved a new value this effect function will be executed, with empty arrays we are telling there is no dependencies, this effect function will only be executed once
*/

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              id={post.id}
              key={post.body}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
