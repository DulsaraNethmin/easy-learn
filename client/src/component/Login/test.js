import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login=()=>
{
    const history= useHistory();
    return(
        <div>
            <input type='text' placeholder='uname' id='uname'/>
            <input type='password' placeholder='password' id='password'/>
            <button onClick={(e)=>
                {
                    const data=
                    {
                        uname:document.getElementById('uname').value,
                        password:document.getElementById('password').value,
                    }
                    console.log(data);
                    axios.post('http://localhost:8000/user.info/login',data)
                        .then(res=>
                            {
                                if(res.data==='wrong pw')
                                    alert('invalid username or password');
                                else
                                {
                                    sessionStorage.setItem("type",`${res.data}`);
                                    if(sessionStorage.getItem("type")=="teacher")
                                        history.push('/home.teacher');
                                    else
                                        history.push('/home.student');
                                }
                            })
                }}>login</button>
        </div>
    )
}


export default Login;