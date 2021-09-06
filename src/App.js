import React, {useState,useEffect} from 'react';
import './App.css';
import {Button,FormControl,InputLabel,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core'

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([
    
    //{username: 'hedi', message:'hi'}
  ]);
  const [username,setUsername]= useState('');


  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    })
  },[])
  useEffect(()=> {
    setUsername(prompt('Please enter your name'))
    console.log(username);
  }, [])
  console.log(messages);
  const sendMessage=(event)=>
  {
    event.preventDefault();
    db.collection('messages').add({username:username,message:input,timestamp:firebase.firestore.FieldValue.serverTimestamp()})
   
    setInput('');
  }
 
  return (
    <div className="App">
     
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100"/>
      <h2 style={{color:'#006AFF'}}>Welcome to messenger </h2>
      <form className="app_form">
      <FormControl className="app_formcontrol">
  
  <Input className="app_input" placeholder="Aa" value={input} onChange={event=>setInput(event.target.value)} aria-describedby="my-helper-text" />
 
  <IconButton className="app_icon" disabled={!input} variant='contained' color='primary' type="submit" onClick={sendMessage}>
   <SendIcon />
  </IconButton>
   
</FormControl>
     
      </form>
      <FlipMove>{messages.map(({data,id})=>(<Message key={id} username={username} message={data} />))}</FlipMove>
     


    </div>
  );
}

export default App;
