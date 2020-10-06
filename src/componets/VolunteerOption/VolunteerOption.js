import React from 'react';
import { Link } from 'react-router-dom';
import "./VolunteerOption.css"

const VolunteerOption = (props) => {
    const {img, name, color} = props.task
    return (
        <div className="col-md-3">
           <Link to={`/volunteerRegister/${name}`}>
           <img style={{width: "250px"}} src={img} alt=""/>
            <p style={{background: `${color}`}} className="name-design">{name}</p>
           </Link>
        </div>
    );
};

export default VolunteerOption;