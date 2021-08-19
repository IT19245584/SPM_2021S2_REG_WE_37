import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Index from './components/index'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Registration from './components/registration'
import { BrowserRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
         <div>
                <Route exact path="/" >
                    <Index/>
                </Route>
                <Route path="/PasswordReset" exact component={PasswordReset}/>
                <Route path="/Admin" exact component={Admin}/>
                <Route path="/Registration" exact component={Registration}/>
         </div>
    </Router>
  );
}

export default App;
