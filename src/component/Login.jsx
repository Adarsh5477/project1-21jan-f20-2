
import React from "react";
import "../Login.css";
import { db, auth } from "../firebase";
import { getDoc, getDocs, collection, where, query, doc } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [verify, setVerify] = React.useState(false);
  const[mobno,setMobno]=React.useState();
console.log(mobno);
console.log(verify);

  const navigateTo=useNavigate();

  
  const userCheck = async () => {
    await getDoc(doc(db, "students", udata.roll)).then(docSnap => {
      if (docSnap.exists()) {
        setVerify(true);
       // console.log("ok");
        setMobno( docSnap.data().mobno);
      } else {
        console.log("Your data is not available please contact to admin");
      }
    })
  }



  const [adata, setAdata] = React.useState(false);
  const [udata, setUdata] = React.useState({
    otp: "",
    roll: ""
  });
  console.log(udata);
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('login__btn_otp', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.  
      }
    }, auth)
  }

 const handleSubmit = async (event) => {
    
    event.preventDefault();
    console.log("check")
    generateRecaptcha();
    let appverifier = window.recaptchaVerifier;

    await signInWithPhoneNumber(auth,mobno, appverifier).then(result => {
      window.result = result;
      console.log(window.result)
    }).catch(error => {
      console.log(error);
    });

  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setUdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }
  const verifyOtp = () => {
    
    let result = window.result;
    result.confirm(udata.otp).then((result) => {
      const user = result.user;
      console.log(user);
      if(user){
  navigateTo("/dashboard")
}
      // ...
    }).catch((error) => {
      // ...
      console.log(error);
    });

  }

  return (<div className="login__mainDiv">
    <div className="login__form__div">
    <form >
      
      <p className="login__p">
        * roll no.input YY-schoolCode-DeptCode-serial No. format
      </p>
      
      <p className="login__p">
        * Example roll no. 20-04-DCS-01
      </p>
      
      <div className="login__roll">
        <input 
          type="text"
          placeholder="Roll No." 
          name="roll" 
          value={udata.roll} 
          onChange={handleChange}
          /><br /><br />
      </div>
      
      <div className="login__btn1" >
        <input 
          id="login__btn1"
        type="button"
        value="Verify your RollNo"
        onClick={userCheck}
        /><br /><br />
      </div>
      
      <button  
        type="submit" 
        id="login__btn_otp"
        onClick={handleSubmit}>
        Generate OTP
      </button><br /><br />
     
      <div className="login__otp">
        <input 
          type="number" 
          onChange={handleChange} 
          value={udata.otp} 
          name="otp" 
          autoComplete="off" 
          placeholder="Enter OTP" 
          /><br /><br />
      </div>
      
    </form>
      
    <button 
      id="Login__verify-otp"
      onClick={verifyOtp}>
      Verify OTP
    </button>
      
    </div>
  </div>
  );
}











