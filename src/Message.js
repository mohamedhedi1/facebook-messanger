import { CardContent,Card,Typography  } from '@material-ui/core'
import React from 'react'
import { forwardRef } from 'react';
import './Message.css'


const Message=forwardRef(({username,message},ref)=> {
    const isUser = username===message.username;
    return (
       <div ref={ref} className={`message_card ${isUser &&'messagee_user'}` }>
            <Card className={isUser ? "messagee_usercard":"message_guestcard"}>  
                <CardContent>
                <Typography 
                color='white'
                variant="h5"
                component="h2"
                >
                    {!isUser && `${message.username || 'Unknown User'} :`}{message.message}
                </Typography>
                </CardContent>
            </Card>
       </div>
           
          
     
    )
})

export default Message;
