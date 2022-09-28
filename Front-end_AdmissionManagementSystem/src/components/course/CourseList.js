import { useState, useEffect, useRef } from "react";
import Course from "./Course";
import axios from 'axios';
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './NewCourse.module.css';
import { useSelector } from "react-redux";



const CourseList = () => {
    const[courses, setCourses] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState();
    const authorInputRef = useRef();
    const logInUser = useSelector(state => state.login)
   
    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:8080/api/v1/course').then((response) => {
            console.log(response.data);
            setIsLoading(false)
            setCourses(response.data);
         
          }).then((err)=>{
            setIsLoading(false)
              console.log(err);
          });
          console.log("***********");
          if(!logInUser.userId){
            const user = JSON.parse(localStorage.getItem('logInUser'));
            console.log(user);
            setUserData(user);
          } else {
            setUserData(logInUser);
          }
          console.log(userData);
      // console.log(logInUser);
    }, []);

    if (isLoading) {
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }


  // console.log(courses);
    return (
        <div>
        
        {courses &&
          courses.map((item) => (
            <Course
              key={item.id}
              id={item.id}
              name={item.name}
              teacher={item.teacher}
              fees={item.fees}
            />
          ))}
      </div>
    );
}

export default CourseList;
