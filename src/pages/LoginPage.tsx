import { useState } from "react";
import Login from "../componenets/Login";
import Signup from "../componenets/Signup";

const LoginPage = () => {
   const [registered,setRegistered] = useState(true);

    return ( <div>
        {registered?<Login setRegistered={setRegistered}/>:<Signup/>}
    </div> );
}
 
export default LoginPage;