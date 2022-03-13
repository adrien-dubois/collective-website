import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { projectsDatas } from './projectsDatas'
import { 
    darkTheme,   
    lightTheme,  
    Section, 
} from './Styles/Projects.elements'


const Projects = (props) => {

    const [currentProject] = useState(projectsDatas);
    const project = currentProject[props.projectNumber];
    const themeProject = project.theme;
  
    return (
        <ThemeProvider 
            theme={ themeProject === "light" ? lightTheme : darkTheme }
        >
        <Section className='container'>
            <div className="section__heading">

                <div className="section__heading__title">
                    <h1>
                        {project.title}
                    </h1>
                </div>

                <div className="section__heading__text" >
                    {project.date}
                </div>

                <ul className="section__heading__languages">
                    {project.languages.map((item) => {
                        return <li key={item} >
                          {item}  
                        </li>
                    })}
                </ul>
            </div>

            <div className="section__title">
                <div className="section__title__image hover section__image">
                    <span>
                        <h3 >
                            {project.title}
                        </h3>

                        <p>
                            {project.infos}
                        </p>
                    </span>
                    <img src={project.img} alt={project.title} />
                </div>
                <div className="section__title__button">
                    <a href={project.link} target='_blank' rel='noopener noreferer'>
                        <span>
                            Voir le site
                        </span>
                    </a>
                </div>
            </div>
        </Section>
        </ThemeProvider>
    )
  
}

export default Projects;