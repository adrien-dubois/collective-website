import styled from 'styled-components';
import Wallpaper from "../../../assets/img/portfolio/wallpaper.svg"

export const Container = styled.div`
    position: relative;
    overflow: clip visible;
`;

export const SectionHome = styled.section`
    background-image: url(${Wallpaper});
    background-size: cover;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
        
        .home{
            height: 100%;
            .content{
                position: absolute;
                top: 15%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.2rem;
                padding-left: 20rem;
                width: 60%;
                .title{
                    h1{
                        font-size: 4.8rem;
                        line-height: 5.3rem;
                    }
                }
                .subtitle{
                    p{
                        width: 70%;
                        margin-bottom: 2rem;
                    }
                }
            }
        }
`;

export const SectionProject = styled.section`

`;