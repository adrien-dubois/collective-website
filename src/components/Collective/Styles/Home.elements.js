import styled from 'styled-components';
import Wallpaper from "../../../assets/img/collective/wallpaper.svg"

export const Section = styled.section`
  background-image: url(${Wallpaper});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 20rem;
      margin-top: 12rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info{
    position: absolute;
    bottom: -1rem;
    right: 0;
    background-color: #D0AF8F;
    border-radius: 15px 0 0 15px;
    padding: 2.5rem;
    .grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
    }
  }
`;