import { useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);
  async function getRepos() {
    await fetch("https://api.github.com/users/diogoschoninger/repos")
      .then(response => response.json())
      .then(responsejson => {
        setRepos(responsejson);
      });
  }

  getRepos();

  return (
    <div>
      <h1>Repositórios</h1>
      <ul>
        {repos.map(repos => {
          return (
            <li key={repos.id}>
              <a href={repos.html_url}>{repos.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
