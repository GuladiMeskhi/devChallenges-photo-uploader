import React from 'react'
import classes from './Copy.module.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

export default function Copy({copySrc,handleClick,imageSrc}) {
  return (
    <div className={classes.copyContainer}>
        <BsFillCheckCircleFill color="#219653" fontSize='44px'/>
        <h1 style={{fontSize:'18px',color:'#4F4F4F'}}>Uploaded Successfully!</h1>
        <img className={classes.copyImgContainer} src={copySrc}></img>
        <div className={classes.linkContainer}>
            <span className={classes.copyLink}>{imageSrc}</span>
            <button onClick={handleClick} className={classes.copyBtn}>Copy Link</button>
        </div>
    </div>
  )
}
