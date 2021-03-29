import './Lessons.css';

const Lessons=({onClick,topic,teacher,time})=>
{
    let t=teacher;
    return(
        <div onClick={onClick} className='lesson'>
            <div>{topic}</div>
            <div>teacher: {teacher}</div>
            <div>time: {time}</div>
        </div>
    )
}


export default Lessons;