import React from "react";
import classes from './Posts.module.css'
import {imagePathGenerator} from "../../../../utils/general";

const Posts = (props) => {
  return (
    <div className={classes.posts}>
      <div className={classes.item}>
        <img src={imagePathGenerator(props.img)} alt="Ava" />
        {props.message}
        <div>
          <span>like {props.LikesCount}</span>
        </div>
      </div>
    </div>
  )
}


export default Posts; 