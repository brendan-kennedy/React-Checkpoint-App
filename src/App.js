import DisplayEmails from  './components/DisplayEmails';
import Email from './components/Email'
import './App.css';
import {Component} from 'react'
 



class App extends Component{
  constructor(){ 
    super(); 

    this.state = { 
        emails : []
        
    }
  }


  
  componentDidMount(){ 
      this.getEmails()
  }

  async getEmails(){ 
    let content = await fetch('http://localhost:3001/emails');
    let data = await content.json();
    let emailArray = []
    let newEmail = {}
    for ( var i = 0 ; i < data.length; i++){
     newEmail.sender = data[i].sender
     newEmail.id = data[i].id
     newEmail.subject = data[i].subject
     newEmail.message = data[i].message
     newEmail.date = data[i].date
     newEmail.recipient = data[i].recipient
     emailArray.push(newEmail)
  }
  this.setState({emails:emailArray})
   console.log(this.state.emails) 
   console.log(this.state.emails[0])
}


  
  
  render () { 
    
  
  
  return (
    <div className="App">  
       <h1> FAKE GMAIL </h1>
       <h2>Current Emails</h2> 
       <p> {Object.keys(this.state.emails).length ? `${this.state.emails[0]?.sender} - ${this.state.emails[0]?.subject}`: "" }</p>
    </div>
  );
}
}

export default App;
