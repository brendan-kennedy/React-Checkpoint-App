import DisplayEmails from  './components/DisplayEmails';
import EmailData from  './components/emailData';
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

showEmail = () => (props) => {
return ( <p>{props[0]}</p> )

}


  render () { 
    
  
  
  return (
    <div className="App">  
       <h1> FAKE GMAIL </h1>
       <h2>Current Emails</h2>
       <DisplayEmails emails = {this.state.emails} />
       <h2> First Email </h2>
       <p><EmailData emails = {this.state.emails} /> </p> 
       <button onClick = {this.showEmail(this.state.emails)}>Click Me to See an Email!</button> 
    </div>
  );
}
}

export default App;

