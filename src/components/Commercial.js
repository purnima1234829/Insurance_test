import React, { useState } from "react";


function Insurance() {
  const [type, setType] = useState("");
  const [initials, setInitials] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const collectData = async (e) => {
    if (
      !type ||
      !initials ||
      !firstName ||
      !middleName ||
      !lastName ||
      !mobNo ||
      !dob ||
      !address
    ) {
      setError(true);
      return false;
    } else if (mobNo.length < 10) {
      alert(`Mobile number must be 10 Digit`);
      e.preventDefault();
    } else if (
      
      mobNo === "0000000000" ||
      mobNo === "1111111111" ||
      mobNo === "2222222222" ||
      mobNo === "3333333333" ||
      mobNo === "4444444444" ||
      mobNo === "5555555555" ||
      mobNo === "6666666666" ||
      mobNo === "7777777777" ||
      mobNo === "8888888888" ||
      mobNo === "9999999999"
    ) {
      alert(`Please Enter Valid Mobile number`);
      e.preventDefault();
    } else if (mobNo.length > 10) {
      alert(`Number must be 10 digit`);
      e.preventDefault();
    } else if (year < 18) {
      alert(`Age Invalid`);
      e.preventDefault();
    } else {
      let result = await fetch("http://localhost:5000/add-insurance", {
        method: "POST",
        body: JSON.stringify({
          type,
          initials,
          firstName,
          middleName,
          lastName,
          mobNo,
          dob,
          address,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);

      if (!result) {
        alert(`Data Already Exists `);
      } else if (result) {
        alert(`Hi ${firstName}..Your form submitted successfully !!! `);
      }
      console.log(result);
    }
  };

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
           
      <h1>Insurance Form</h1>
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
          {error && !type && <p className="invalid">*Enter valid - Type</p>}
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
          {error && !firstName && (
            <p className="invalid">*Please Enter First Name</p>
          )}
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
          {error && !middleName && (
            <p className="invalid">*Please Enter Middle Name</p>
          )}
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
          {error && !lastName && (
            <p className="invalid">*Please Enter Last Name</p>
          )}
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
          {error && !mobNo && mobNo.length < 10 && (
            <p className="invalid">*Please Enter valid Mobile no.</p>
          )}
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
          {error && !dob && <p className="invalid">*Please Enter Valid DOB</p>}
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
          {error && !address && (
            <p className="invalid">*Please Enter valid Address</p>
          )}
          <br />
          <br />
          <button className='appbutton' type="submit" onClick={collectData}>
            Submit
          </button>
        </form>
      </div>
      <br />
    </div>
  );
}

export default Insurance;

