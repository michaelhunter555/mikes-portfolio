import './DefHeroImg.scss';

import React, { Component } from 'react';


//Reusable Component for other pages (i.e. about, contact, etc.)
class DefHeroImg extends Component {
    render(){
        return (
            <div className="def-background-img">
                <div className="heading">
                    <h1>{this.props.header}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
  
}

export default DefHeroImg;