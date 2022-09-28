import { useState, useEffect, useRef } from "react";
import Feedback from "./Feedback";
import axios from 'axios';
import LoadingSpinner from "../UI/LoadingSpinner";

import { useSelector } from "react-redux";



const Feedbacks = () => {
    const[feedbacks, setFeedbacks] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [adminData, setAdminData] = useState();
    const [userData, setUserData] = useState();
    const remarkInputRef = useRef();
    const logInAdmin = useSelector(state => state.login)
   
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:8080/api/v1/feedback').then((response) => {
            console.log(response.data);
            setIsLoading(false)
            setFeedbacks(response.data);
         
          }).then((err)=>{
            setIsLoading(false)
              console.log(err);
          });
          console.log("***********");
          if(!logInAdmin.adminId){
            const user = JSON.parse(localStorage.getItem('logInUser'));
            console.log(user);
            setUserData(user);
          } else {
            setAdminData(logInAdmin);
          }
          console.log(adminData);
      // console.log(logInUser);
    }, []);

    


  // console.log(courses);
    return (
      <div>
        {feedbacks &&
          feedbacks.map((item) => (
            <Feedback
              key={item.id}
              id={item.id}
              remark={item.remark}
              courseId={item.courseId}
              
            />
          ))}
      </div>
    );
}

export default Feedbacks;
