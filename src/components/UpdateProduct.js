import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const [type, setType] = useState("");
  const [initials, setInitials] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const params =useParams();
  const navigate=useNavigate();
  
  useEffect(()=>{
    getFormDetailes();
  },[])

  const getFormDetailes=async()=>{
    console.log(params)
    let result=await fetch(`http://localhost:5000/insurance/${params.id}`);
    result =await result.json();
    setType(result.type)
    setInitials(result.initials)
    setFirstName(result.firstName)
    setMiddleName(result.middleName)
    setLastName(result.lastName)
    setMobNo(result.mobNo)
    setDob(result.dob)
    setAddress(result.address)

    // console.log(result);
  }
  const updateForm = async () => {
      console.log(type,initials,firstName,middleName,lastName,mobNo,dob,address)
      let result =await fetch(`http://localhost:5000/insurance/${params.id}`,{
        method:'Put',
        body:JSON.stringify({type,initials,firstName,middleName,lastName,mobNo,dob,address}),
        headers:{
           'Content-Type':"application/json"
        }
      });
      result=await result.json()
      console.log(result)
      navigate('/')
    }
  

  function forFirstName(e) {
    let fname = e.target.value;
    const final =
      fname.slice(0, 1).toUpperCase() + fname.slice(1).toLowerCase();
    setFirstName(final);
  }

  function forMiddleName(e) {
    let mname = e.target.value;
    const final =
      mname.slice(0, 1).toUpperCase() + mname.slice(1).toLowerCase();
    setMiddleName(final);
  }

  function forLastName(e) {
    let lname = e.target.value;
    const final =
      lname.slice(0, 1).toUpperCase() + lname.slice(1).toLowerCase();
    setLastName(final);
  }
  

  const calcAge = dob;

  const current = new Date();
  const birthDate = new Date(calcAge);
  const year = current.getFullYear() - birthDate.getFullYear();
  const month = current.getMonth() - birthDate.getMonth();
  const day = current.getDate() - birthDate.getDate();

  const calculateAge = `${year} Years, ${Math.abs(month)} Months, ${Math.abs(
    day
  )} Days`;

  return (
    <div className='insurnacepage'>
           
      <h1>Update Form</h1>
      <div className="formStyle">
        <form className="formbox">
          <label> Type : </label>
          <select className='formInput'
            required
            name="type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="Personal">Personal</option>
            <option value="Commercial">Commercial</option>
          </select>
          
          <br />
         
          {type === "Personal" ? (
            <div>
              <label> Personal : </label>
              <select className='formInput'
                required
                style={{ width: "15%" }}
                name="initials"
                onChange={(e) => {
                  setInitials(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
              </select>{" "}
            </div>
          ) : type === "Commercial" ? (
            <div>
              {" "}
              <label> Commercial : </label>
              <select className='formInput'
                required
                style={{ width: "15%" }}
                name="initials"
                onChange={(e) => {
                  setInitials(e.target.value);
                }}
              >
                <option>Select</option>
                <option value="Pub.">Limited Liability Company </option>
                <option value="Pvt.">Private Limited Company</option>
              </select>
            </div>
          ) : null}
          <br />
          <label> First Name : </label>
          <input className='formInput'
            type="text"
            name="firstName"
            onChange={forFirstName}
            placeholder="Enter First Name"
            required
          />
          
          <br />
          <br />
          <label> Middle Name : </label>
          <input className='formInput'
            type="text"
            name="middleName"
            onChange={forMiddleName}
            placeholder="Enter Middle Name"
            required
          />
          
          <br />
          <br />
          <label> Last Name : </label>
          <input className='formInput'
            type="text"
            name="lastName"
            onChange={forLastName}
            placeholder="Enter Last Name"
            required
          />{" "}
          
          <br />
          <br />
          <label>Full Name : </label>
          <input className='formInput'
            name="fullName"
            value={`${initials} ${firstName} ${middleName} ${lastName}`}
            placeholder="Full Name"
            disabled
          />
          <br />
          <br />
          <label> Mobile No. : </label>
          <input className='formInput'
            type="number"
            name="mobNo"
            onChange={(e) => {
              setMobNo(e.target.value);
            }}
            placeholder="Enter Mobile No. ( 10 digits )"
            minLength="10"
            required
          />{" "}
          
          <br />
          <br />
          <label> DOB : </label>
          <input className='formInput'
            type="date"
            name="dob"
            onChange={(e) => {
              setDob(e.target.value);
            }}
            placeholder="Enter DOB"
            required
          />
          
          <br />
          
          {calcAge
            ? calculateAge && (
                <div>
                  <label> Age : </label>
                  <input
                    type="text"
                    id="Age"
                    value={calculateAge}
                    name="age"
                    disabled
                  />
                </div>
              )
            : null}
          <br />
          <label> Address : </label>
          <textarea className='formInput'
            type="text"
            name="address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            placeholder="Enter Address"
            required
          />{" "}
          
          <br />
          <br />
          <button className='appbutton' type="submit" onClick={updateForm}>
           Reset
          </button>
        </form>
      </div>
      <br />
    </div>
  );
}

export default UpdateProduct;

