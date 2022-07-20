import React from 'react'
import classes from './Upload.module.css'

export default function Upload({handleChange,dragOver,dragEnter,dragLeave,dragDrop}) {
  return (
    <div className={classes.uploadContainer}>
        <h1 style={{color:'#4F4F4F'}}>Upload your image</h1>
        <span style={{color:'#828282'}}>file should be <strong>JPG</strong> or <strong>PNG</strong></span>
        <div className={classes.imageContainer} 
             onDragEnter={dragEnter} onDragOver={dragOver}
             onDragLeave={dragLeave} onDrop={dragDrop}>
            <img src='/assets/image.svg'></img>
            <span style={{fontSize:'12px',fontWeight:'500',lineHeight:'18px',color:'#BDBDBD'}}>Drag & Drop your Image here</span>
        </div>
        <strong style={{color:'#4F4F4F'}}>OR</strong>   
        <label className={classes.uploadBtn}>
            <span className={classes.uploadLabel}>Choose file...</span>
            <input type="file" onChange={handleChange} style={{visibility:'hidden'}} 
                   />
        </label>
    </div>
  )
}