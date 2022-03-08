import styled from 'styled-components';

export const Section = styled.section`
    height: 50vh;
    background-color: var(--white-alabaster);
    padding-left: 0 10rem;
    position: relative;
    /* overflow: hidden; */
    .background{
        position: absolute;
        left: 0;
        bottom: -30%;
        img{
            height: 32rem;
            z-index: 2;
        }
    }
    .milestones{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        color: var(--black-chocolate);
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
                font-size: 5rem;
                font-weight: bolder;
                line-height: 3rem;
            }
            span {
                text-transform: uppercase;
                color: var(--light-chocolate);
            }

        }
    }
`;