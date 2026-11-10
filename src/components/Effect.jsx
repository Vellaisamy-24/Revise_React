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
  const [userId, setUserId] = useState(0);
  const [Id, setId] = useState(0);
  const [title, setTitle] = useState(0);
  const AddPost = () => {
    const newPost = {
      userId: userId,
      id: Id,
      title: title,
    };
    setPosts((prev) => [...prev, newPost]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="userId"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={(e) => AddPost()}>Add Post</button>
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
