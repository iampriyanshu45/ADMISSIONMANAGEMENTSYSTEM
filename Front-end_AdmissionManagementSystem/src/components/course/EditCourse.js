import { Fragment, useRef, useState } from "react";
import { useHistory } from "react-router";
import classes from './NewCourse.module.css';
import LoadingSpinner from "../UI/LoadingSpinner";
import Card from "../UI/Card";
import axios from "axios";
import { Link } from 'react-router-dom';

const EditCourse = (props) => {

    const history = useHistory();


    const authorInputRef = useRef();
    const nameInputRef = useRef();
    const feesRef = useRef();
  
    function submitFormHandler(event) {
      event.preventDefault();
    
  
      const enteredAuthor = authorInputRef.current.value;
      const enteredName = nameInputRef.current.value;
      const enteredFees = feesRef.current.value
  
      // optional: Could validate here

      axios
        .post("http://localhost:8080/api/v1/course", {
          author: enteredAuthor,
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
          <label htmlFor='name'>Text</label>
          <input id='text' rows='5' ref={nameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='fees'>Fees</label>
          <input type='text' id='fees' ref={feesRef} />
        </div>
        <div className={classes.actions}>
          <Link  className='btn'>Edit Course</Link>
        </div>
      </form>
    </Card>
    </Fragment>);
}


export default EditCourse;