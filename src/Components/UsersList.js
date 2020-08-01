import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter,withRouter} from 'react-router-dom'
import UsersDisplay from './UsersDisplay';


class UsersList extends Component {
   
    state = {
        users: [],
        currentPage:1,
        postsPerPage: 3,
        test: true
    }

    componentDidMount() {
        axios.get(this.props.Url + 'users?page=2').then((response) => {
            console.log(response.data);
           // console.log("componentdidmount called")
            this.setState({
                users: response.data.data
            })
            console.log(this.state.users)
        })
            .catch(function (error) {
                console.error(error);
            });
         
    }
  
        render(){       
           const indexofLastLocation = this.state.currentPage * this.state.postsPerPage;
           const indexofFirstLocation = indexofLastLocation - this.state.postsPerPage;
           const currentPageLocation = this.state.users.slice(indexofFirstLocation, indexofLastLocation)
           console.log(currentPageLocation)
           const Paginate = (Pagenumber) => {this.setState({currentPage:Pagenumber})}

            return (            
                <BrowserRouter >
                    <div>
                        {/* {this.state.redirect?<Redirect to="/UserInfo"/>:localStorage.getItem('userData') !==null  ? this.RenderLists() : "ani"}
                    <Route exact path="/UserInfo" render={() =><UserInfo id={this.state.id} Url={this.props.Url}/>}/>
                    {this.state.redirect?<Redirect to="/UserInfo"/>:" "} */}
                        <UsersDisplay users={currentPageLocation} LocationPerPage={this.state.postsPerPage} TotalEntry={this.state.users.length} Paginate={Paginate}/>
                        {/* <Pagination LocationPerPage={this.state.postsPerPage} TotalEntry={this.state.users.length} Paginate={Paginate} /> */}
                    </div>
                </BrowserRouter>
            )
        }
    }
    export default withRouter(UsersList)
