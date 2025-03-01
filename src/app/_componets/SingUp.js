import { useState } from "react";

const SingUp = () => {

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingUp =() => {
    alert(fname + lname + email +password);
  } 

  return (
    <>
      <div>
        <h1 className="display-6 text-center">Restaurant SingUp</h1>
        <form>
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

          <button type="submit" className="btn btn-warning w-100" onClick={handleSingUp}>
            SingUp
          </button>
        </form>
      </div>
    </>
  );
};
export default SingUp;
