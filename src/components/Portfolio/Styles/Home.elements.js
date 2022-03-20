import styled from 'styled-components';

export const Div = styled.div`
    overscroll-behavior: none;
`;

export const SectionProject = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 8rem 0 max(5vh, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: var(--almond-bg);
    position: relative;

    &:nth-child(2n+0){
        background-color: var(--black-chocolate);
    }
`;
