import React, { useContext, useEffect, useState } from 'react';
import './VolunteerDetails.css'
// import img from '../../volunteer-network-main/screenshots/4 Event Tasks.png'
import Header from '../Header/Header';
import { userContext } from '../../App';
import SelfImposed from '../SelfImposed/SelfImposed';

const VolunteerDetails = () => {
    const [generalUser, setGeneralUser] = useState([])
    const [loggInUser] = useContext(userContext)

    useEffect(() => {
        fetch("http://localhost:5000/genralUser?email=" + loggInUser.email)
            .then(res => res.json())
            .then(data => {
                setGeneralUser(data)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="row">
                {
                    generalUser.map(user => <SelfImposed user={user}></SelfImposed>)
                }

            </div>
        </div>
    );
};

export default VolunteerDetails;