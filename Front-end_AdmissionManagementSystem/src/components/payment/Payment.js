import classes from '../course/NewCourse.module.css';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../store/login-slice';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const Payment = (props) => {

    const history = useHistory();
    

    const courseIdRef = useRef();
    const userIdRef = useRef();
    const amountRef = useRef();
    
    


    useEffect(()=> {
        
    }, []) 

    const submitFormHandler = () => {
    //    event.preventdefault();
        const courseId = courseIdRef.current.value;
        const userId = userIdRef.current.value;
        const enteredAmount = amountRef.current.value
        
       
        console.log(courseId, userId);


        axios.post(`http://localhost:8080/api/v1/payment/${courseId}/${userId}`,{
          id: 0,
            paymentDate: new Date(),
            
            amount: enteredAmount,
           
            courseId: courseId,
            userId: userId
            
          }).then(response => {
        
              console.log(response.data);
              alert('Payment Done !!!!');
              history.push('/courses')
          })
     
          
          
       
    }

    return (
        <Card>
        <div className='text-center col-lg-6'><h1>PAYMENT</h1>
          </div>  
        <div className={classes.control}>
          <label htmlFor='courseId'>Course Id</label>
          <input id='text' rows='5' ref={courseIdRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='userId'>User Id</label>
          <input id='text' rows='5' ref={userIdRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='amount'>Amount</label>
          <input id='text' rows='5'  ref={amountRef}/>
        </div>
        
        <div className={classes.actions}>
          <button onClick={submitFormHandler}  className='btn'>Submit</button>
        </div>
    </Card>
    );
}

export default Payment;