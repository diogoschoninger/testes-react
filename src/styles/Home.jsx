import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 0 32px;
`;

export const Title1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #adbac7;
`;

export const Input = styled.input`
margin-top: 16px;
  padding: 5px 12px;
  font-size: 14px;
  line-height: 20px;
  color: #adbac7;
  background-color: #22272e;
  border: 1px solid #444c56;
  border-radius: 6px;
  outline: none;
`;

export const Button = styled.button`
  position: relative;
  text-align: center;
  color: #adbac7;
  background-color: #373e47;
  border: 1px solid #373e47;
  border-radius: 6px;
  transition: .2s cubic-bezier(.3, 0, .5, 1);
  transition-property: color, background-color, border-color;
  margin-left: 8px;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  ${this}:hover {
    background-color: #444c56;
    border-color: #768390;
    transition-duration: .1s;
  }
`;

export const Title2 = styled.h2`
  margin-top: 16px;
  font-size: 26px;
  font-weight: 600;
  color: #adbac7;
`;

export const LinkUser = styled.a`
  color: blue;
  font-size: 20px;
  font-weight: 600;
  color: #539bf5;
`;