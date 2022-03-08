import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    padding: 5rem 0;
    position: relative;
    overflow: hidden;
    .background{
        .bg1{
            position: absolute;
            top: -60%;
            left: -5%;
            z-index: -1;
        }
        .bg2{
            position: absolute;
            bottom: 5rem;
            right: 0%;
        }
    }
    .pricing__title{
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
                    border-left: 0.2rem solid black;
                    border-right: 0.2rem solid black;
                }
            }
        }
    }
    `;