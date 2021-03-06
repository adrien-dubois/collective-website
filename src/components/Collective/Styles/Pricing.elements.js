import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    padding-bottom: 5rem;
    position: relative;
    overflow: hidden;
    background: var(--white-antique);
    .background{
        .bg1{
            position: absolute;
            top: -60%;
            left: -5%;
            z-index: 1;
        }
        .bg2{
            position: absolute;
            bottom: 5rem;
            right: 0%;
        }
    }
    .pricing__title{
        position: relative;
        z-index: 1;
        margin: 2rem 10rem -6rem 10rem;
        p{
            color: var(--black-chocolate);
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
        h2{
            font-size: 1.8rem;
        }
        .bubble{
            position: relative;
            bottom: 5rem;
            left: 83rem;
            width: 17rem;
            height: 17rem;
            border-radius: 50%;
            background: var(--opaque-bg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .bubbleTitle{
                svg{
                    width: 20px;
                    height: 20px;
                }
                font-style: italic;
                font-weight: 600;
                text-transform: uppercase;
            }
            h3{
                margin-top: 1rem;
                margin-bottom: 1.3rem;
                font-weight: 500;
                font-size: 1rem;
                font-family: var(--ubuntu-font);
                text-align: center;
                width: 80%;
                i{
                    font-weight: lighter;
                }
    
            }
            
            @media screen and (min-width: 1080px) and (max-width: 1600px){
                left: 55rem;
            }
        }
    }
    .pricing{
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 10rem;

        .btn-cta-price{
            grid-row: 2;
            grid-column: 2;
            justify-self: center;
            a{
                text-transform: uppercase;
                padding: 14px 12px;
                border-radius: 15px;
                background: var(--almond-dark);
                transition: all .4s ease;
            }
            a:hover{
                background: transparent;
                color: var(--light-chocolate);
                letter-spacing: 1px;
            }
        }
        &__plan{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            &:nth-child(2){
                .pricing__plan__content{
                    border-left: 0.2rem solid var(--black-chocolate);
                    border-right: 0.2rem solid var(--black-chocolate);
                }
            }
            &__name{
                background-color: var(--almond-dark);
                width: 15rem;
                height: 15rem;
                border-radius: 10rem;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: var(--black-chocolate);
                &__description{
                    color: var(--white-antique);
                    display: flex;
                    position: relative;
                    span{
                        position: absolute;
                        top: 0rem;
                        left: 0.1rem;
                        font-size: 1rem;
                    }
                    p{
                        font-size: 1rem;
                        font-weight: bold;
                        margin-top: 1.2rem;
                    }
                }



                
            }
            &__content{
                &__features{
                    text-align: center;
                    color: var(--light-chocolate);
                    display: flex;
                    font-weight: 600;
                    flex-direction: column;
                    gap: 0.6rem;
                    
                    .line {
                        display: none;
                    }
                    svg{
                        width: 20px;
                        height: 20px;
                    }
                    margin-bottom: 2rem;
                }
            }
        }
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        padding: 1rem;
        .pricing__title{
            margin: 0;
            padding: 0 2rem;
            text-align: center;
            p{
                margin-bottom: .7rem;
                font-size: .8rem;
            }
            h2{
                font-size: 1.2rem;
            }
        }
        .background{
            display: none;
        }
        .pricing{
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 4rem;
            display: block;
            &__plan{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                &__name{
                    height: 10rem;
                    width: 10rem;
                    h2{
                        font-size: 1.2rem;
                    }
                    &__description{
                        span{
                            font-size: .8rem;
                        }
                        p{
                            font-size: .7rem;
                        }
                    }
                }
                &__content{
                    &__features{
                        font-size: .8rem;
                    }
                    &__actions{
                        a{
                            font-size: .8rem;
                        }
                    }
                }
                &:nth-child(2){
                    .pricing__plan__name__description{
                        span{
                            font-size: .7rem;
                        }
                    }
                    .pricing__plan__content{
                        padding: 0;
                        border: none;
                    }
                }
            }
        }
    }
`;