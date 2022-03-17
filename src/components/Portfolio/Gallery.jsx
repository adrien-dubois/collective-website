import React, { useState } from 'react'
import { Div } from './Styles/Gallery.elements'

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
    return(
        <div className="gallery-item-wrapper">
            <div />
                <div className="gallery-item">
                    <div className="gallery-item-info">
                        <h1 className="gallery-item-info__title">{title}</h1>
                        <h6 className="gallery-item-info__subtitle">{subtitle}</h6>
                        <p className="gallery-item-info__category">{category}</p>
                    </div>
                    <div 
                        className="gallery-item-image"
                        style={{ backgroundImage: `url(/assets/img/${src})` }}
                    >
                    </div>
                </div>
            <div />
        </div>
    )
}

export default function Gallery() {
    const [activeImage, setActiveImage] = useState(1);

  return (<Div id="gallery">
          <div className="section-wrapper gallery-wrap">
              <div className="gallery">

                  <div className="gallery-counter">
                        <span>{activeImage}</span>
                        <span className="divider"/>
                        <span>{images.length}</span>
                  </div>

                  {images.map((image, index) => (
                      <GalleryItem 
                      
                        key={image.src}
                        index={index}
                        {...image}
                        updateActiveImage={(index) => setActiveImage(index + 1)}
                      />
                  ))}
              </div>
          </div>
      </Div>
  )
}

