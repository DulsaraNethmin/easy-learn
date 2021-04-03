import {useState,useEffect} from 'react';
import addnew from '../../../icons/addnew.png';
import './Ask.css';
import axios from 'axios';
function Ask(){

    const [skills, setSkills] = useState(["JavaScript"]);

    // remove skill

    const removeSkill = (removedSkill) => {
        const newSkills = skills.filter((skill) => skill !== removedSkill);
        setSkills(newSkills);
    };


    // add skill
    let tags=[];
    const addSkill = (e) => {
        if (e.key === "Enter") {
            if (e.target.value.length > 0) {
                setSkills([...skills,e.target.value]);
                e.target.value = "";
            }
        }
    };

    useEffect(()=>
    {
        let model=document.getElementById('model');
        model.style.display='none';
    },[])
    

    return(
        <div>
                <div className="content-box" id='model'>
                    <div className="topic">
                        <p>Ask <span id='close' onClick={(e=>
                            {
                                let model=document.getElementById('model');
                                model.style.display='none';
                            })}>x</span></p>
                    </div>
                    <div className="LFBody">


                        <div className="skill">
                            <ul>
                                { skills.map((skill, i) => {
                                    return (
                                        <li key={i}> {skill} <button onClick={() => removeSkill(skill)}>+</button> </li>
                                    )
                                }) }
                                <li className="input-skill">
                                    <input onKeyDown={addSkill} placeholder="Enter a tag..."/> 
                                </li>
                            </ul>
                        </div>

                           <form>
                           <div className='post-type'>
                                <textarea className="form-control" id="post-type-text" rows="3" placeholder='Type post...'></textarea>
                            </div>
                        
                        <button type="submit" className="btn-btn-success" id="saveBtn" onClick={(e)=>
                            {
                                console.log(skills);
                                let data=
                                {
                                    date:Date().toString(),
                                    name:sessionStorage.getItem("uname"),
                                    tags:skills,
                                    post:document.getElementById('post-type-text').value
                                }
                                console.log(data);
                                axios.post('http://localhost:8000/community',data);
                                setSkills(["JavaScript"]);
                                document.getElementById('post-type-text').value='';

                            }}>Post</button>
                           </form>
                    </div>
                </div>

                <div>
                       <img src={addnew} className='addnew' onClick={(e)=>
                        {
                            console.log('hello');
                            let model=document.getElementById('model');
                            model.style.display='block';
                            model.style.position='fixed';
                            model.style.left='450px';
                            model.style.top='200px'
                        }}/> 
                </div>
        </div>
    )
}

export default Ask;