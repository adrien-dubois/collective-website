import styled from "styled-components"
import { MdClose } from "react-icons/md";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 750px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, .2);
    background: var(--almond-bg);
    color: var(--black-chocolate);
    display: grid;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media screen and (min-width: 1080px) and (max-width: 1600px) {
        width: 650px;
        height: 550px;
    }
`;

export const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #bc8b5f;
    display: flex;
    align-items: center;
    border-radius: 10px 0 0 10px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: var(--black-chocolate);

    h2{
        text-transform: uppercase;
        text-shadow: 6px 6px 6px rgba(0, 0, 0, .8);
    }

    p{
        color: var(--black-chocolate);
        text-transform: uppercase;
        letter-spacing: 0;
        font-size: .75rem;
        margin: .5rem;
        font-style: italic;
        font-weight: 600;
        text-align: center;
    }

    ul{
        margin-bottom: .8rem;
        text-align: center;
        counter-reset: index;
        padding: 0;

        li {
            counter-increment: index;
            display: flex;
            align-items: center;
            padding: 12px 0;
            box-sizing: border-box;

            &::before{
                content: counters(index, ".", decimal-leading-zero);
                font-size: 1.5rem;
                text-align: right;
                font-weight: bold;
                min-width: 50px;
                padding-right: 12px;
                font-variant-numeric: tabular-nums;
                align-self: flex-start;
                background-image: linear-gradient(to bottom, aquamarine, orangered);
                background-attachment: fixed;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
        li + li{
            border-top: 1px solid rgba(0, 0, 0, .2);
        }
    }

    button{
        padding: 10px 24px;
        background: var(--light-chocolate);
        color: var(--white-antique);
        border: none;
        text-transform: uppercase;
    }

    @media screen and (min-width: 1080px) and (max-width: 1600px){
        
        h2{
            font-size: 1.5rem;
        }
        
        ul{
            columns: 2;

            li{
                font-size: .8rem;
                &::before{
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    svg{
        color: var(--light-chocolate);
        transition: color .3s ease-in;
        &:hover{
            color: var(--almond-dark);
        }
    }
`;