import './Card.scss';
import React from 'react'


const Card = (props) => {
    
  return (
    <div className="project-card">
                <img src={props.imgSrc} alt="shopify" />
                <h2 className="p-title">{props.title}</h2>
                <div className="p-details">
                    <p>{props.text}</p>
                </div>
                <div className="p-btns">
                    <a href={props.view} className="btn" rel="noreferrer" target="_blank">
                        View
                    </a>

                    <a href={props.source} className="btn" rel="noreferrer" target="_blank">
                        Github
                    </a>
                    
                </div>
            </div>
  )
}

export default Card;