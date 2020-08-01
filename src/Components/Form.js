import React from 'react';

export const Form= (props)=>{

return(
<div>
<div className="form-group row" id="head">
    <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <input type="text" alt="Email" className="form-control" placeholder="Enter Email" onChange={(e) => props.Change(e)} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
    <input type="password" alt="password" className="form-control" placeholder="Password" onChange={(e) => props.Change(e)} />
    </div>
    <button onClick={props.Click} type="submit" id="submit" className="btn btn-primary">Submit</button>
</div>
</div>
)
}


{/* <div>
   <form>
  <div className="form-group row">
    <label htmlFor="Email" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
    <input type="text" alt = "Email"className="form-control" id="Email" placeholder="Enter Email"  onChange={(e) => props.Change(e)} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" alt = "password" className="form-control" id="inputPassword" placeholder="Password"  onChange={(e) => props.Change(e)} />
    </div>
    <button onClick ={props.Click} type="submit" id="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div> */}