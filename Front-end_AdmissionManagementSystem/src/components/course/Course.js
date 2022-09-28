import classes from './Course.module.css';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Course = (props) => {
    const[isAdmin, setIsAdmin] = useState(false);
    const [logInUserData, setlogInUserData] = useState();
    const logInUser = useSelector(state => state.login)
   // console.log(logInUser);

    const onEditHandler = () => {
        //TODO///
    }

    useEffect( ()=> {
        if(!logInUser.userId){
            const user = JSON.parse(localStorage.getItem('logInUser'));
            console.log(user);
            setIsAdmin(user.role === 'ADMIN');
            setlogInUserData(user);
            console.log(logInUserData);

          } else {
            setIsAdmin(logInUser.role === 'ADMIN');
            setlogInUserData(logInUser);
            console.log(logInUser);
          }
    }, [])

    const onCourseRequestHandler = () => {
        console.log(logInUserData)

        axios.post("http://localhost:8080/api/v1/courserequest", {
            courseId: props.id,
            quantity: 1,
            status: "NEW",
            userId: logInUserData.userId
          })
        .then((response) => {
            alert('Course Request sent !!!')
        console.log(response)
        });
    }

    const onDeleteHandler = () => {
        const courseData = {
            id: props.id,
            name: props.name,
            quantity: props.fees,
        teacher: props.teacher
          }
        console.log(props
            .id)
            console.log(courseData);
        axios.delete(`http://localhost:8080/api/v1/course/admin?courseId=${ props.id}`)
        .then((response) => {
            alert('Course Deleted !!!')
        console.log(response)
        });
    }

    return(
        <div className={classes.coursediv}>
    {!(isAdmin) && <li className={classes.item}>
    <figure>
        <blockquote>
        <p>{props.id}</p>
        <p>{props.name}</p>
        </blockquote>
        <figcaption>{props.teacher}</figcaption>
        <figcaption>Fees : {props.fees}</figcaption>
      </figure>
    </li>}
    { (isAdmin) && <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.id}</p>
          <p>{props.name}</p>
        </blockquote>
        <figcaption>{props.teacher}</figcaption>
        <figcaption>Fees : {props.fees}</figcaption>
      </figure>
      <Link className="btn" onClick={onEditHandler}>Edit</Link>
      <button className="btn" onClick={onDeleteHandler}>Delete</button>
    </li> }
    </div>
    // </li>
  );

}

export default Course;