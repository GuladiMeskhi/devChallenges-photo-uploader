import React from 'react';
import classes from './Error.module.css'
import { MdError } from 'react-icons/md'

const Error = ({error}) => {
    return (
        <div className={classes.errorContainer}>
            <MdError color="#EB1D36" fontSize='44px'/>
            <h1 style={{fontSize:'18px',color:'#4F4F4F'}}> Something went wrong ...</h1>
            <span style={{fontWeight:700,color:'#4F4F4F',fontSize:'24px',marginBottom:'15px'}}>
                404 not found{error}
            </span>
        </div>
    );
}

export default Error;
