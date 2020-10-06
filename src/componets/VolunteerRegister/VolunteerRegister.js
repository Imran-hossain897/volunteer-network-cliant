import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import logo from "../../volunteer-network-main/logos/Group 1329.png"
import './VolunteerRegister.css'
import { Button } from 'react-bootstrap';


const VolunteerRegister = () => {
    const [loggInUser] = useContext(userContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const {name} = useParams();
    const onSubmit = (data, e) => {
        history.push("/volunteerDetails")
        const information=  { ...loggInUser,  organzetion: e.target.organzetion.value, date:e.target.date.value}
        fetch('https://blooming-inlet-30776.herokuapp.com/addVolunteer', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(information)
          })
            .then(res => res.json())
            .then(data => {
              console.log(data)
            })
      
      }
      const history = useHistory()
 

    return (
        <div className="container">
                <img className="logo-style" src={logo} alt=""/>
            <div className="register-style">
               <h5 className="font-color">Register as a Volunteer</h5>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
              <input className="input-style" defaultValue={loggInUser.displayName} placeholder="Full Name" name="name" type="text"/><br/>
               <input className="input-style" defaultValue={loggInUser.email}  placeholder="Username or Email" name="email" type="text"/><br/>
               <input className="input-style" type="date" name="date" id=""/> <br/>
               <input className="input-style"  placeholder ="description" name="Description" type="text"/><br/>
               <input className="input-style" defaultValue={name} name="organzetion" placeholder="Organize books at the library" type="text"/><br/>
               <input value="register" variant="primary" type="submit"/>
              </form>
            </div>
        </div>
    );
};

export default VolunteerRegister;