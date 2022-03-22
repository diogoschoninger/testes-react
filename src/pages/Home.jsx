import { useState } from "react";
import {
  Container,
  Title1,
  Input,
  Button,
  Title2,
  LinkUser
} from "../styles/Home";

export function Home() {
  const [user, setUser] = useState("");
  const [result, setResult] = useState({
    status: null,
    body: ""
  });

  const searchUser = async e => {
    e.preventDefault();

    await fetch("https://api.github.com/users/" + user)
      .then(response => response.json())
      .then(response => {
        if (response.message === "Not Found") {
          setResult({
            status: "not-found",
            body: <Title2>Não existe nenhum usuário com esse login!</Title2>
          })
        } else {
          setResult({
            status: "ok",
            body:
              <div>
                <Title2>Usuário encontrado:</Title2>
                <LinkUser href={"/user/" + response.login}>{response.login}</LinkUser>
              </div>
          })
        }
      })
      .catch(() => {
        setResult({
          status: "erro",
          body: <Title2>Houve um erro com a busca, tente novamente</Title2>
        })
      });
  }

  return (
    <Container>
      <Title1 style={{color: '#adbac7', fontWeight: 600}}>Consulta GitHub</Title1>
      <form onSubmit={searchUser}>
        <Input type="text" placeholder="Busque por um usuário..." onChange={e => setUser(e.target.value)}/>
        <Button type="submit">Buscar</Button>
      </form>
      {result.status !== "erro" ? result.body : null}
    </Container>
  );
}
