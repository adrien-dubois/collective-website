import styled from "styled-components";

export const SocialNetContainer = styled.div`
  position: absolute;
  right: 1rem;
  top: 0;
  width: 20%;
  font-size: 1.2rem;

  @media screen and (max-width: 650px){
    width: 30%;
  }
`;

export const Content = styled.ul`
    display: flex;
    width: 100%;
    min-width: 100px;
    justify-content: space-around;

    @media screen and (max-width: 450px){
      min-width: 100%;
    }
`;

export const SLink = styled.a`
    padding: 1rem;
    transition: 1.1s ease-out;
`;