import { 
  Routes,  
  Route
} from "react-router-dom";
import SignUp from "./pages/signup/signup";
import LoginPage from "./pages/login/loginpage";
import Homepage from "./pages/home/homepage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />  
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
