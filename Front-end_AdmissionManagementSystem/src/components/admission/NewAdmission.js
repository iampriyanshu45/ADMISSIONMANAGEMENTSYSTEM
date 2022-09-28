import classes from '../course/NewCourse.module.css';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../store/login-slice';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const NewAdmission = (props) => {

    const history = useHistory();
    

    const courseIdRef = useRef();
    const userIdRef = useRef();
    const emailInputRef = useRef();
    const fullNameInputRef = useRef();
    const guardianNameInputRef = useRef();
    
    const birthDateInputRef = useRef();
    const addressInputRef = useRef();
    const mobileNumberInputRef = useRef();
    


    useEffect(()=> {
        
    }, []) 

    const submitFormHandler = () => {
    //    event.preventdefault();
        const courseId = courseIdRef.current.value;
        const userId = userIdRef.current.value;
        const email = emailInputRef.current.value;
        
       const fullName = fullNameInputRef.current.value;
       const guardianName = guardianNameInputRef.current.value;
      const address = addressInputRef.current.value;
      const birthDate = birthDateInputRef.current.value;
      const mobileNumber = mobileNumberInputRef.current.value;
      
      
       
        console.log(courseId, userId);


        axios.post(`http://localhost:8080/api/v1/admission/${courseId}/${userId}`,{
          id: 0,
            admissionDate: new Date(),
            email: email,
            fullName: fullName,
            guardianName: guardianName,
           
            birthDate:birthDate,
            mobileNumber:mobileNumber,
            address:address,
            
            
            
            userId: userId,
            
            courseId: courseId,
            status: 0
          }).then(response => {
        
              console.log(response.data);
              alert('Admission Done !!!!');
              history.push('/payment')
          })
     
          
          
       
    }

    return (
        <Card>
          <div className='text-center col-lg-6'><h1>AdmissionForm</h1>
          </div>
           <div className={classes.control}>
          <label htmlFor='fullName'>fullName</label>
          <input type="fullName" title="Field should not be empty"  id='text' rows='5' ref={fullNameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='guardianName'>Guardian Name</label>
          <input id='text' rows='5' ref={guardianNameInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type="email" id='text' rows='5' ref={emailInputRef}/>
        </div> 
        <div className={classes.control}>
          <label htmlFor='mobileNumber'>Mobile Number</label>
          <input type="parentFullName" id='text' rows='5' ref={mobileNumberInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='birthDate'>Birth_Date</label>
          <input  type="date" id='birthDate'  ref={birthDateInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type="text" id='text' rows='5' ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='courseId'>Course Id</label>
          <input id='text' rows='5' ref={courseIdRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='userId'>User Id</label>
          <input id='text' rows='5'  ref={userIdRef}/>
        </div>
        
        <div className={classes.actions}>
          <button onClick={submitFormHandler}  className='btn'>Submit</button>
        </div>
    </Card>
    );
}

export default NewAdmission;