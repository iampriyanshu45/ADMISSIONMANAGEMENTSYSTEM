import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import  classes from './Header.module.css';
import { useHistory } from "react-router";
import { loginActions } from '../store/login-slice';

const Header = () => {
    const[isAdmin, setIsAdmin] = useState(false);
    const[isUser, setIsUser] = useState(false);
    const logInUser = useSelector(state => state.login)
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect( ()=> {
  
            const user = JSON.parse(localStorage.getItem('logInUser'));
            if (user) {
                setIsAdmin(user.role === 'ADMIN');
            }
            console.log(logInUser);
        
    }, [])

    const onLogOutHandler = () => {
      //localStorage.setItem('logInUser',"");
      dispatch(
        loginActions.setLogInUser( {userId:'', email:'', token:'', role:''})
      );
      localStorage.clear();
        history.push('/');
    }

    return (
        <header className={classes.header}>
          <div classes={classes.logo}><h1>ADMISSION SYSTEM</h1></div>
          <nav className={classes.nav}>
            <ul>
              <li>
                { logInUser&&<NavLink to="/courses" activeClassName={classes.active}>
                  All Courses
                </NavLink>}
              </li>
              
              {(logInUser.role === 'ADMIN' || isAdmin) && <li>
                <NavLink to="/new-course" activeClassName={classes.active}>
                 Add a Course
                </NavLink>
              </li>}
            {(logInUser.role === 'USER' || isUser) && <li>
            <NavLink to="/feedback" activeClassName={classes.active}>
                Feedback
            </NavLink>
            </li>}
              <li>
                {logInUser&&<NavLink to="/admission" activeClassName={classes.active}>
                  Admission 
                </NavLink>}
              </li>
                <button onClick={onLogOutHandler} className={classes.btnheader}>
                  Log Out
                </button>
            </ul>
          </nav>
        </header>
      );
};

export default Header;
