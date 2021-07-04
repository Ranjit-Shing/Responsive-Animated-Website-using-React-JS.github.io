import React from 'react'
import web from '../src/images/img3.png'
import { NavLink } from 'react-router-dom'
const Card = (props) => {
    return (
        <>

            <div classNameName="col-md-4 col-10 mx-auto ">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Learn More and create new things.</p>
                        <NavLink to=" " className="btn btn-primary">Learn</NavLink>
                    </div>
                </div>

            </div>









        </>
    )
}
export default Card