import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminLogin from './components/Admin.Login'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import Index from './components/index'
import User_teacher_login from './components/user_teacher_registration'
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
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Registration" exact component={Registration}/>
                <Route path="/User_teacher_login" exact component={User_teacher_login}/>
         </div>
    </Router>
  );
}

export default App;
