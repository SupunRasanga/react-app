import React from 'react'
import {useState} from 'react';
import axios from 'axios';

function StudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [gender, setGender] = useState("");
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  const model = {
    firstName: firstName, 
    lastName: lastName, 
    userId: userId,
    gender: gender,
    email: email,
    password: password};

   const baseUrl = 'https://react-crud-4fc46-default-rtdb.firebaseio.com'

    const postData = () => {
      console.log(model);
      return axios.post(`${baseUrl}/user.json`,model);
    }

  return (
    <div>
      <div className="container">
        <div className="card mt-5">
          <div className="card-body">
          <form>
          <div className="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input type="text" className="form-control" onChange = {(e)=>{
              setFirstName(e.target.value)}} />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Last Name</label>
            <input type="text" className="form-control" onChange={(e)=>{
              setLastName(e.target.value)}} />
          </div>
          <div className="row">
            <div className="col-6">
            <div className="form-group">
            <label for="exampleInputEmail1">User Id</label>
            <input type="number" className="form-control" onChange={(e)=>{
              setUserId(e.target.value);
            }}/>
            </div>
            </div>
            <div className="col-6"> 
              <label for="exampleInputEmail1">Gender</label>
                <select className="form-control" onChange={(e)=>{
                  setGender(e.target.value);
                }}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" onChange={(e)=>{
              SetEmail(e.target.value);
            }}/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" onChange={(e)=>{
              setPassword(e.target.value);
            }}/>
          </div>
       
          <button type="submit" className="btn btn-primary" onClick={postData}>Register</button>
      </form>
          </div>
        </div>
       
      </div>
      {model.lastName}
    </div>
  )
}

export default StudentForm
