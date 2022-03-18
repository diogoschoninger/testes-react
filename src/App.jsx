import { useEffect, useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      await fetch("https://api.github.com/users/diogoschoninger/repos")
        .then(response => response.json())
        .then(responsejson => {
          setRepos(responsejson);
        });
    }
    getRepos();
  })

  return (
    <div>
      <h1>Repositórios</h1>
      <ul>
        {repos.map(repos => {
          <li>{repos}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
