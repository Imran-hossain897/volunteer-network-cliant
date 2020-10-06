import React from 'react';
import "./Home.css";
import fakeData from '../../fakeData/fakeData'
import Header from '../Header/Header';
import VolunteerOption from '../VolunteerOption/VolunteerOption';
import { Button, InputGroup } from 'react-bootstrap';

const Home = () => {
    const tasks = fakeData;
  
    return (
        <div >
            <Header></Header>
            <div className="group">
                <h4 className="text-design">I grow by helping people in need.</h4>
                <InputGroup className="simple">
                   <input className='input-slice' placeholder="search..." type="search" name="" id=""/>
                    <InputGroup.Prepend>
                        <Button variant="primary" >Search</Button>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
            <div className="row group-style">
                {
                    tasks.map(task => <VolunteerOption key={task.id} task={task}></VolunteerOption>)
                }
            </div>
        </div>
    );
};

export default Home;