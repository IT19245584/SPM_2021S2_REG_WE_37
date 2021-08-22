import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminLogin from './components/Admin.Login'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import Index from './components/index'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import './asserts/css/style.css'

//import course
import Add_Course from './components/Course/course_add';
import Course_Dashboard from './components/Course/course_dashboard';
// import Update_Course from './components/Course/course_update';
import View_Table_Course from './components/Course/course_view_table';
// import View_Course from './components/Course/course_view';

//import lessons 
import Add_Lesson from './components/Lesson/lesson_add';
// import Lesson_Dashboard from './components/Lesson/lesson_dashboard';
// import Update_Lesson from './components/Lesson/lesson_update';
// import View_Table_Lesson from './components/Lesson/lesson_view_table';
// import View_Lesson from './components/Lesson/lesson_view';

import CourseView from './components/Lecturer/ViewCourses';
import ViewCourseAssessments from './components/Lecturer/ViewCourseAssesment';
import ViewAssessment from './components/Lecturer/ViewAssessment';
import EditAssessment from './components/Lecturer/EditAssessment';

import LecturerRequest from './components/User/LecturerRequest';
import AdminNotifications from './components/AdminNotification';

import StudentRegister from './components/Student/StudentRegister';
import StudentLogin from './components/Student/StudentLogin';
import StudentViewCourses from './components/Student/ViewCourses';
import CourseAssessmentView from './components/Student/CourseAssessment';
import AddAssessmentSubmission from './components/Student/AddAssessmentSubmission';
import ViewAssessmentSubmission from './components/Student/ViewAssessmentSubmission';
import EditAssessmentSubmission from './components/Student/EditAssessmentSubmission';

function App() {
  return (
    <Router>
        <div>
                <Route path="/" exact component={Index}/>
                <Route exact path="/Admin.Login" >
                    <AdminLogin/>
                </Route>
                <Route path="/PasswordReset" exact component={PasswordReset}/>
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Registration" exact component={Registration}/>



                {/* course */}
                <Route path="/course" exact component={Add_Course}/>
                <Route path="/course-dashboard" exact component={Course_Dashboard}/>
                {/* <Route path="/update" exact component={Update_Course}/> */}
                <Route path="/view-table" exact component={View_Table_Course}/>
                {/* <Route path="/view" exact component={View_Course}/> */}

                {/* lessons */}
                <Route path="/lesson" exact component={Add_Lesson}/>
                {/* <Route path="/update" exact component={Update_Lesson}/> */}
                {/* <Route path="/view-table" exact component={View_Table_Lesson}/> */}
                {/* <Route path="/view" exact component={View_Lesson}/> */}

                <Route path="/lecturer/course" exact component={CourseView}/>
                <Route path="/lecturer/courses/:id" component={ViewCourseAssessments}/>
                <Route exact path="/lecturer/assessments/:id" component={ViewAssessment}/>
                <Route exact path="/lecturer/assessments/:id/edit" component={EditAssessment}/>

                <Route exact path="/user/request" component={LecturerRequest}/>
                <Route exact path="/admin/notification" component={AdminNotifications}/>

                <Route exact path="/student/register" component={StudentRegister}/>
                <Route exact path="/student/course" component={StudentViewCourses}/>
                <Route exact path="/student/courses/:id" component={CourseAssessmentView}/>
                <Route exact path="/student/assessments/:id" component={AddAssessmentSubmission}/>
                <Route exact path="/submissions/assessment/:id" component={ViewAssessmentSubmission}/>
                <Route exact path="/submissions/:id/edit" component={EditAssessmentSubmission}/>
                <Route exact path="/student/login" component={StudentLogin}/>

        </div>
    </Router>
  );
}

export default App;
