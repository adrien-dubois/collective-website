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


const images = [
    {
        
        title: "Site Vitrine",
        subtitle: "Your Website",
        url: "https://the-square.net",
        src: 'full-vitrine2.png',
        full: 'full-vitrine.png',
        category: 'React'
    },

    {
        title: "E-Shop",
        subtitle: "Vape Swap Club",
        url: "http://vape-swap-club.white-umbrella.fr/",
        src: "full-vape2.png",
        full: "full-vape.png",
        category: 'PHP / HTML / CSS / JS'
    },

    {
        title: "Foodtruck",
        subtitle: "Chick & truck",
        url: "http://foodtruck.white-umbrella.fr/",
        src: "full-truck2.png",
        full: "full-truck.png",
        category: 'Symfony'
    },

    {
        title: "Blog",
        subtitle: "Diggerz Delight",
        url: "https://the-square.net",
        src: "full-blog2.png",
        full: "full-blog.png",
        category: 'Symfony / React'
    },

    {
        title: "Imddb Like",
        subtitle: "80's Flix",
        url: "http://oflix.white-umbrella.fr/",
        src: "full-flix2.png",
        full: "full-flix.png",
        category: 'Symfony'
    }
]

function GalleryItem({
    src,
    title,
    subtitle,
    category,
    url,
    full,
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
    
    useEffect(() => {
        
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray('.gallery-item-wrapper')
        

           gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: 'none',
            scrollTrigger:{
                start: 'top top',
                trigger: ref.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: "+=3500",
            },
           });

           gsap.to("[data-speed]", {
            scrollTrigger: {
                scrub: true
            },
               x: (i, target) => ScrollTrigger.maxScroll(window) * target.dataset.speed ,
               ease: 'none'
           });
        
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
      </Div>
    </>
  );
}

