import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from "../../volunteer-network-main/logos/google.png"
import "./LogIn.css"
import logos from "../../volunteer-network-main/logos/Group 1329.png"
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';

const LogIn = () => {
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/volunteerRegister/:name" } };
    const [loggInUser, setLoggInUser] = useContext(userContext)
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleSignWithGoogle =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser={displayName, email}
            setLoggInUser(signInUser)
            history.replace(from);
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          })
    }
    return (
       <div>
           <img className="logostyle" src={logos} alt=""/>
            <div className="loginForm">
            <div className="sign-design" >
                <h3> Login with</h3>
             </div>
            <div>
               <Link>
                <div onClick={handleSignWithGoogle} className='logInImage'>
                    <img src={googleIcon} alt="" />
                    <span className='continue'>Continue with Google</span>
                </div>
                </Link>
                <h6 className='ml-5'>Don't have an account?<Link >Create an account </Link> </h6>

            </div>

        </div>
       </div>
    );
};

export default LogIn;