import styled from "styled-components";

export const Div = styled.div`
    position: relative;
    z-index: 50;
    h1 {
        position: absolute;
        transform: translateX(-47%) translateY(20vw) rotate(-90deg);
        font-size: 7rem;
        text-transform: uppercase;
        color: var(--light-chocolate);
        font-family: var(--poppins-font);
        font-weight: 100;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        display: none;
    }
`;