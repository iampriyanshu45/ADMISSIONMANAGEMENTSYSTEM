import { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from './NewCourse.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
import axios from "axios";

const NewCourse = (props) => {

    const history = useHistory();


    const teacherInputRef = useRef();
    const nameInputRef = useRef();
    const feesRef = useRef();
  
    function submitFormHandler(event) {
      event.preventDefault();
    
  
      const enteredTeacher = teacherInputRef.current.value;
      const enteredName = nameInputRef.current.value;
      const enteredFees = feesRef.current.value
  
      // optional: Could validate here

      axios
        .post("http://localhost:8080/api/v1/course", {
          teacher: enteredTeacher,
          name: enteredName,
          fees: enteredFees,
        })
        .then((response) => {
        //  setPost(response.data);
        history.push('/courses');
        });
  
    }


    return (<Fragment>
    <Card>
      <form  className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
     
        <div className={classes.control}>
          <label htmlFor='name'>Course Name</label>
          <input id='text' rows='5' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='teacher'>Teacher</label>
          <input type='text' id='teacher' ref={teacherInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='fees'>Fees</label>
          <input type='text' id='fees' ref={feesRef} />
        </div>
        <div className={classes.actions}>
          <button  className='btn'>Add Course</button>
        </div>
      </form>
    </Card>
    </Fragment>);
}


export default NewCourse;