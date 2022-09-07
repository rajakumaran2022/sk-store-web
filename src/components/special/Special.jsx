import React from 'react'
import {BsFullscreenExit} from 'react-icons/bs'
import './Special.css'

function Special() {
  return (
    <div>
    <div className="f-header py-5 text-center">
      <i><BsFullscreenExit/></i>
      <h5 className="py-3">
        SPECIAL <span>PRODUCT</span>
      </h5>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
        qui, odit quam eveniet modi ad voluptatibus similique neque vero.
      </p>
    </div>
  </div>
  )
}

export default Special