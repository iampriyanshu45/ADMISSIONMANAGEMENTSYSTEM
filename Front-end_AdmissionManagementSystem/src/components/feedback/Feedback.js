import classes from '../course/NewCourse.module.css';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../store/login-slice';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const Feedback = (props) => {

    const history = useHistory();
    

    const courseIdRef = useRef();
    const remarkRef = useRef();
    
    


    useEffect(()=> {
        
    }, []) 

    const submitFormHandler = () => {
    //    event.preventdefault();
        const courseId = courseIdRef.current.value;
        const enteredRemark = remarkRef.current.value
        
       
        console.log(courseId);


        axios.post(`http://localhost:8080/api/v1/feedback/${courseId}`,{
          id: 0,
            
            
            remark: enteredRemark,
            
            
            courseId: courseId,
            
          }).then(response => {
        
              console.log(response.data);
              alert('Feedback Submitted !!!!');
              history.push('/courses')
          })
     
          
          
       
    }

    return (
        <Card>
         <div className='text-center col-lg-6'><h1>FEEDBACK</h1>
          </div> 
        <div className={classes.control}>
          <label htmlFor='courseId'>Course Id</label>
          <input id='text' rows='5' ref={courseIdRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='remark'>Remark</label>
          <input id='text' rows='5'  ref={remarkRef}/>
        </div>
        
        <div className={classes.actions}>
          <button onClick={submitFormHandler}  className='btn'>Submit</button>
        </div>
    </Card>
    );
}

export default Feedback;