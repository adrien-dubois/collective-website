import React, { 
    useEffect, 
    useRef, 
    useState 
} from 'react'
import { Div } from './Styles/Gallery.elements'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import cn from 'classnames';
import useOnScreen from 'useOnScreen'
import { images } from '../../datas/galleryData'

function GalleryItem({
    src,
    title,
    subtitle,
    category,
    updateActiveImage,
    index
}){
    const ref = useRef(null);
    const onScreen = useOnScreen(ref, 0.5);

    useEffect(() => {
        if(onScreen){
            updateActiveImage(index);
        }
    }, [onScreen, index]);

    return(
        <div 
            className={cn("gallery-item-wrapper", {'is-reveal': onScreen})}
            ref={ref}
        >
            <div></div>
                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className="gallery-item-info__title">{title}</h1>
                        <h6 className="gallery-item-info__subtitle">{subtitle}</h6>
                        <p className="gallery-item-info__category">{category}</p>
                        <a 
                            href={`#section_${index}`} 
                            className='gallery-item-info__link' 
                        >
                            <span>Détail</span> 
                        </a>
                    </div>
                    <div 
                        className="gallery-item-image"
                        style={{ backgroundImage: `url(/assets/img/${src})` }}
                    ></div>
                </div>
            <div></div>
        </div>
    );
}

export default function Gallery({ src }) {
    const [activeImage, setActiveImage] = useState(1);
    const ref = useRef(null);

    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray('.gallery-item-wrapper')

        let tween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger:{
                start: 'top top',
                trigger: ref.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500",
                onUpdate: updateFunction
            }
        });

        

           gsap.to("[data-speed]", {
            scrollTrigger: {
                scrub: true
            },
               x: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed ,
               ease: 'none'
           });

           gsap.to('progress', {
            value: 100,
            ease: 'linear',
            scrollTrigger: { 
                scrub: 0.3,
            }
            });

            function updateFunction() {
              const tweenProgress = Math.round((tween.progress() * 100))
              setProgress(tweenProgress)
            //   console.log(tweenProgress);
            }
        ScrollTrigger.refresh();

        
    }, []);

    const handleUpdateActiveImage = (index) => {
        setActiveImage(index + 1);
    };

    

  return (
    <>
      <Div ref={ref}>

        <h1 
            className="page-title"
            data-speed="0.05"
        >
        The Square.
            <span 
                className="page-title__offset"
                data-speed="0.05"
            >
                    Portfolio projects
            </span>
        </h1>
        <div className="gallery">

          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>

          {images.map((image, index) => (
            <GalleryItem
              key={src}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>


        <progress max="50" value="0"></progress>
        <div className="progress">
            <span>Progress</span>
            <Progress value={progress}/>
        </div>
      </Div>
    </>
  );
}

const Progress = ({ value = 0, symbol = "%" }) => {
    const oldValue = useRef(value)
    const interval = useRef(null)
    const [display, setDisplay] = useState(oldValue.current)

    useEffect(() => {
        interval.current && clearInterval(interval.current);
        interval.current = setInterval(() => {
            setDisplay((val) => {
                console.log(val);
                if(val >= value) {
                    oldValue.current = value;
                    clearInterval(interval.current);
                    return val - 1;
                }
                return val + 1
            }) ;
        }, 1);

        return () => clearInterval(interval.current);
    }, [value])
    

    return <span>{display}{symbol}</span>
}