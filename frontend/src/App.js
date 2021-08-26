import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminLogin from './components/Admin.Login'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import Index from './components/index'
import { BrowserRouter as Router,Route} from 'react-router-dom'

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
                {/* <Route path="/view-table-lesson" exact component={View_Table_Lesson}/> */}
                {/* <Route path="/view" exact component={View_Lesson}/> */}
        </div>
    </Router>
  );
}

export default App;
