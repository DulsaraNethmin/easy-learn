import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Chat from './component/Chat/Chat';
import Welcome from './Routes/Welcome';
import HomeStu from './Routes/HomeStu';
const App = () => {
    return(
        <div>
            <Router>
                <Route exact path='/' component={Welcome}/>
                <Route path='/login' component={Chat}/>
                <Route path='/home.student'><HomeStu/></Route>
            {/* <Route path='/register'><Register/></Route>
                
                <Route path='/home.teacher'><HomeTeacher/></Route>
                <Route path='/class.stu'><ClassStu/></Route>
                <Route path='/class.teacher'></Route>*/}
            </Router>
        </div>
    )

}
 
export default App ;