import styled from "styled-components";
import { keyframes } from "styled-components";

const swipe = keyframes`
  0% { transform:translateX(-5px) translateY(0); }
  50% { transform:translateX(5px) translateY(-5px); }
  100% { transform:translateX(-5px) translateY(0); }
`;

export const Section = styled.section`
    overflow: hidden;
    .background{
        position: relative;
        .design1{
            position: absolute;
            left: 0;
            height: 35rem;
            top: 10rem;
        }
        .design2{
            position: absolute;
            right: 0;
        }
    }
    .container{
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem 0;

    }
    .swipe-title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        &__text{
            font-size: 2.5rem;
            font-family: var(--poppins-font);
            font-weight: 600;
            color: var(--black-chocolate);

        }
        svg{
            width: 2.4rem;
            height: 2.4rem;
            color: var(--black-chocolate);
            animation: ${swipe} 3.5s ease infinite;
        }
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        .background{
            .design2{
                display: none;
            }
        }
        .container {
            height: 100vh;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .background{
            display: none;
        }
        .container{
            padding: 4rem 0;
        }
    }
`;

export const TeamTitle = styled.div`
    z-index: 500;
    margin: 6rem 10rem;
    p{
        color: var(--light-chocolate);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    h2{
        font-size: 1.8rem;
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px){
        margin: 2rem 10rem;
    }

    @media screen and (min-width: 280px) and (max-width: 1080px){
        margin: 1rem .5rem;
        text-align: center;
        p{
            font-size: .7rem;
            margin-bottom: 1rem;
        }
        h2{
            display: none;
        }
    }
`;

export const Carousel = styled.div`
    width: 25vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    margin-top: -5rem;
    z-index: 5;

    .swiper{
        width: 100%;
        height: 100%;
    }


    @media screen and (min-width: 280px) and (max-width: 1080px){
        width: 80vw;
        .slick-slider .slick-arrow{
            display: none;
        }
    }

    .slick-slider .slick-arrow:before{
        color: var(--black-color);
        font-size: 1.5rem;

        @media only Screen and (max-width: 40em) {
            display: none;
        }
    }

    .slick-slider .slick-dots button:before {
        color: var(--black-color);
        font-size: 1.5rem;
    }

    .slick-slide.slick-active{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0;
        padding: 0;
        margin-bottom: 3rem;
    }

    
`;