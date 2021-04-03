const express =require('express');
const socketio=require('socket.io');
const http =require('http');
const cors = require('cors');
//const users =require('./routes/users');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const  { addUser, removeUser, getUser, getUsersInRoom,addCommunity }=require('./users');



const PORT =8000;
const app=express();
app.use(cors());
const URI="mongodb+srv://chatter:chatter@nethmincluster99.5wvxn.mongodb.net/Teach?retryWrites=true&w=majority";

const server=http.createServer(app);
const io=socketio(server);
const community=require('./routes/community');
const users =require('./routes/users');
const login =require('./routes/login');
//middlewares....
//app.use(cors());
app.use(bodyParser.json());
app.use('/user.info',users);
app.use('/user.info/login',login);
app.use('/community',community);


mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>console.log("server connected to mongo"))
        .catch((e)=>console.log(e));

//************************Chat app*****************************

io.on('connection',(socket)=>
{

  socket.on('join',({name,room})=>
  {
   
    const {user}=addUser({id:socket.id,name,room});
    console.log(user);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    socket.join(user.room);
  });

  socket.on('sendMessage',(message)=>
  {
    const user=getUser(socket.id);
    console.log(message);
    io.to(user.room).emit('message',{user:user.name,text:message});
    //io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  })

  


  socket.on('disconnect',()=>
  {
    const user=removeUser(socket.id);
    if(user)
    {
      io.to(user.room).emit('message',{user:'admin',text:`${user.name} has left`});
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });


  //***************community***************

  socket.on('joinCommunity',({name})=>
  {
      const {communityUser}=addCommunity({id:socket.id,name:name});
      console.log(communityUser);
      console.log(name);
  });





});


//**********************************************************************************************************************8 */


server.listen(PORT,()=>console.log('Server is running!!!'));




