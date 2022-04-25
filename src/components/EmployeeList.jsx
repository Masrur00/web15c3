import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export const EmployeeList = () => {
    const [empList,setList] = useState([]);
    useEffect(()=>{
          axios.get(`http://localhost:8080/employee`)
          .then(({data})=> setList(data));
    },[])
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {
         empList.map( (e,i)=> 
           <Link to={`/employees/${e.id}`} key={i} >
            <div key={i+1000} className="employee_card">
            <img src={e.image} className="employee_image" />
            <span className="employee_name">{e.employee_name}</span>
            <span className="employee_title">{e.title}</span>
           </div>                  
           </Link>
         )}       
       
      </div>
    );
  };