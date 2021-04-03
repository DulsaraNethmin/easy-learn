import {useEffect,useState} from 'react';
import io from 'socket.io-client';
import queryString  from 'query-string';
import TypeMessage from '../TypeMessage';
import Messages from '../Messages';
import './Chat.css';
import TopChatBar from '../TopChatBar';
import onlineicon from '../../icons/onlineIcon.png';

let socket='';

const Chat =({room,name})=>
{

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [onlineUsers,setOnlineUsers]=useState([]);
    const ENDPOINT='localhost:8000';
    //const{name,room}=queryString.parse(location.search);

    useEffect(()=>
    {
        socket=io(ENDPOINT);
        //console.log(name ,room);
        socket.emit('join',{name,room});
        return ()=>
        {
            socket.emit('disconnect');
            socket.off();
        }

    },[ENDPOINT,room,name]);

    useEffect(()=>
    {
        socket.on('message',(message)=>
        {
            setMessages([...messages,message]);
        })
        socket.on('roomData',({room,users})=>
        {
            //console.log(users);
            let arr=users.map(e=>
                {
                    return(
                        <div><img src={onlineicon}/>{e.name}</div>
                    )
                })
            setOnlineUsers(arr);
            //console.log(arr);
        })
        
    },[messages])


    const sendMessage=(e)=>
    {
        e.preventDefault();
        if(message)
        {
            socket.emit('sendMessage',message);
            setMessage('');
        }

    }


    console.log(message,messages);

    return(
        <div >
                <TopChatBar/>
                <div className='chat'>
                    <div className='message'>
                        
                        <Messages messages={messages} name={name}/>
                        <TypeMessage message={message} setMessage={setMessage} sendMessage={sendMessage} />
                    </div>
                    <div className='online'>
                        <div style={{marginBottom:'10px'}}>Participents</div>
                        {onlineUsers}
                    </div>
                </div>
        </div>
    )
}

export default Chat;