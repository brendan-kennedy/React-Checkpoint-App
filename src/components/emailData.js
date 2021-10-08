import React from 'react'
import Sender2 from './Sender'
import Subject from './Subject'
import Message from './Message'

  
  const EmailData = (props) => {
    return (
    <span> {Object.values(props[0])} </span> 
  )
  }

  export default EmailData