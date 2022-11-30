import './GlassyContent.scss';
import React from 'react';

const GlassyContent = (props) => {
    return (
        <div className='resume-outline'>
            <div className='resume-outline'>
                <h2>{props.content}</h2>
                <p>{props.words}</p>
          </div>
        </div>
    )
}

export default GlassyContent;
