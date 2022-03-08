import styled from 'styled-components';

export const Section = styled.section`
    height: 35vh;
    background-color: var(--white-alabaster);
    padding-left: 0 10rem;
    position: relative;
    overflow: hidden;
    }
    .milestones{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: var(--light-chocolate);
        align-items: center;
        height: 100%;
        .milestone{
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            p {
                font-size: 2rem;
                font-weight: 300;
                line-height: 3rem;
            }
            span {
                text-transform: uppercase;
                font-style: italic;
                color: var(--light-chocolate);
                font-family: var(--ubuntu-font);
                font-weight: 500;
                font-size: 1.2rem;
            }

        }
    }
`;