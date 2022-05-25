import React from 'react'
import styles from "./Loading.module.css";

const Loading = () => {
  return (
<div className={styles.ring} style={{background: '#262626'}}>Loading
  <span className="span"></span>
</div>
    
  )
}

export default Loading
