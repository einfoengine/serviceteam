import React from 'react'

const Section = ({id, className='', title, type, children}) => {
    return (
        <section id={id} className={`mt-section ${id} ${className}`}>
            <div className={type}>
                <div className="row">
                    {/* <div className="col-md-12"> */}
                        <h2 className='mt-sec-title'>{title}</h2>
                    {/* </div> */}
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section
