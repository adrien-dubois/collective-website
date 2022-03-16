import React from 'react'
import styled from "styled-components"

const S = {}

const Div = styled.div` 
.slideshow-list__el{
    flex: 0 0 auto;
    width: 100%;
    min-width: 25rem;
    max-width: 40vmin;
    margin-left: 20vw;

    &:last-child {
        padding-right: 10vw;
        box-sizing: content-box;
    }
    &:nth-child(2n+0) {
        .tile_content {
            color: var(--almond-dark);
    }

    .tile{
        position: relative;
        display: block;
        &__fig{
            position: relative;
            width: 100%

            &::before{
                content:'';
                display: block;
                padding-top: 136.36%;
            }
            
            &__img{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                /* width: 100%;
                height: 100%; */
                object-fit: cover;
                object-position: center;

                &.is-loaded {
                    opacity: 0;
                }
            }
        }

        &__content{
            position: absolute;
            bottom: 3.6rem;
            left: 0;
            width: 100%;
            font-size: 1.4rem;
            transition: color .3s;

            &:hover{
                color: var(--white-antique);
            }

            &__title{
                margin-left: -10%;
                white-space: nowrap;
                font-family: var(--poppins-font);
                font-style: normal;
                font-weight: 400;
                text-transform: uppercase;
                font-size: calc(2rem + 2.5vw);

                &__offset{
                    display: block;
                    margin-left: 15%;

                    @media only screen and (min-width: 768px) {
                        margin-left: 23%;
                    }
                }
            }

            &__cta{
                display: block;
                margin-top: 2rem;
                margin-left: 6.4%;
                line-height: 1.5;

                @media only screen and (min-width: 768px) {
                    margin-left: -11%;
                }

                .btn-inline{
                    display: inline-block;
                    line-height: 1.5;
                    border-bottom: .1rem solid;
                }
            }
        }
    } 
}
`;

S.Link = styled.a`

`;

const Article = ({ link, image }) => {
  return (
    <Div>
        <li className="slideshow-list__el">
            <div className="tile">
                <S.Link href={link.url}>
                    Site web
                </S.Link>
                <figure className="tile__fig">
                    <img 
                        src={ require(`../../assets/img/portfolio/${image.crop}`)}
                        alt={link.name}
                        className="tile__fig__img" 
                        width= "400"
                        height= "300"
                    />
                </figure>
                <div className="tile__content">
                    <h2 className="tile__content__title">
                        {link.name}
                        <span className="tile__content__title__offset">
                            {link.subtitle}
                        </span>
                    </h2>
                    <div className="tile__content__cta">
                        <span className="btn-inline">See more</span>
                    </div>
                </div>
            </div>
        </li>
    </Div>
  )
}

export default Article