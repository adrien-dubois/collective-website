import styled from "styled-components"
import Wallpaper from "../../../assets/img/collective/wallpaper2.svg"

export const Section = styled.section`
    min-height: 100vh;
    height: 110vh;
    background-image: url(${Wallpaper});
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    .background{
        position: relative;
        .design1{
            position: absolute;
            right: 0;
            z-index: 1;
        }
        .design2{
            position: absolute;
            left: 0;
            top: 20rem;
            z-index: 1;
        }
    }
    .skill__title{
        padding: 6rem 10rem;
        p {
            text-transform: uppercase;
            letter-spacing: 0.2rem;
            color: var(--light-chocolate);
        }
        h2{
            color: var(--dark-chocolate);
            font-size: 1.8rem;
        }
    }
    .skills{
        display: flex;
        padding: 0 20rem;
        gap: 10rem;
        &__bars{
            transform: rotate(-90deg);
            width: max-content;
            height: max-content;
            display: flex;
            flex-direction: column;
            gap: 4rem;
            &__bar{
                display: flex;
                flex-direction: row-reverse;
                gap: 1rem;
            }
            .container{
                display: flex;
                flex-direction: column;
                gap: 2.5rem;
                span{
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: var(--light-chocolate);
                }
                progress{
                    width: 30rem;
                    --webkit-appearance: none;
                    appearance: none;
                    &::-webkit-progress-bar{
                        height: 3rem;
                        background-color: var(--white-antique);
                    }
                    &::-webkit-progress-value{
                        background-color: var(--almond-dark);
                    }
                }
            }
            h3{
                transform: rotate(90deg);
                color: var(--light-chocolate);
                font-size: 1.8rem;
            }
        }
        &__content{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            color: var(--light-chocolate);
            z-index: 2;
            .title{
                font-weight: bolder;
                letter-spacing: 0.1rem;
            }
        }
    }
`;