import React from "react";
import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";


function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let result = await fetch('http://localhost:5000/insurance');
    let data = await result.json();
    setUsers(data);
    // console.log("User List -", data);
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setUsers(result);
      }
    } else {
      getUsers();
    }
  };

  

  return (
    <div className='product-list'>
      <h1>Total List</h1>
      Search -{" "}
      <input className='search_bar'
        type="search"
        placeholder="Search User here"
        onChange={searchHandle}
      />
      <br />
      <br />
      <table>
      <tbody>
      <tr className="number1" >
     
  
                <td >Sr.No</td>
                <td >Id</td>
                <td >Type</td>
                <td >Initials</td>
                <td >First name</td>
                <td >Middle Name</td>
                <td >Last Name</td>
                <td >Mobile Number</td>               
                <td >Address</td>
                <td >DOB</td>
                <td >Operation</td>
       </tr>
             {
                users.length>0 ?users.map((item,i)=>
                <tr>
     
  
                <td  >{i+1}</td>
                <td >{item._id}</td>
                <td >{item.type}</td>
                <td >{item.initials}</td>
                <td >{item.firstName}</td>
                <td>{item.middleName}</td>
                <td >{item.lastName}</td>
                <td >{item.mobNo}</td>               
                <td >{item.address}</td>
                <td >{item.dob}</td>
                <td>
                    <Link to={"/update/"+item._id}>Update</Link>
                </td>
       </tr>
             
                ):<h1 id="nofound">No result found</h1>
            }
            </tbody>
            </table>
    </div>
  );
}

export default Users;

