import queryString from 'query-string';


const ClassTea=({location})=>
{
    const {room,name}=queryString.parse(location.search);
    console.log(name,room);
    return(
        <>
        </>

    )
}

export default ClassTea;