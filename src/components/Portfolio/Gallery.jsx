import React, { useEffect, useRef } from 'react'
import Article from './Article'
import { Div } from './Styles/Gallery.elements'

const thumbs = [
    {
        link: {
            name: "Site Vitrine",
            subtitle: "Your Website",
            url: "https://the-sqaure.net"
        },
        image: {
            crop: 'full-vitrine2.png',
            full: 'full-vitrine.png'
        }
    },

    {
        link:{
            name: "E-Shop",
            subtitle: "Vape Swap Club",
            url: "http://vape-swap-club.white-umbrella.fr/",
        },
        image: {
            crop: "full-vape2.png",
            full: "full-vape.png",
        }
    },

    {
        link:{
            name: "Foodtruck",
            subtitle: "Chick & truck",
            url: "http://foodtruck.white-umbrella.fr/",
        },
        image: {
            crop: "full-truck2.png",
            full: "full-truck.png",
        }
    },

    {
        link:{
            name: "Blog",
            subtitle: "Diggerz Delight",
            url: "https://the-square.net",
        },
        image: {
            crop: "full-blog2.png",
            full: "full-blog.png",
        }
    },

    {
        link:{
            name: "Imddb Like",
            subtitle: "80's Flix",
            url: "http://oflix.white-umbrella.fr/",
        },
        image: {
            crop: "full-flix2.png",
            full: "full-flix.png",
        }
    }
]

const Gallery = () => {

    const ref = useRef(null)

    useEffect (() => {
        let element = ref.current

        const rotate = () => {
            element.style.transform = `translateX(${-window.scrollY}px)`
            
        }
        window.addEventListener('scroll', rotate)
        return () => {
            window.removeEventListener('scroll', rotate)
        };
    }, [])

  return (
    <Div >
        <h1 className="page-title">
            The Square.
            <span className="page-title__offset">Portfolio projects</span>
        </h1>

        <section className="content">
            <div className="slideshow" >

                <ul className="slideshow-list" ref={ref}>

                    {thumbs.map((thumb, index) => (
                        <Article link={thumb.link} image={thumb.image} key={index} />
                    ))}
 
                </ul>
            </div>
        </section>
        
    </Div>
  )
}

export default Gallery