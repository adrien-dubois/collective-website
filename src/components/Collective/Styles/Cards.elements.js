import styled from "styled-components";


export const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    transition: 1s;
    filter: grayscale(100%);
`;

export const CARD = styled.div`
    width: 413px;
    height: 600px;
    transform: scale(0.7);
    background-color: var(--almond-bg);
    border-radius: 8px;
    box-shadow: 0 0 80px 1px rgba(0, 0, 0, 0.8);
    font-family: var(--poppins-font);
    &:hover ${Image}{
        transform: scale(0.5 , 0.35) translateY(-865px);
        border-radius: 50%;
        background-size: 100% 150%;
        background-position: ${({lastone}) => (lastone ? '0 -230px' : '0 -25px')} ;
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px){

    }

     @media screen and (min-width: 280px) and (max-width: 1080px){
        box-shadow: none;
        margin: 0 -2rem;
        height: 466px;
        width: 333px; 
        
        &:hover ${Image}{
            transform: scale(0.5 , 0.35) translateY(-700px);
        }
    }
 
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    justify-content: center;
`;


export const Name = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black-chocolate);
    position: absolute;
    top: 6.5rem;
    letter-spacing: 2px;

     @media screen and (min-width: 280px) and (max-width: 1080px){
        top: 3.9rem;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.2rem;
    color: var(--light-chocolate);
    position: absolute;
    top: 9.2rem;
    text-align: center;

     @media screen and (min-width: 280px) and (max-width: 1080px){
        top: 6.2rem;   
    }
`;

export const Divider = styled.div`
    width: 8rem;
    height: 2rem;
    border: 5px solid var(--light-chocolate);
    border-color: var(--light-chocolate) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
    position: absolute;
    top: 13rem;

     @media screen and (min-width: 280px) and (max-width: 1080px){
        display: none;   
    }
`;

export const Text = styled.div`
    position: absolute;
    top: 15.7rem;
    color: var(--light-chocolate);
    line-height: 1.75rem;
    font-size: 1.3rem;
    text-align: center;
    margin: 0 .8rem;

    br{
        display: block;
        content: '';
        margin-top: 10px;
        line-height: 22px;
    }

    span{
        font-style: italic;
        font-weight: bolder;
        margin-bottom: 1rem;
    }

     @media screen and (min-width: 280px) and (max-width: 1080px){
        top: 8.7rem;   
    }
`;


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* height: 3rem; */
    position: absolute;
    bottom:  4rem;
    svg { 
        margin: .2rem auto;
        position: absolute;
        bottom: 32px;
        right: -40px;
    }

     @media screen and (min-width: 280px) and (max-width: 1080px){
        bottom: .5rem;   
    }
`;

export const ContactButton = styled.button`
    background-color: var(--almond-dark);
    border: none;
    font-size: 1.25rem;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    a{
        color: var(--white-antique);
        text-transform: uppercase;
        font-family: var(--ubuntu-font);
        font-weight: bold;
        line-height: 0;
        margin-bottom: 5px;
    }

    &:hover{
        background: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
    }

     @media screen and (min-width: 280px) and (max-width: 1080px) {
        padding: .8rem 1.4rem;
        bottom: 5rem;
    }
`;
