import './DisplayPost.css';
import replypic from '../../../icons/replypic.png';
import Reply from '../Reply/Reply';
import {useState,useeffect} from 'react';


const DisplayPost=({uname,post,date,noreply,data})=>
{
    const [replies,setReplies]=useState(false);
    const [reply,setReply]=useState('');
    return(
        <div>
            <div className='post'>
            <div style={{fontSize:'10px'}}>{date}</div>
            <div style={{fontSize:'14px',fontWeight:'200'}} className='by-uname'>By {uname}({sessionStorage.getItem("type")}),</div>
            <div className='post-post'>{post}</div>
            <img src={replypic} className='reply' onClick={(e)=>
                {
                    console.log('hello');
                    if(!replies)
                    {
                        setReplies(true);
                        setReply(<Reply data={data}/>);
                    }
                    else
                    {
                        setReplies(false);
                        setReply('');
                    }
                }}/>{noreply}
            </div>
            {reply}
        </div>
    )
}

export default DisplayPost;




