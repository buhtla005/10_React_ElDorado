import React from 'react'
import loadingGif from '../../img/gif/loading-gear.gif'

const Loading = () => (

     <div className="loading">
          <h4>rooms data loading...</h4>
          <img src={loadingGif} alt=""/>
     </div>
)

export default Loading