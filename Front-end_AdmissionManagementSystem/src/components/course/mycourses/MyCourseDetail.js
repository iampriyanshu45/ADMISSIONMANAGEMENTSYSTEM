import axios from "axios";

import classes from './MyCourseDetail.module.css';
const MyCourseDetail = (props) => {
   
   

    const onReturnHandler = () => {
        const requestUrl = `http://localhost:8080/api/v1/courserequest/admin/action?reruestId=${props.courseRequest.id}&action=RETURN`;
        console.log(requestUrl);
        axios.put(`http://localhost:8080/api/v1/courserequest/admin/action?reruestId=${props.courseRequest.id}&action=RETURN`).then(response => {
            console.log('Return Course Request Sent!!');
            alert('Return Course Request Sent!!');
        })
    }

    return (
      <div>
        <li className={classes.item}>
          <figure>
            <blockquote>
              <p>{props.course.name}</p>
            </blockquote>
            <figcaption>{props.course.teacher}</figcaption>
            <figcaption>
              Fees : {props.course.fees}
            </figcaption>
            <figcaption>Requested By: {props.user.firstName} {props.user.lastName}</figcaption>
            <figcaption>Request Status: {props.courseRequest.status}</figcaption>
          </figure>
        
          <button onClick={onReturnHandler} className={classes.btn_request}>Return Course</button>
              
        </li>
      </div>
    );
}



export default MyCourseDetail;