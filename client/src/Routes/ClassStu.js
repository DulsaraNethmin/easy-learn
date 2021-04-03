import queryString from 'query-string';
import Chat from '../component/Chat/Chat';
import './ClassStu.css';

const ClassStu=({location})=>
{
    const {room,name}=queryString.parse(location.search);
    console.log(name,room);
    return(
        <div className='classRoom'>
            <div></div>
            <div>
                <Chat room={room} name={name}/>
            </div>
        </div>

    )
}

export default ClassStu;