import { useNavigate } from "react-router-dom";
import { Form } from "../../components/Form";
import { api } from "../../lib/axios";
import "./styles.css";

export function CreatePost() {
  const navigate = useNavigate();

  function handleCreatePost(data) {
    api.post("/posts", data);
    console.log("criado com sucesso");
    Navigate("/");
  }

  return (
    <div>
      <Form
        title={"Criar Publicação"}
        textButton={"criar"}
        onAction={handleCreatePost}
      />
    </div>
  );
}
