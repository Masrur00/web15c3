import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes, Route } from "react-router-dom";
import {PrivateRouteEd} from "./components/PrivateRouteEd"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={ <Home />} ></Route>
          <Route path="/employees" element={ <EmployeeList />} ></Route>
          <Route path="/admin" element={ <Admin />} ></Route>
          <Route path="/logout" element={ <Logout />} ></Route>
          <Route path="/login" element={ <Login />} ></Route>
          <Route path="/employees/:id" element={
            <PrivateRouteEd>
            <EmployeeDetails />
            </PrivateRouteEd>
            }></Route>

      </Routes>
    </div>
  );
}

export default App;