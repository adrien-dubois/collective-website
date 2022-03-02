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

    >${Container}{
        >${Row}{
            height: 128px;
        }
    }
`;

export const Menu = styled.div`
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid var(--black-chocolate);
    height: 80px;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;

    &:hover {
        color: var(--almond-bg);
        background: var(--black-chocolate);
    }
`;