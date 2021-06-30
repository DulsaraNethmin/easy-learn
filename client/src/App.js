import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './component/Chat/Chat';
import Welcome from './Routes/Welcome';
import HomeStu from './Routes/HomeStu';
import ClassStu from './Routes/ClassStu';
import ClassTea from './Routes/ClassTea';
import Commiunity from './component/community/Community';
import Form from './component/Register/Form';
import Login from './component/Login/Login';
import HomeTea from './Routes/HomeTea';
import './App.css';
import Ask from './component/community/Ask/Ask';
//import FormLogin from './Login/FormLogin';
//import FormLogin from '../../server/Login/FormLogin';
//import FormLogin from './component/Login/FormLogin';
const App = () => {
    return(
        <div>
            <Router>
                <Route exact path='/' component={Welcome}/>
                
                <Route path='/home.student'><HomeStu/></Route>
                <Route path='/class.student' component={ClassStu}/>
                <Route path='/class.teacher' component={ClassTea}/>
                <Route path='/register' component={Form}/>
                <Route path='/login' component={Login}/>
                <Route path='/home.student' component={HomeStu}/>
                <Route path='/home.teacher' component={HomeTea}/>
                <Route path='/ask' component={Ask}/>
            {/* <Route path='/register'><Register/></Route>
                 
                <Route path='/class.teacher' component={ClassTeacher}/>
                <Route path='/home.teacher'><HomeTeacher/></Route>
                
                <Route path='/class.teacher'></Route>*/}
            </Router>
        </div>
    )

}
 
export default App ;
