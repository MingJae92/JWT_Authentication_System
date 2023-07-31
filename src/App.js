import './App.css';
import LoginForm from './components/LoginForm';
import MyDetails from './components/MyDetails';
import SignUp from './components/SignUp'
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/MyDetails" element={<MyDetails/>}></Route>
      </Routes>
      <MyDetails/>
    </div>
  );
}

export default App;
