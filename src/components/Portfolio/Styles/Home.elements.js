import styled from 'styled-components';
import Wallpaper from "../../../assets/img/portfolio/wallpaper.svg"

export const Container = styled.div`
    position: relative;
    overflow: clip visible;
    .nav__projects{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        background: var(--almond-dark);
        color: var(--white-antique);
        height: 8rem;
        transform: translateX(47%) translateY(45vw) rotate(90deg);

        &::after{
            content: '';
            position: absolute;
            top: 1.7rem;
            left: 0;
            width: 100%;
            height: 0.25rem;
            background: currentColor;
            pointer-events: none;
        }

        .marker{
            position: fixed;
            top: 1.75rem;
            left: 4rem;
            width: 1rem;
            height: 1rem;
            transform: translate3d(-50%, -50%, 0);
            background: var(--light-chocolate);
            border-radius: 100%;
            z-index: 2000;
            
            &::before{
                content: '';
                position: absolute;
                top: calc(50% - 0.2rem);
                right: 100%;
                width: 4rem;
                height: 0.4rem;
                background-color: var(--light-chocolate);
            }
        }

        &__track{
            position: relative;
            min-width: max(200rem, 200%) ;
            padding: 1.5rem max(100rem, 100%) 0 0;
            height: 8rem;

            &__list{
                list-style: none;
                margin: 0;
                padding: 0;

                display: flex;
                justify-content: space-between;
                color: var(--white-antique);

                &__link{
                    position: relative;
                    display: block;
                    min-width: 8rem;
                    padding: 2.5rem 1rem 0.5rem;
                    text-align: center;
                    color: inherit;
                    text-decoration: none;
                    z-index: 1;
                    transition: color 150ms;

                    &:hover,
                    &:focus{
                        color: var(--almond-bg);
                        text-decoration: underline;
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 0.65rem;
                        height: 0.65rem;
                        background-color: currentColor;
                        border-radius: 50%;
                        transform: translate3d(-50%, 0, 0);
                        transform-origin: center center;
                    }
                    span{
                        display: block;
                        transform: rotate(-90deg);
                        font-size: .75rem;
                        transition: transform 200ms;
                        margin-top: 7px;
                    }
                    &.is-active{
                        span{
                            transform: scale(1.2) rotate(-90deg);
                            color: var(--light-chocolate);
                        }
                        &::after{
                            display: none;
                        }
                    }
                }
            }
        }
    }
`;

export const SectionHome = styled.section`
    background-image: url(${Wallpaper});
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
        
        .home{
            height: 100%;
            .content{
                position: absolute;
                top: 15%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.2rem;
                padding-left: 20rem;
                width: 60%;
                color: var(--black-chocolate);
                
            }
        }
        .info{
            position: absolute;
            bottom: 20%;
            right: 20%;
            /* border: 1px solid black; */
            img{
                width: 300px;
                height: auto;
                filter: opacity(90%);
            }
        }
`;

export const SectionProject = styled.section`
    height: 100vh;
    width: 100vw;
    padding: 8rem 0 max(5vh, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
	background-color: var(--almond-bg);

    &:nth-child(2n+0){
        background-color: var(--black-chocolate);
    }
`;
