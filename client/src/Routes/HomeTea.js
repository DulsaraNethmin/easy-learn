import Lessons from '../component/Lossons';
import {useHistory} from 'react-router-dom';
import {useEffect,useState} from 'react';
import Navbar from '../component/Navbar/Navbar';
import Commiunity from '../component/community/Community';
import LessonBar from '../component/LessonBar/LessonBar';
import './HomeTea.css';

const HomeTea=()=>
{
    const history=useHistory();
    let teacher='brad';
    return(
        <div>
            <Navbar/>
            <div className='home'>
                <LessonBar/>
                <Commiunity/>
            </div>
        </div>
    )   
}

export default HomeTea;