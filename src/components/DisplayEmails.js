import React from 'react'
import Sender2 from './Sender'
import Subject from './Subject'

const DisplayEmails = (props) => {
    return(
        <ul>
             {props.emails.map(email => <li><Sender2 key = {`Sender`} subject = {email.sender}/> <Subject key = {`Subject`} subject = {email.subject} /> </li>)}
            
        </ul>
    );
}

export default DisplayEmails