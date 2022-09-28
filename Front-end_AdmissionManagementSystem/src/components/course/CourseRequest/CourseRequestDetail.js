import axios from "axios";
import { useState, useEffect } from "react";
import classes from './CourseRequestDetail.module.css';
const CourseRequestDetail = (props) => {
   
    const onApproveHandler = () => {
        let requestUrl;
        if (props.courseRequest.status === 'NEW') {
            requestUrl = `http://localhost:8080/api/v1/courserequest/admin/action?reruestId=${props.courseRequest.id}&action=ISSUED`;
        }
        if (props.courseRequest.status === 'RETURN') {
            requestUrl = `http://localhost:8080/api/v1/courserequest/admin/action?reruestId=${props.courseRequest.id}&action=COMPLETE`;
        }
        console.log(requestUrl);

        axios.put(requestUrl).then(response => {
            console.log('course Request Approved');
            alert('course Request Approved');
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
              Fees : {props.course.quantity}
            </figcaption>
            <figcaption>Requested By: {props.user.firstName} {props.user.lastName}</figcaption>
            <figcaption>Request Status: {props.courseRequest.status}</figcaption>
          </figure>
        
          {(props.courseRequest.status==='NEW' || props.courseRequest.status==='RETURN') && <button onClick={onApproveHandler} className={classes.btn_request}>Approve</button>}
          <br/>
     
        </li>
      </div>
    );
}



export default CourseRequestDetail;