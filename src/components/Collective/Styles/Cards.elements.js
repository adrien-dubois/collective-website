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

    

    @media only Screen and (max-width: 450px){
        box-shadow: none;
        margin: 0 -2rem;
        height: 570px; 
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
`;

export const Subtitle = styled.h4`
    font-size: 1.2rem;
    color: var(--light-chocolate);
    position: absolute;
    top: 9.2rem;
`;

export const Divider = styled.div`
    width: 8rem;
    height: 2rem;
    border: 5px solid var(--light-chocolate);
    border-color: var(--light-chocolate) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
    position: absolute;
    top: 12.2rem;
`;

export const Text = styled.h4`
    position: absolute;
    top: 15.7rem;
    color: var(--light-chocolate);
    line-height: 1.75rem;
    font-size: 1.3rem;
    font-style: italic;
    text-align: center;
    margin: 0 .8rem;
`;

export const ContactButton = styled.button`
    position: absolute;
    bottom: 4rem;
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
    }

    &:hover{
        background: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
    }

    @media only Screen and (max-width: 450px) {
        bottom: 5rem;
    }
`;
