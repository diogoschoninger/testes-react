import { useState } from "react";

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
            status: "ERRO",
            body: <span>Não existe nenhum usuário com esse login!</span>
          })
        } else {
          setResult({
            status: "OK",
            body:
              <div>
                <h2>Usuário encontrado</h2>
                <a href={"/user/" + response.login}>{response.login}</a>
              </div>
          })
        }
      });
  }

  return (
    <div>
      <div>
        <h1>Pesquise um usuário do GitHub</h1>
        <form onSubmit={searchUser}>
          <input type="text" onChange={e => setUser(e.target.value)}/>
          <button type="submit">Buscar</button>
        </form>
      </div>
      {result.status ? result.body : ""}
    </div>
  );
}
