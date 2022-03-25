import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    position: relative;
    .blogs{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
        margin: 5rem 20rem;
        .blog{
            display: flex;
            flex-direction: column;
            grid-template: 1rem;
            .image{
                height: 22rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #D7C0A9;
            }
            .title{
                h3{
                    color: var(--light-chocolate);
                    font-size: 1.8rem;
                    font-family: var(--ubuntu-font);
                    font-weight: 500;
                }
            }
            .type{
                color: var(--light-chocolate);
                font-weight: bolder;
                font-family: var(--ubuntu-font);
                font-size: 1rem;
                font-style: italic;
                text-transform: uppercase;
            }
            .description{
                height: 10rem;
                color: var(--light-chocolate);
            }
            .more{
                display: flex;
                align-items: center;
                gap: 1rem;
                cursor: pointer;
                span{
                    letter-spacing: 0.1rem;
                    text-transform: uppercase;
                     
                }
            }
        }
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        .blogs{
            margin: 5rem 10rem;
            .blog{
                .title{
                   h3{
                       font-size: 1.5rem;
                   }
                }
                .type{
                    margin: .5rem 0;
                }
                .description{
                    height: 35%;
                    p{
                        .9rem
                    }
                }
            }
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        margin: 2rem 0;
        .decoration{
            display: none;
        }
        .blogs{
            grid-template-columns: 1fr;
            margin: 0 1rem;
            padding: 0 2rem;
            .title{
                h3{
                    font-size: 1.2rem;
                }
            }
            .type{
                margin: 1rem 0;
            }
            .description{
                font-size: .8rem;
            }
            .more{
                margin-top: 1rem;
                span{
                    padding-top: 1rem;
                    font-size: .9rem;
                }
            }
        }
    }
`;