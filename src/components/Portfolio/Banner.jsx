import React, { useEffect, useState } from 'react'

const Banner = () => {

    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setPlayMarquee(true);
    }, []);

  return (
    <div className='banner'>
        <DescriptionRowTop title={"The Square."} />
        <BannerRowCenter title={"Portfolio"} playMarquee={playMarquee}/>
        <BannerRowBottom title={"Projets"}/>
    </div>
  )
}

const AnimatedLetters = ({ title }) => (
    <span className="row-title">
        {[...title].map((letter) => (
            <span className="row-letter">
                {letter}
            </span>
        ))}
    </span>
);

const DescriptionRowTop = ({ title }) => {
    return(
        <div className={"banner-row"}>
            <div className="row-col">
                <AnimatedLetters title={title} />
            </div>
            <div className="row-col">
                <span className="row-message">
                    Voici une séléction de projets effectués par nos soins. Ce sont des exemples à titre informatif ou pouvant donner une idée de notre contenu. Nos projets étants uniques Nisi commodo aute consequat veniam incididunt cillum reprehenderit sit sint adipisicing eiusmod.
                </span>
            </div>
        </div>
    );
};

const BannerRowBottom = ({ title }) => {
    return(
        <div className={"banner-row-center"}>
            <div className="scroll">
                <span>
                    scroll
                </span>
                <span>
                    down
                </span>
            </div>
            <AnimatedLetters title={title}/>
        </div>
    );
};

const BannerRowCenter = ({ title, playMarquee }) => {
    return(
        <div className={`banner-row-marquee ${playMarquee && "animate"}`}>
            <div className="marquee__inner">
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </div>
        </div>
    );
};

export default Banner;