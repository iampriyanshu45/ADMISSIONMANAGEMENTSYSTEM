import axios from "axios";
import { useState, useEffect } from "react";
import CourseRequestDetail from "./CourseRequestDetail";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from './CourseRequestDetail.module.css';

const CourseRquests = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [courserequest, setCourseRequest] = useState();

    useEffect(()=> {
        setIsLoading(true)
        axios
          .get('http://localhost:8080/api/v1/courserequest/usercourserequests')
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            setCourseRequest(response.data);
          })
          .then((err) => {
            setIsLoading(false);
            console.log(err);
          });
    }, [])

    const onNewRequestHandler = ()=> {
      setIsLoading(true)
      axios
        .get('http://localhost:8080/api/v1/courserequest/usercourserequestsbystatus?status=NEW')
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
          setCourseRequest(response.data);
        })
        .then((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }

    const onReturnRequestHandler =() => {
      setIsLoading(true)
      axios
        .get('http://localhost:8080/api/v1/courserequest/usercourserequestsbystatus?status=RETURN')
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
          setCourseRequest(response.data);
        })
        .then((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }

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
       <button onClick={onNewRequestHandler} className={classes.btn_request}>New Requests</button>
       <button onClick={onReturnRequestHandler} className={classes.btn_request}>Return Requests</button>
 {courserequest &&
          courserequest.map((item) => (
            <CourseRequestDetail
              key={item.courseRequest.id}
              courseRequest={item.courseRequest}
              user={item.user}
              author={item.author}
              course={item.course}
            />
          ))}
        
    </div>);
}

export default CourseRquests;