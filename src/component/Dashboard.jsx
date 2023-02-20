import React from "react";
import Dashboard from "../Dashboard.css"
import { getDoc, getDocs, collection, where, query, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function(){
const [poll,setPoll]=React.useState({
  pname:"",
  pinfo:""
})
 
 const fetchPolls =async ()=>{
   
   await getDoc(doc(db, "polls", "X1V0mkYjSZ8DMUa6CrIi")).then(docSnap => {
      if (docSnap.exists()) {
        //setVerify(true);
        
        setPoll( ()=>({pname:docSnap.data().pollname,pinfo:docSnap.data().info
          }));
        console.log(poll);
      } else {
        console.log("Your data is not available please contact to admin");
      }
    })
 } 
//const collectionName = 'myCollection';

const collectionRef = collection(db,"/polls");

collectionRef.listDocuments()
  .then((documents) => {
    documents.forEach((doc) => {
      console.log(doc.id);
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });






  
  return(
    <>
   <div className="Dboard__Header">
   <img src="../public/favicon.svg" height="60px" width="60px"/>
     <p className="Dboard__header__name">Hi Adarsh Kumar Dash</p>
    <p className="Dboard__header__roll">20/04/DCS/03</p>
   </div>
      <div className="dashboard__body"> 
      <h3>Ongoing Polls...</h3>
        <div>
        <div>{poll.pname}</div>
          <div>{poll.pinfo} <br/> q{q} </div>
        </div>
      </div>
    </>
  )
}

//fetch polls from db