import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminLogin from './components/Admin.Login'
import PasswordReset from './components/admin_passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import Index from './components/index'
import User_teacher_login from './components/user_teacher_registration'
import User_student_registration from './components/user_student_registration'
import Login from './components/user_login'
import Reset from './components/user__resetPassword'
import UserCertificate from './components/user_certificate'
import { BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
         <div>
                <Route path="/" exact component={Index}/>
                <Route exact path="/Admin.Login" >
                    <AdminLogin/>
                </Route>
                <Route path="/PasswordReset" exact component={PasswordReset}/>
                <Route path="/UserCertificate" exact component={UserCertificate}/>
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Registration" exact component={Registration}/>
                <Route path="/User_teacher_login" exact component={User_teacher_login}/>
                <Route path="/User_student_registration" exact component={User_student_registration}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Reset" exact component={Reset}/>
         </div>
    </Router>
  );
}

export default App;
