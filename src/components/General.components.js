import styled from "styled-components";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  &.fluid {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1560px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  &.space-between {
    justify-content: space-between;
  }
  &.center {
    justify-content: center;
  }

  .image-container{
    .thumbnail{
      @media screen and (max-width: 1280px) {
        margin-top: 5rem;
      }
    }
  }

`;

export const Main = styled.main`
  > ${Container} {
    position: relative;
    > ${Row} {
      height: 100vh;
      align-items: center;
      .image-container {
        position: relative;
        .thumbnail {
          overflow: hidden;
          position: relative;
          .frame {
            img {
              width: 100%;
            }
          }
        }
        .information {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 20px;
          font-family: var(--ubuntu-font);
          font-weight: bolder;
          font-size: 1.1rem;
          .location {
            span:nth-child(2) {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 13rem);
    position: relative;
    justify-content: center;
    z-index: 1000;

    @media screen and (min-width: 53em) {
      height: 100vh;
    }
`;