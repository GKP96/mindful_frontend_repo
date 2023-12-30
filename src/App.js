
import SignUpForm from "./pages/Signup";
import LoginForm from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import {Routes, Route, Navigate} from 'react-router-dom';
import { isUserLoggedIn } from "./authService";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import UserCard from "./components/UserCard";
function App() {
  return (
    <div className="App">
      
      <Routes>
        {isUserLoggedIn() ? <Navbar/> : <></>}
        <Route path="/" element={isUserLoggedIn() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path='/login' element={!isUserLoggedIn() ? <LoginForm /> : <Navigate to="/" />} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path='/add-user' element={isUserLoggedIn()? <AddUser/> : <Navigate to = "/login" /> } />
        <Route path='/update-user' element={isUserLoggedIn()? <AddUser/> : <Navigate to = "/login" />} />
        <Route path='/user-details/:email' element={isUserLoggedIn()? <UserCard/> : <Navigate to = "/login" />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
