
import React from "react";
import "../Info.css";
import { Link } from "react-router-dom";

export default function Info(){
  return <div className="home">

    <div className="info__inner__div">
     <Link
       to={`/login`} 
       id="info__link">
       <div className="info__login">
         Login
       </div>
     </Link>
    <br/>

  </div>
        <img 
          src="../public/voteing.jpg" className="Info__img">
        </img>
    

    </div>
}

    // <Link to={`/signup`} className="home__link"><div className="home__signup">Signup</div></Link>
    // <br/>
