import styled from 'styled-components'

export const Div = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100vw;
    height: 95vh;

    .social-network {
      position: relative;
      width: 80%;
      margin: 0 auto;
      right: 40%;
      
      svg{
          color: var(--almond-dark);
      }

      @media screen and (max-width: 540px){
        display: none;
      }

      @media screen and (max-width: 740px){
        width: 50%;
        grid-area: d;
        margin-top: 2rem;
      }
      @media screen and (min-width: 1200px){
        font-size: 2rem;
      }

      .content {
        position: absolute;
        left: 50%;
        transform: translateX(-20%);
      }
    }

    &:after {
        content: "";
        height: 700px;
        width: 700px;
        background: var(--almond-dark);
        border-radius: 50%;
        position: absolute;
        top: 172px;
        right: -500px;
        z-index: -10;

        @media screen and (max-width: 840px){
            height: 400px;
            width: 400px;
            top: 520px;
            right: -140px;
        }
        @media screen and (max-width: 540px){
            display: none;
        }
    }

    .contact-infos{
        position: absolute;
        bottom: 0;
        right: 0;
        display: grid;
        grid-template-rows: repeat(4, 23%) 12%;
        height: 70%;
        width: 30%;
        max-width: 500px;

        @media screen and (max-width: 740px){
            height: 200px;
            width: 100%;
            max-width: 100%;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 
                'a b c'
                'd d d'
                'f f f';
        }
        @media screen and (max-width: 540px){
            grid-template-rows: repeat(3, 60px);
            grid-template-columns: repeat(6, 1fr);
            grid-template-areas: 
                'b b b c c c'
                'd d d d d d'
                'f f f f f f';
        }
        @media screen and (max-height: 500px){
            display: none;
        }
        @media screen and (min-width: 1200px){
            width: 35%;
            height: 83%;
        }

        .adress{

            position: relative;
            right: 5%;

            @media screen and (max-width: 540px){
                display: none;
            }

            .content{
                position: absolute;
                right: 35px;

                h4 {
                color: var(--black-chocolate);
                font-size: 1.3rem;
                font-weight: 500;
                margin-bottom: 10px;
        
                    @media screen and (min-width: 1200px){
                        font-size: 1.8rem;
                    }
                }
                p {
                    color: var(--light-chocolate);
        
                    @media screen and (min-width: 1200px){
                        font-size: 1.2rem;
                    }

                    @media screen and (max-width: 740px) {
                        font-size: .8rem;
                    }
                }
            }
        }

        .phone{
            position: relative;

            @media screen and (max-width: 540px){
                text-align: center;
                font-size: .8rem;
                grid-area: b;
            }

            .content {
                position: absolute;
                left: 40%;
                transform: translateX(-50%);

                    @media screen and (max-width: 540px){
                        position: relative;
                        margin: 0 auto;
                        left: 0;
                        transform: translateX(0);
                    }

                    p{
                        transition: 0.25s;

                        &:hover{
                            transform: translateX(5px);
                        }

                        @media screen and (max-width: 740px) {
                            font-size: .8rem;
                        }
                    }
                    @media screen and (max-width: 640px){
                        display: none;
                    }
            }
        }

        .email{
            @media screen and (max-width: 540px){
                grid-area: c;
                font-size: .8rem;
                text-align: center;
            }

            .content p{
                transition: 0.25s;

                @media screen and (max-width: 740px) {
                    font-size: .8rem;
                }

                &:hover{
                    transform: translateX(5px);
                }
            }
            @media screen and (max-width: 640px){
                display: none;
            }
        }

        .credits{
            text-align: center;

            @media screen and (max-width: 740px){
                transform: translateY(10px);
                font-size: .7rem;
                margin-right: 1rem;
                grid-area: f;
                margin-top: 2rem;
            }

            p{
                font-size: .9rem;
                color: var(--light-chocolate);
                
                span{
                    color: var(--almond-dark);
                }
            }
        }


    }

`;