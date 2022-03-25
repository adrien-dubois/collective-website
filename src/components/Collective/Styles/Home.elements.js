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
      position: absolute;
      top: 15%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 20rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          font-family: var(--maragsa-font);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
      }
      .sub-title{
        h3{
          font-size: 2rem;
          font-family: var(--ubuntu-font);
          font-weight: 600;
          text-transform: uppercase;
          font-style: italic;
        }
      }
      .subtitle {
        color: var(--light-chocolate);
        width: 80%;
        padding: 14px 12px;
        border-radius: 25px;
        background: #ffffff60;
        p {
          margin-bottom: 2rem;

        }
        span{
          margin-top: 5px;
          font-style: italic;
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

  @media screen and (min-width: 1080px) and (max-width: 1600px){
    width: 110vw;
    .home {
      .content{
        width: 90%;
        top: 5%;
      }
    }
    .info {
        position: absolute;
        bottom: -12rem;
        right: 7.5rem;
        padding: 1.5rem;
    }
  }


  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: initial;
    .home{
      .content{
        position: initial;
        padding-top: 6rem;
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title{
          h1{
            font-size: 2.7rem;
            line-height: 3rem;
          }
        }
        .subtitle{
          p{
            font-size: .8rem;
          }
        }
      }
    }
    .info{
      position: initial;
      bottom: -6rem;
      padding: 4rem;
      border-radius: 15px;
      .grid{
        grid-template-columns: 1fr;
        .col{
          strong, p{
            font-size: .8rem;
          }
        }
      }
    }
  }

`;