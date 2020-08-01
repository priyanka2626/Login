import React from 'react';
import axios from 'axios';
import { useState,useEffect  } from 'react';

export const UserInfo= (props)=>{

    const [UserData,setUserData]=useState('')
    const Url = "https://reqres.in/api/users/";
 
    useEffect(() => {
        axios.get(Url + props.id).then((response) => {
           setUserData(response.data)
                    
        })
            .catch(function (error) {
                console.error(error);
            });
      },[]);
      
      const RenderUserDetail=()=>{
        if(UserData!==undefined && UserData!=='')
        {
         console.log(UserData)
          return (
          <div>
              <div className="card back container">
                <img className="card-img-top img" src={UserData.data.avatar} />
                <div className="card-body">
                  <h1>{`${UserData.data.first_name} ${UserData.data.last_name}`}</h1>
                  <h5 className="card-title">{UserData.ad.company}</h5>
                  <p className="card-text">{UserData.ad.text}</p>
                  <img src="https://img.icons8.com/ultraviolet/20/000000/email-open.png"/>
                  <span className="size">{UserData.data.email}</span>
                </div>
              </div>
          </div>  
          )
        }
        else{
          return <div>Loading.........</div>
        }
      }
  
return(
<div>
{RenderUserDetail()}
</div>
)
}
