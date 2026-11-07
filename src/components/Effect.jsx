import { useEffect, useState } from "react";
import axios from "axios";
const Effect = () => {
  useEffect(() => {
    fetchPost();
  }, []);
  const [post, setPosts] = useState([]);

  const fetchPost = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Posts</h1>
      <table border="1">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {post.map((data, id) => (
            <tr key={id}>
              <td>{data.userId}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Effect;
