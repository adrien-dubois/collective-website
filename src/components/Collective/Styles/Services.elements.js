import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    position: relative;
    .services{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        height: 100%;
        margin: 0 14rem;
        margin-top: 10rem;
        gap: 5rem;
        &__service{
            padding: 2rem;
            &:nth-of-type(3){
                background-color: #D0AF8F;
                border-radius: 4px;
                .services__service__title{
                    span{
                        color: var(--white-alabaster);
                    }
                }
                .services__service__description{
                    color: var(--white-alabaster);
                }
            }
            &__image{
                margin-bottom: 3rem;
            }
            &__title{
                span{
                    color: var(--light-chocolate);
                    font-weight: bolder;
                }
                h2{
                    font-size: 3rem;
                    line-height: 2.5rem;
                    margin-bottom: 5rem;
                    color: var(--light-chocolate);
                }
            }
            &__description{
                margin-bottom: 2rem;
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .services{
            margin: 2rem 0;
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0 2rem;
            &__service{
                &__title{
                    h2{
                        font-size: 2rem;
                    }
                }
                &__description{
                    font-size: .8rem;
                }
            }
        }
    }
`;