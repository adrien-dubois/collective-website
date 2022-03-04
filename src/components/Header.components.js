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
`;

export const HeaderDiv = styled.header`
  font-size: 16px;
  position: fixed;
  z-index: 99;
  width: 100%;
  font-weight: "700";

  > ${Container} {
    > ${Row} {
      height: 128px;
    }
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  border-radius: 100%;
  border: 1px solid var(--black-chocolate);
  height: 80px;
  width: 80px;
  display: flex;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--almond-bg);
    background: var(--black-chocolate);
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

export const NavMenu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    z-index: 90;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? '-12%' : '-100%')};
    opacity: ${({click}) =>(click ? '1' : 0)};
    transition: all 0.5s ease;
    background: var(--almond-bg);
`;

export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: calc(100vh - 13rem);
    position: relative;
    justify-content: center;

    @media screen and (min-width: 53em) {
      height: 100vh;
    }
`;