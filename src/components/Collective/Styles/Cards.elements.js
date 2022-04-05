import styled from "styled-components";


export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    border-radius: 8px;
    transition: 1s;
`;

export const ContainerSingle = styled.div`
    width: 100%;
    height: 100%;
    background: #DDC4AC;
    border-radius: 8px;
    
    &:hover ${Image}{
        transform: scale(0.42 ,0.35) translateY(-830px) translateX(-174px);
        border-radius: 50%;
        object-fit: cover;
        height: 50%;
        top: 30%;
        width: 61%;
    }
`;

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const Name = styled.h3`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--black-chocolate);
    letter-spacing: 2px;

     @media screen and (min-width: 280px) and (max-width: 1080px){
         font-weight: bolder;
    }
`;

export const Subtitle = styled.div`
    font-size: 1.3rem;
    color: var(--black-chocolate);
    text-align: center;
    margin-bottom: .6rem;

`;

export const Divider = styled.div`
    width: 8rem;
    height: 2rem;
    border: 5px solid var(--light-chocolate);
    border-color: var(--light-chocolate) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;

     @media screen and (min-width: 280px) and (max-width: 1080px){
        display: none;   
    }
`;

export const Text = styled.div`
    color: var(--light-chocolate);
    line-height: 1.75rem;
    font-size: 1rem;
    text-align: center;
    margin: 0 .8rem;
    width: 90%;

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
        br{
            margin-top: 2px;
        } 
    }
`;


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom:  4rem;
    svg { 
        margin: .2rem auto;
        position: absolute;
        bottom: 32px;
        right: -40px;
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
    }
`;
