import {useEffect} from 'react';
import axios from 'axios';
import  DisplayPost from './DisplayPost/DisplayPost';
import {useState} from 'react';
import addnew from '../../icons/addnew.png';
import './Community.css';
import community from '../../icons/community.png';
import Ask from './Ask/Ask';

const Commiunity =({location})=>
{
    let arr=[];
    const [ob,setOb]=useState([]);
    useEffect(()=>
    {
        axios.get('http://localhost:8000/community')
            .then((res)=>
            {
                //<DisplayPost uname={e.name} post={e.question}/>
                console.log(res.data);
                let arr1=res.data.reverse();
                let date='';
                let arr=arr1.map((e)=>
                {
                    if(e.date)
                        date=e.date.slice(0,21);
                    return <DisplayPost uname={e.name} post={e.post} date={date} noreply={e.reply.length} data={e}/>
                })
                setOb(arr);
                console.log(ob);
            }) 
    },[])


    return(
        <div className='community'>
            <div className='community-title'>Community <img src={community}/></div>
            {ob}
            <Ask/>
        </div>
    )
}


export default Commiunity;