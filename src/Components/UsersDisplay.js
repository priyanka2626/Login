import React from 'react';
import {useState} from 'react';
import { BrowserRouter,Redirect,withRouter,Route} from 'react-router-dom'
import { UserInfo } from './UserInfo';


const UsersDisplay =(props)=>{
   
    const [redirect,setRedirect]=useState(false)
    const [Id,setId]=useState('')
    var users=props.users

 const OnClickHandler=(e)=>{
    //console.log(e.target.dataset.id)
    setRedirect(true);
    setId(e.target.dataset.id);
 }
 
 const  RenderLists = () => {
    // console.log(users)
     if (users != undefined && users.length > 0) {
         
         return (
             users.map((user) => {
                 return <div key={user.id} id="head" >
                     <ul className="list-group container">
                         <li className="list-group-item lists" data-id={user.id} onClick={(e) => OnClickHandler(e)}>{`${user.first_name} ${user.last_name}`} </li>
                     </ul>
                     
                 </div>
                
             })
          )
      }
  }
 const page=()=>{
 const Pagenumbers=[];
    for(let i=1;i<=Math.ceil(props.TotalEntry/props.LocationPerPage);i++){
        Pagenumbers.push(i);
    }
        return(
            <nav>
                {RenderLists()}
                <ul className="pagination pg" id="paging">
                    {Pagenumbers.map(number=>(
                        <li key={number} className="page-item">
                            <a onClick= {() => props.Paginate(number) }href='#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>

            </nav>
        )

   }
 
            return (            
                <BrowserRouter >
                <div>
                  {redirect?<Redirect to="/UserInfo"/>:localStorage.getItem('userData') !==null  ? page() : <Redirect to="/"/>} 
                    <Route exact path="/UserInfo" render={() =><UserInfo id={Id} />}/>
                    </div>
                </BrowserRouter>
            )
        }
 export default withRouter(UsersDisplay)
