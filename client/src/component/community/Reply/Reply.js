import axios from 'axios';
import {useState,useEffect} from 'react';
import './Reply.css';
import send from '../../../icons/send.png';

const Reply=({data})=>
{
    const [replies,setReplies]=useState([]);
    let dataOf='';
    useEffect((e)=>
    {
        axios.get(`http://localhost:8000/community/${data._id}`)
            .then(res=>
                {
                    console.log(res.data);
                    dataOf=res.data;
                    console.log(dataOf.reply);
                
                    let arr=dataOf.reply.map((e)=>
                    {
                        return(
                            <div className="replyBox">
                                <div className="date">
                                    {dataOf.date.slice(0,15)}
                                </div>
                                <div className="name">
                                    BY {dataOf.name}({sessionStorage.getItem("type")}),
                                </div>
                                <div className="reply-body">
                                    {e.reply}
                                </div>
                            </div>
                        )
                    })
                    setReplies(arr);
                })
        
    },[])

    return(
    
        <div className='reply-box'>
            {replies}
            <div className='reply-area'>
                <form>
                    <input type='text' id='reply-teaxarea' className='reply-teaxarea' placeholder='reply...'/>
                   <button type='submit' onClick={e=>
                    {
                        {
                            console.log(data.reply)
                            data.reply.push({
                                name:sessionStorage.uname,
                                reply:document.getElementById('reply-teaxarea').value
                            })
                            let ob=
                            {
                                reply:data.reply
                            }
                            console.log(ob);
                            document.getElementById('reply-teaxarea').value='';
                            if(ob.reply.length)
                                axios.put(`http://localhost:8000/community/${data._id}`,ob);

                        }
                    }}><img src={send}  className='send'/></button>
                </form>
            </div>
        </div>
    )
}


export default Reply;