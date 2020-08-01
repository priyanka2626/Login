import React from 'react';
import { useState  } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import axios from 'axios';
import UsersList from './UsersList';
import { Form } from './Form';

const LoginPage = () => {

  var Url = "https://reqres.in/api/";
  
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [redirect, setredirect] = useState(false);
  
  const handleClick = () => {
    
    if (Email !== '' && Password !== '') {
      axios.post(Url + 'login', { "email": Email, "password": Password }).then((response) => {
        console.log(response.data);

        if (response.status == 200) {
           //alert("hi")
          setredirect(true);
        }
        localStorage.setItem('userData', JSON.stringify(response.data));
      })
        .catch((error) => {
          console.log(error)
          alert("Incorrect email/password or user doesnot exists")
        });
    }
    else alert("Please enter username or password")
}
  
const OnChangeHandler = (evt) => {
    var value = evt.target.value
    { evt.target.alt == "Email" ? setEmail(value) : setPassword(value) }
}

  return (
    <div>
      <BrowserRouter >
          {redirect ? 
          <Redirect  to='/UsersList' /> : 
            <Route exact path="/" render={() =>
              <Form Click={(event) => handleClick(event)} Change={(evt)=>OnChangeHandler(evt)}/>}
           />}
          <Route  exact path="/UsersList" render={()=><UsersList Url={Url} />}/>
      </BrowserRouter>
    </div>
  );
 
}

export default  LoginPage