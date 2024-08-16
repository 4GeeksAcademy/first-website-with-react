import React from 'react'

function Welcome() {
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="p-5 bg-secondary bg-opacity-10 m-3">
          <h1 className="display-4 text-start fw-normal">A Warm Welcome!</h1>
          <p className="lead text-start fw-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <div className="text-start">
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome