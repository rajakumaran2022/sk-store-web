import React from 'react'
import {BsFullscreenExit} from 'react-icons/bs'
import './Latest.css'

function Latest() {
  return (
    <div>
      <div className="f-header py-5">
        <i><BsFullscreenExit/></i>
        <h5 className="py-3">
          FEATURED <span>PRODUCT</span>
        </h5>
        <p className="text-muted text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          qui, odit quam eveniet.
        </p>
      </div>
    </div>
  )
}

export default Latest