import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import img from "../../volunteer-network-main/images/extraVolunteer.png"


const SelfImposed = (props) => {
    const { organzetion, date, _id } = props.user
    const [remove, setRemove] = useState(" ")
  const handleSubmit = (id) =>{
    fetch(`https://blooming-inlet-30776.herokuapp.com/delet/${_id}`, {
        method: 'DELETE'
    })
        .then(res=>res.json())
        .then(data => {
            setRemove(data)
        })
  }
    return (
        <div className="col-md-6">
                <img style={{ width: '200px' }} src={img} alt="" />
                    <h2>{organzetion}</h2>
                    <h4>{date}</h4>
                    <Button onClick={ ()=> handleSubmit(_id)} varinat="secondary">cancel</Button>
        </div>
    );
};

export default SelfImposed;