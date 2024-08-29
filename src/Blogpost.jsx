import React,{useState,useEffect} from "react";

import { getStorage, ref,getDownloadURL } from "firebase/storage";
import GetsettourMap from "./GetsettourMap";
import {useParams} from 'react-router-dom';
import "./Loader.css"

function Blogpost(){
    
  const [textContent, setTextContent] = useState('');
  const {id}=useParams();
 

  useEffect(() => {
    // Initialize Firebase (assuming you've already set up your Firebase config)

    // Get a reference to the text file in Firebase Storage
    const storage = getStorage();
    const textFileRef = ref(storage,`/${id}.html`);

    // Download the text content
    getDownloadURL(textFileRef).then((url) => {
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          setTextContent(data);
        })
        .catch((error) => {
          console.error('Error fetching text content:', error);
        });
    });
  }, [`/${id}.html`]);

  return (
    <div id="blo" style={{display:"flex"}}>
    
      { textContent ? (
         <div style={{display:"flex"}}><div style={{ textAlign: "left", width: "70%", borderRight: "1px solid lightgray", padding: "2vw" }} dangerouslySetInnerHTML={{ __html: textContent }} />
         <div style={{ width: "30%",overflowX:"hidden" }}>
          <GetsettourMap width="30vw" />
        </div></div> 
        )
    :(
      <div style={{height:"50rem"}}>
      <div class="loader" ></div>
      </div>
      // <p style={{margin:"auto",padding:"10%",fontSize:"5vw"}}>Loading...</p>
      )
      }
    
    
  </div>
  
  );
}
export default Blogpost;    