import styled from 'styled-components';

export const Div = styled.div`
    height: 400vh;
    font-size: 62.5%;

    .page-title{
        position: fixed;
        top: 9rem;
        left: 5vw;
        z-index: -1;

        white-space: nowrap;
        font-size: calc(4vw + 8rem);
        line-height: .975;
        color: var(--light-chocolate);
        font-family: var(--ubuntu-font);

        opacity: .1;

        &__offset{
            display: block;
            margin-left: 15%;
        }
    }

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100vh;
        z-index: 5;

        .slideshow{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            outline: none;

            .slideshow-list{
                position: fixed;
                display: flex;
                align-items: center;
                height: 100%;¨
            }
        }
    }
`;
