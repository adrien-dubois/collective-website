import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    padding: 5rem 0;
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
        z-index: 10;
        margin: 6rem 10rem;
        p{
            color: var(--black-chocolate);
            text-transform: uppercase;
            letter-spacing: 0.2rem;
        }
        h2{
            font-size: 1.8rem;
        }
    }
    .pricing{
        position: relative;
        z-index: 10;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 10rem;
        &__plan{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            &:nth-child(2){
                .pricing__plan__content{
                    padding: 0 5rem;
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
                    flex-direction: column;
                    gap: 0.6rem;
                    .line {
                        text-decoration: line-through;
                    }
                    margin-bottom: 2rem;
                }

                &__actions{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    a{
                        text-transform: uppercase;
                        padding: 6px 8px;
                        border-radius: 5px;
                        transition: all .4s ease;
                    }
                    a:hover{
                        background: var(--light-chocolate);
                        color: var(--white-antique);
                    }
                }
            }
        }
    }
    `;