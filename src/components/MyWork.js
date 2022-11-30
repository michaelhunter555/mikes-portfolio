import './Card.scss';
import React from 'react'
import Card from './Card';
import ProjectData from './ProjectData';

const MyWork = () => {
    
  return (
    <div className="experience-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectData.map((project, i) => {
                return (
                    <Card
                    key={i}
                    imgSrc={project.imgSrc}
                    title={project.title}
                    text={project.text}
                    view={project.view}
                    source={project.source} />
                )
            })}  
        </div>
    </div>
  )
}

export default MyWork;