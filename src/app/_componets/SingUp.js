import { useState } from "react";

const SingUp = () => {

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const  handleSingUp = async(event) => {
    event.preventDefault();
    // alert(fname + lname + email +password);
    try{

       let response = await fetch("/api/restaurant",{
      method:"PUT",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({fname,lname,email,password})

    });
    // console.log("raw Response :", response);

    if(!response.ok)
    {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log("Parsed Response:", JSON.stringify(data, null, 2));
    console.log("Message", data.message)
    if (data.success) {
        alert("Registration is Successfully");
    }
  }
    catch (error) {
      console.error("Error in Signup:", error);
    }
  } 


  return (
    <>
      <div>
        <h1 className="display-6 text-center">Restaurant SingUp</h1>
        <form  onSubmit={handleSingUp}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" value={fname} onChange={(e)=>setFirstName(e.target.value)}></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" value={lname} onChange={(e)=> setLastName(e.target.value)}></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            SingUp
          </button>
        </form>
      </div>
    </>
  );
};
export default SingUp;
