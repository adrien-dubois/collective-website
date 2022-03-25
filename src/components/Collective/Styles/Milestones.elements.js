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

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        width: 110vw;
        margin: 2rem 0;
        height: 45vh;
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        width: initial;
        height: 35vh;
        padding: 5rem 2rem;
        min-height: 100vh;
        height: 100%;
        .milestones{
            grid-template-columns: 1fr;
            gap: 5rem;
            .milestone{
                &:nth-child(2){
                    padding: 1.5rem 0;
                    border-top: 2px solid var(--black-chocolate);
                    border-bottom: 2px solid var(--black-chocolate);
                }
            }
        }
    }
`;