import styled from 'styled-components';
import { keyframes } from 'styled-components';

const transformTitle = keyframes`
    to { transform: scaleX(1)}
`;

export const Section = styled.section`
    width: 100%;
    padding: 0 max(5vw, 1rem);
    margin: 8rem 1rem 0;
    display: grid;
    grid-template-columns: 33% 67%;
    position: relative;
    text-align: right;
    margin-top: 5rem;
    transform-style: perspective-3d;
    perspective: 900px;

    @media screen and (max-width: 810px){
      grid-template-columns: 25% 75%;
    }

    @media screen and (max-width: 700px){
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
    }

    @media screen and (max-height: 600px){
      margin: 3rem 1rem 0;
    }

    .section__heading{
        margin-right: 20px;
        z-index: 1;
        @media screen and (max-width: 700px){
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .5rem;
        }

        &__title{
            h1{
                font-size: 3rem;
                margin-bottom: 12px;
                font-family: var(--ubuntu-font);
                color: ${(props) => props.theme.titleColor} ; 
                
                transform: scaleX(0);
                animation: ${transformTitle} 1.5s ease forwards;
                transform-origin: 150%;

                @media screen and (max-width: 940px){
                    margin-bottom: 0;
                }
                @media screen and (max-width: 810px){
                    font-size: 2rem;
                }
                @media screen and (max-width: 450px){
                    font-size: 1.2rem;
                }
            }
        }

        &__text{
            margin-bottom: 30px;
            color: ${(props) => props.theme.primaryColor};
            font-size: 1.2rem;

            @media screen and (max-width: 700px){
                margin: 0;
            }
            @media screen and (max-width: 450px){
                font-size: .9rem;
            }
            
            &:after {
                content: "";
                height: 340px;
                width: 340px;
                filter: brightness(85%);
                background: ${(props) => props.theme.square};
                position: absolute;
                top: -28px;
                left: 70px;
                z-index: -10;

                @media screen and (min-width: 1080px) and (max-width: 1600px){
                    height: 220px;
                    width: 220px;
                    left: -30px;
                }
                @media screen and (max-width: 1080px){
                    display: none;
                }
            }
        }

        &__languages{
            li{
                font-size: 1.5rem;
                color: ${(props) => props.theme.secondaryColor};

                @media screen and (max-width: 700px){
                    font-size: 1.1rem;
                }
                @media screen and (max-width: 400px){
                    font-size: .8rem;
                }
                @media screen and (min-width: 1080px) and (max-width: 1600px){
                    font-size: 1.3rem;
                }
            }
        }

    }

    .section__title{
        position: relative;
        text-align: left;
        margin-left: 10px;

        @media screen and (max-width: 700px){
            text-align: center;
            margin: 0 auto;
        }

        &__image {
            border-radius: 5px;
            box-shadow: 0px 2px 4px rgba(51, 51, 51, 0.26);
            width: 600px;
            height: 380px;
            overflow: hidden;
            position: relative;

            @media screen and (max-width: 940px){
                height: 300px;
                width: 500px;
            }
            @media screen and (max-width: 540px){
                height: 200px;
                width: 370px;
            }
            @media screen and (max-width: 400px){
                height: 200px;
                width: 350px
            }

            span{
                position: absolute;
                bottom: 20px;
                left: 0;
                width: 100%;
                padding: 1rem;
                margin: 0 auto;
                line-height: 34px;
                visibility: hidden;
                transition: 0.5s ease;
                transform: translateY(200px);
                
                
                h3{
                    padding-bottom: 10px;
                    color: ${(props) => props.theme.titleColor} ;  
                    font-size: 1.3rem; 
                }

                p{
                    color: ${(props) => props.theme.primaryColor} ;
                    font-size: calc(0.4rem + 0.4vw);
                }

                @media screen and (max-width: 940px) {
                    line-height: initial;
                    padding: 0 5px;
                    h3{
                        font-size: .9rem;
                    }
                }

            }

            &:hover span,
            span:hover {
                visibility: visible;
                transform: translateY(0);
            }

            img {
                overflow: hidden;
                object-fit: cover;
                object-position: 0%;
                width: 100%;
                height: 100%;
                position: absolute;
                transition: 0.4s ease-out;
                position: relative;

                &:hover,
                span:hover img {
                    transform: scale(1.2);
                    filter: opacity(15%) contrast(150%);
                }
            }

            
        }

        &__button{
            width: 130px;
            a{
                span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${(props) => props.theme.textBtn};
                    background: ${(props) => props.theme.btnBg};
                    height: 55px;
                    width: 126px;
                    border-radius: 50px;
                    margin-top: 20px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: 0.2s;
    
                    @media screen and (max-width: 410px){
                        width: 100px;
                        font-size: .85rem;
                    }
                    &:hover {
                        color: ${(props) => props.theme.textBtnHover};
                        background: ${(props) => props.theme.button};
                        letter-spacing: 1px;
                    }
                }

            }
            @media screen and (max-width: 940px) {
                margin: 0 auto;
            }
        }
    }
`;

/*---------- THEMES ----------*/

export const lightTheme = {
    background: "var(--almond-bg)",
    primaryColor: "var(--black-chocolate)",
    secondaryColor: "var(--almond-dark)",
    titleColor: "var(--light-chocolate)",
    square: "var(--almond-bg)",
    button: "var(--almond-bg)",
    textBtn: "var(--white-antique)",
    textBtnHover: "var(--almond-dark)",
    btnBg: "var(--almond-dark)"
}

export const darkTheme = {
    background: "var(--light-chocolate)",
    primaryColor: "var(--white-antique)",
    secondaryColor: "var(--almond-bg)",
    titleColor: "var(--marigold-bg)",
    square: "#414332",
    button: "var(--dark-chocolate)",
    textBtn: "var(--marigold-bg)",
    textBtnHover: "var(--marigold-bg)",
    btnBg: "#37392B"
}