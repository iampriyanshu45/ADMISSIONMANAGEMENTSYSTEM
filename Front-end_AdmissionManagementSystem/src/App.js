import {Link, Route, Switch} from 'react-router-dom'

import Library from './components/container/Library';
import CourseList from './components/course/CourseList';
import NewCourse from './components/course/NewCourse';
import Login from './components/login/Login';
import EditCourse from './components/course/EditCourse';
import CourseRquests from './components/course/CourseRequest/CourseRequests';
import MyCourses from './components/course/mycourses/MyCourses';
import Register from './components/login/Register';
import NewAdmission from './components/admission/NewAdmission';
import Payment from './components/payment/Payment';
import Feedback from './components/feedback/Feedback';
import Feedbacks from './components/feedback/Feedbacks';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Library>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/courserequest" component={CourseRquests} />
          <Route path="/mycourses" component={MyCourses} />
          <Route path="/register" component={Register} />
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/courses" exact component={CourseList} />
          <Route path="/courses/:courseId">
            <EditCourse />
          </Route>
          <Route path="/new-course">
            <NewCourse />
          </Route>
          <Route path="/user-list">
            <UserList />
          </Route>
          <Route path="/admission">
            <NewAdmission/>
          </Route>
          <Route path="/payment">
            <Payment/>
          </Route>
          <Route path="/feedback">
            <Feedback/>
          </Route>
          <Route path="/feedbacks">
            <Feedbacks/>
          </Route>
        </Switch>
      </Library>
    </div>
  );
}

export default App;
