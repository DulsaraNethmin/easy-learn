import Lessons from '../component/Lossons';
import {useHistory} from 'react-router-dom';
import {useEffect,useState} from 'react';


const HomeStu=()=>
{
    const [uname,setUname]=useState('');
    useEffect(()=>
    {
        setUname(()=>prompt('enter username...?'));
        console.log(uname);
    },[]);

    const history=useHistory();
    let teacher='brad';
    return(
        <div>
            <Lessons topic='Arrays' teacher={teacher} time='12/12/2021 @ 5.00pm' onClick=
            {
                e=>history.push(`/login?name=${uname}&room=${teacher}`)
            }/>
        </div>
    )   
}

export default HomeStu;