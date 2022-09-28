import axios from "axios";
import { useState, useEffect } from "react";
import MyCourseDetail from "./MyCourseDetail";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from './MyCourses.module.css';

const MyCourses = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [myCourses, setMyCourses] = useState();

    useEffect(()=> {
        setIsLoading(true)
        const user = JSON.parse(localStorage.getItem('logInUser'));
        axios
          .get(`http://localhost:8080/api/v1/course/usercourses?userId=${user.userID}&status=ISSUED`)
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            setMyCourses(response.data);
          })
          .then((err) => {
            setIsLoading(false);
            console.log(err);
          });
    }, [])


    if (isLoading) {
      return(
          <div className='centered'>
              <LoadingSpinner/>
          </div>
      )
    
  }

  // if (!courserequest) {
  //   return(
  //       <div className='centered'>
  //           <h3>NO REQUESTS</h3>
  //       </div>
  //   )
  // }

    return(<div>

 {myCourses &&
          myCourses.map((item) => (
            <MyCourseDetail
              key={item.courseRequest.id}
              courseRequest={item.courseRequest}
              user={item.user}
              teacher={item.teacher}
              course={item.course}
            />
          ))}
        
    </div>);
}

export default MyCourses;