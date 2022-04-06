import styled from 'styled-components';

export const Div = styled.section`
        /* position: relative; */
        color: var(--light-chocolate);
        height: 100vh;
        overscroll-behavior: none;
        background-color: var(--black-chocolate);

        @media screen and (max-width: 960px) {
            display: none;
        }
    
        .gallery-counter{
            position: absolute;
            top: 10%;
            left: 100px;
            z-index: 1;
            mix-blend-mode: difference;
            line-height: 16px;
            color: var(--marigold-bg);
            font-family: var(--ubuntu-font);
            font-weight: 600;
            font-size: 1rem;
            -webkit-font-smoothing: antialiased;
            display: inline-block;

            .divider{
                content: '';
                background-color: var(--white-antique);
                width: 6.25vw;
                margin: 7px 10px;
                height: 1px;
                display: inline-block;
            }
            @media screen and (min-width: 960px) and (max-width: 1600px){
                top: 14%;
            }
        }

        .page-title{
            position: absolute;
            top: 9rem;
            left: 5vw;
            white-space: nowrap;
            font-size: calc(4vw + 8rem);
            line-height: .975;
            color: #555;
            opacity: .1;

            font-family: var(--poppins-font);
            font-style: normal;
            font-weight: 600;
            text-transform: uppercase;

            &__offset{
                display: block;
                margin-left: 15%;
            }
        }
        .gallery{
            overscroll-behavior: none;
            height: 80vh;
            padding: 10vh 0;
            width: 400%;
            background-color: var(--black-chocolate);
            display: flex;
            flex-wrap: nowrap;
            @media screen and (min-width: 960px) and (max-width: 1600px){
                padding: 20vh 0 10vh 0;
            }

        }
        .gallery-item{
            width: 100%;
            height: 100%;
            position: relative;
        }
        .gallery-item-info{
            position: absolute;
            bottom: 10%;
            left: -9%;
            z-index: 1;
            transform: translateX(-20%);
            color: var(--almond-bg);

            &__title{
                /* text-shadow: 4px 4px 6px rgba(0, 0, 0, .4); */
                line-height: 6vw;
                font-family: var(--poppins-font);
                font-weight: 600;
                font-size: 6vw;
                -webkit-font-smoothing: antialiased;
            }
            &__subtitle{
                position: relative;
                line-height: 6vw;
                font-family: var(--maragsa-font);
                color: transparent;
                font-weight: 400;
                font-size: 6vw;
                -webkit-text-stroke: 2px var(--marigold-bg);
                -webkit-font-smoothing: antialiased;
            }
            &__category{
                position: relative;
                line-height: 24px;
                font-family: var(--poppins-font);
                font-weight: 400;
                font-size: 24px;
                margin-top: 2vh;
                /* text-shadow: 4px 4px 6px rgba(0, 0, 0, .4); */
                -webkit-font-smoothing: antialiased;
            }
            &__link{
                position: relative;
                bottom: -2rem;
                left: 5rem;
                span{
                    color: var(--black-chocolate);
                    background: var(--marigold-bg);
                    text-transform: uppercase;
                    padding: 10px 16px;
                    border-radius: 50px;
                    font-size: 1rem;
                    transition: all .3s ease-in;

                    &:hover{
                        color: var(--marigold-bg);
                        background: var(--black-chocolate);
                        letter-spacing: 1px;
                    }
                }

            }
            @media screen and (min-width: 960px) and (max-width: 1600px){
                &__title,
                &__subtitle{
                    font-size: 4.5vw;
                }
                &__category{
                    font-size: 1.2rem;
                    text-transform: uppercase;
                }
            }
        }

        .gallery-item-wrapper{
            aspect-ratio: 16/9;
            height: 100%;
            display: grid;
            grid-template-columns: 20vw 1fr 200px;
            width: 100vw;
            will-change: transform;
            &.is-reveal {
                .gallery-item-image {
                    transform: scale(1);
                    filter: none;
                }
            }
            @media screen and (min-width: 960px) and (max-width: 1600px){
                grid-template-columns: 24vw 1fr 200px;
            }
        }

        .gallery-item-image{
            background-size: cover;
            background-position: top;
            transform-origin: center;
            width: 100%;
            height: 100%;
            position: absolute;
            right: -18%;
            will-change: transform;
            transform: scale(0.7);
            transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
            filter: grayscale(100%) sepia(20%) brightness(80%);
            @media screen and (min-width: 960px) and (max-width: 1600px){
                top: 12%;
                width: 430px;
                right: -24%;
            }
        }

        progress{
            position: relative;
            left: 10%;
            bottom: -6%;
            width: 500px;
            height: 14px;
        }

        progress[value]::-webkit-progress-bar{
            background: rgba(255,255,255,0.1);
            border-radius: 100px;
        }

        progress[value]::-webkit-progress-value{
            border-radius: 100px;
            height: 14px;
            box-shadow: 0 10px 40px -3px var(--marigold-bg);
            background: var(--marigold-bg);
        }

            /* progress::after{
                content: '0%';
                position: absolute;
                bottom: -1.5rem;
                left: 25rem;
                color: var(--marigold-bg);
            } */

        .progress{ 
            position: absolute;
            bottom: 9%;
            left: 11%;
            color: var(--marigold-bg);
            span{
                &:last-child{
                    position: absolute;
                    left: 26rem;
                }
            }
        }
        
    
`;