import styled from "styled-components";

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
`;

export const TeamTitle = styled.div`
    position: relative;
    z-index: 1000;
    margin: 6rem 10rem;
    p{
        color: var(--light-chocolate);
        text-transform: uppercase;
        letter-spacing: 0.2rem;
    }
    h2{
        font-size: 1.8rem;
    }
`;

export const Carousel = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    margin-top: -5rem;
    z-index: 5;
}

    @media only Screen and (max-width: 40em) {
        width: 90vw;
        .slick-slider .slick-arrow {
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