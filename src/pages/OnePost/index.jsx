import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import "./styles.css";

export function OnePost() {
  const [post, setPosts] = useState({});

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`/posts/${id}`)
      .then((response) => setPosts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="onePostContainer">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
