import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import AdminLogin from './components/Admin.Login'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import { BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
         <div>
                <Route exact path="/Admin.Login" >
                    <AdminLogin/>
                </Route>
                <Route path="/PasswordReset" exact component={PasswordReset}/>
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Registration" exact component={Registration}/>
         </div>
    </Router>
  );
}

export default App;
