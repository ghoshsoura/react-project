import React from "react";
import './styling.css';
import northernpic from "./image/NorthernHemisphere.jpg";
import southernpic from "./image/SouthernHemisphere.jpg";

const Hemisphereconfig = {
    Northern: {
        text: 'This is northern hemisphere',
        picture: northernpic
    },
    Southern: {
        text: 'This is southern hemisphere',
        picture: southernpic
    }
}
const Hemispheredis = ({ latitude }) => {
    
    const hemi = latitude > 0 ? 'Northern' : 'Southern';
    const {text,picture} = Hemisphereconfig[hemi];
    return (
    <div>
        <div className={ hemi }>
            <div className="ui raised text container segment">
                <div className="image">
                    <img src={picture} alt=""></img>
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{ text }</h1>
                </div>
            </div>            
        </div>
        <h1>Hello</h1>
    </div>
    )
}

export default Hemispheredis;