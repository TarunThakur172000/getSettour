import logo from './logo.svg';
import './App.css';
import GetsettourMap from './GetsettourMap';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Blogpost from './Blogpost';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Aboutus from './Aboutus';
import Blog from './Blog';



function App() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
     databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId : process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  
  
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


  return (
    <Router>
    <div className="App">
      <Header/>     
     
        <Routes>
          <Route path="/" element={<GetsettourMap />} />
          <Route path="/blog/:id" element={<Blogpost />} />
          <Route path="/home" element={<GetsettourMap />} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/blog" element={<Blog/>} />

          <Route path="/privacy" element={""} />
        </Routes>
      <footer style={{background:"linear-gradient(48deg, #bddab1, #fbf3e6)",color:"white",display:"flex",justifyContent:"space-evenly",padding:"2vw"}}>
        <div style={{color:"Black"}}>Copyright Getsettour @2023</div>
       <div>
       
            <div ><Link style={{color:"gray"}} to="/privacy">Privacy Policy</Link></div>
            <div ><Link style={{color:"gray"}} to="/contactus">Contact us</Link></div>
            <div ><Link style={{color:"gray"}} to="/Aboutus" >About us</Link></div>
           
       </div>
      </footer>
      
    </div>
    </Router>
    
  );
 
 
}

export default App;
