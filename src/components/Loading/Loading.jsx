import React from 'react'
import classes from './Loading.module.css'

export default function Loading() {
  return (
    <div className={classes.loadingContainer }>
      <h1 className={classes.loadingHeader}>Uploading <span>...</span></h1>
      <span className={classes.loadingBar}>
        <span className={classes.progressBar}></span>
      </span>
    </div>
  )
}
