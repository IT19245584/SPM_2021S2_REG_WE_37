import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Index from './components/index'
import PasswordReset from './components/passwordReset'
import Admin from './components/admin'
import Received_materials from './components/received/Received_materials'
import Issued_materials from './components/received/Issued_materials'
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
                <Route path="/Received_materials" exact component={Received_materials}/>
                <Route path="/Issued_materials" exact component={Issued_materials}/>
         </div>
    </Router>
  );
}

export default App;
