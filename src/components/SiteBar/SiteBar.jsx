import React, { Component } from 'react';
import classes from './SiteBar.module.css'
import {imagePathGenerator} from "../../utils/general";


const SiteBar = (props) => {   
    const drawActiveFriends = props.friends.
        map(names => <div key={names.id}>
            <img className= {classes.avatar} src={imagePathGenerator(names.avatar)} />
            {names.name}
            </div>)
    
   
    return (
        <div className="siteBar">
            <div>
             {drawActiveFriends}
          </div>
        </div>
    )
}


export default SiteBar;