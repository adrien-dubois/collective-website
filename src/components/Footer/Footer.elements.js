import { motion } from "framer-motion";
import styled from "styled-components";


export const FooterContainer = styled(motion.footer)`
    height: 10vh;
    position: relative;
    padding: 1.2rem calc(2.5rem + 2.5vw);
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (min-width: 280px) and (max-width: 1080px){
        height: max-content;
        flex-direction: column;
        align-items: center;
        text-align: center;
        div {
            &:first-child{
                margin-bottom: 1rem;
            }
        }
    }

`;

export const LeftText = styled.p`
    color: var(--light-chocolate);

    span{
        color: var(--almond-dark);
    }
`;

export const CenterText = styled.div`

    color: var(--light-chocolate);

    .social-network {
      position: relative;
      width: 80%;
      margin: 0 auto;
      color: var(--light-chocolate);

      @media screen and (max-width: 740px){
        width: 50%;
      }
      @media screen and (min-width: 1200px){
        font-size: 2rem;
      }

      .content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }

      svg{
        color: var(--almond-dark);
      }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        text-align: center;
        margin-top: 1rem;
    }
`;

export const RightText = styled.div`
    text-align: center;
    p{
        margin-top: 1.2rem;
        margin-bottom: .7rem;
        color: var(--light-chocolate);
    }
    a{
        
        padding: 6px 8px;
        border-radius: 10px;
        background: var(--almond-dark);
        color: var(--almond-bg);
        transition: all .5s ease;
    }
    a:hover{
        background: transparent;
        color: var(--almond-dark);
    }
    @media screen and (min-width: 280px) and (max-width: 1080px){
        
        margin-top: 1rem;
        
    }
`;