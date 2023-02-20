import React from "react";
import {db,auth} from "../firebase";
import {getDoc,getDocs,collection,where,query,doc} from "firebase/firestore";
import { RecaptchaVerifier,signInWithPhoneNumber} from "firebase/auth";
import {useNavigate} from "react-router-dom";


export default function Login(){

  
  const[adata,setAdata]=React.useState(false);
  const[udata,setUdata]=React.useState({otp:"",
                                       mob:"",
                                       roll:""
                                        });
  
getDoc(doc(db, "students", "20-04-DCS-05")).then(docSnap => {
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
})

console.log(udata);
  const generateRecaptcha=()=>{
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
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
    let appverifier= window.recaptchaVerifier;
     console.log(auth);
     console.log(udata.mob);
     console.log(appverifier);
     await signInWithPhoneNumber(auth,udata.mob,appverifier).then(result =>
       {
       window.result=result;
         console.log(window.result)
     }).catch(error=>{
       console.log(error);
     }); 
    }

    const handleChange = (e) => {
      const { name, value } = e.target
        setUdata((prev)=>{ 
          return {...prev,
          [name]:value }
        });
    }

  const verifyOtp=()=>{
    let result=window.result;
    result.confirm(udata.otp).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
      console.log(error);
});
//using query to find if the number is in the DB or not
    
  }
        return (<>
            <form >
                 <input type="tel" inputMode="decimal"  onChange={handleChange} placeholder="mobNo" name= "mob" value={udata.mob} autoComplete="off" maxLength={13}/>
<br/>
                
                <button id="sign-in-button" type="submit"onClick={handleSubmit}>Check</button>
                <div>
                   <input type="number" onChange={handleChange} value={udata.otp} name= "otp" autoComplete="off"/>
                </div>
            </form>
          <button onClick={verifyOtp}>verify</button>
          <div>
            
          </div>
        </>
        );
}