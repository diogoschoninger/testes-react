import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Sidebar,
  Content,
  ImgProfile,
  Title1,
  CardNames,
  SpanName,
  SpanNickname,
  DivBio,
  DivFollowers,
  DivLocation,
  Repo,
  LinkReposName,
  ReposDescription,
  ReposDetail
} from "../styles/Profile";
import "../styles/Profile.css";

export function Profile() {
  const user = useParams().user;
  const [userData, setUserData] = useState({});
  const [repos, setRepos] = useState({});

  const getUser = async () => {
    await fetch("https://api.github.com/users/" + user)
      .then(result => result.json())
      .then(result => {
        if (result.message === "Not Found") {
          window.location.href = "http://localhost:3000";
        }
        setUserData(result)
      });
  }

  const getRepos = async () => {
    await fetch("https://api.github.com/users/" + user + "/repos")
      .then(result => result.json())
      .then(result => setRepos(result));
  }

  useEffect(() => {
    getUser();
    getRepos();
  }, []);

  return(
    <Container>
      <Sidebar>
        <ImgProfile src={userData.avatar_url}/>
        <CardNames>
          <SpanName>{userData.name}</SpanName>
          <SpanNickname>{userData.login}</SpanNickname>
        </CardNames>
        <div>
          <DivBio>{userData.bio}</DivBio>
          <DivFollowers>
            <span style={{color: '#768390'}}><strong style={{color: '#adbac7'}}>{userData.followers}</strong> followers</span>
            · 
            <span style={{color: '#768390'}}><strong style={{color: '#adbac7'}}>{userData.following}</strong> following</span>
          </DivFollowers>
          <DivLocation>{userData.location}</DivLocation>
        </div>
      </Sidebar>
      <Content>
        <Title1>Repositórios</Title1>
        {Object.values(repos).map(repos => (
          <Repo key={repos.id}>
            <LinkReposName href={repos.html_url} target="blank">{repos.name}</LinkReposName>
            <ReposDescription>{repos.description}</ReposDescription>
            <ReposDetail>
              {repos.language}
            </ReposDetail>
          </Repo>
        ))}
      </Content>
    </Container>
  );
}
