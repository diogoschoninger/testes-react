import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 32px;

  display: grid;
  gap: 24px;
  grid-template-columns: 296px 1fr;
  grid-template-areas: "sidebar content";
`;

export const Sidebar = styled.div`
  grid-area: sidebar
`;

export const Content = styled.div`
  grid-area: content;
`;

export const ImgProfile = styled.img`
  width: 296;
  height: 296px;
  border-radius: 50%;
  border: 1px solid #768390;
`;

export const Title1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #adbac7;
`;

export const CardNames = styled.div`
  padding: 16px 0;
`;

export const SpanName = styled.span`
  display: block;
  font-size: 26px;
  font-weight: 600;
  color: #adbac7;
`;

export const SpanNickname = styled.span`
  display: block;
  font-size: 20px;
  font-weight: 300;
  color: #768390;
`;

export const DivBio = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  color: #adbac7;
`;

export const DivFollowers = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const DivLocation = styled.div` 
  font-size: 14px;
  color: #adbac7;
`;

export const Repo = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #373e47;
`;

export const LinkReposName = styled.a`
  color: blue;
  font-size: 20px;
  font-weight: 600;
  color: #539bf5;
`;

export const ReposDescription = styled.p`
  font-size: 14px;
  margin: 8px 0;
  color: #768390;
`;

export const ReposDetail = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #768390;
`;