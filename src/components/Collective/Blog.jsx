import React from 'react'
import { Section } from './Styles/Blog.elements'
import Title from './Title';
import placeholder from "../../assets/img/collective/placeholder.png"
import { BsArrowRightCircle } from "react-icons/bs"

function Blog() {
  const blogsData = [
    {
      titre:"MDN se refait une beauté",
      type:"News",
      description: "Deserunt fugiat nostrud ex laborum ullamco labore cupidatat dolor pariatur. Id elit aliquip officia nulla excepteur enim Lorem enim veniam cillum in et occaecat cupidatat. Adipisicing pariatur enim esse ipsum aute. Sit sit ad id ..."
    },
    {
      titre:"Nouvelle réalisation",
      type:"Collectif",
      description: "Tempor aliqua quis commodo anim voluptate ipsum cillum ad incididunt aliquip est eiusmod elit. Excepteur laborum labore ullamco sint enim sunt. Elit aute consequat pariatur Lorem mollit labore."
    },
    {
      titre:"PHP 8 est sorti : le nouveau compilateur JIT assure de meilleures performances",
      type:"Code",
      description: "Dolor Lorem incididunt occaecat magna id Lorem magna. Minim mollit tempor eiusmod consequat eiusmod do Lorem sunt pariatur irure ut nisi. Quis in qui ex excepteur magna occaecat ea culpa in laborum. Laboris id dolor ullamco ..."
    },
  ];
  return (
    <Section id='blog'>
      <Title value="news"/>
      <div className="blogs">
        {
          blogsData.map(({titre, type, description}) => {
            return (
              <div className="blog">
                <div className="image">
                  <img src={placeholder} alt="placeholder" />
                </div> 
                <div className="title">
                  <h3>{titre}</h3>  
                </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>  
                </div>
                <div className="more">
                  <BsArrowRightCircle width={40} />
                  <span>Lire plus...</span>
                </div>
              </div>
            );
          })
        }  
      </div>
    </Section>
  )
}

export default Blog