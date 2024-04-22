import React from 'react'
import moringa from '../assets/Moringa.png'
import './base.css';


function Associations() {
    return (
        <>
        <div className='min-h-screen sections-container'>
          <div className='section-links font-serif'>
            <div className="card-container">
              <div className="card w-100 bg-rose-900 shadow-xl">
                <figure><img src={moringa} alt="Moringa School" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-neutral-100">
                    Moringa School
                    <div className='text-4xl'> 
                      </div>
                  </h2>
                  <p className='text-amber-700'>Software Engineering Graduate</p>
                </div>
              </div>  
              </div>
          </div>
        </div>
      </>
    )
}

export default Associations
                        