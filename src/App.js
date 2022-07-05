import { Routes, Route } from 'react-router-dom';
import './App.css';
import PersistentDrawerLeft from './menubar';


function App() {


    <Routes>
      <Route path="/" element={<PersistentDrawerLeft />} />
      <Route path="/login" element={<UserLogin/>}/>
    </Routes>


  return (
    <div className="App">
      <UserLogin/>
    </div>
  );
}

function UserLogin() {

  return(
    <div className="login-container">
       <div className="class-name"> 
       <div className="class-name1">
          <p>class</p>
          <p>Student</p>
       </div>
      </div>
      <div className="login">
      <label>Email</label>
      <input type="email"/>
      <label>Password</label>
      <input type="Password" />
      <button className="login-button">Login</button>
      <p>Forgot Password</p>
      </div>
     <div className="image">
      <img 
      className="pic"
      src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8&w=1000&q=80" 
      alt="office"/>
     </div>
      
    </div>
  )
}

export default App;
