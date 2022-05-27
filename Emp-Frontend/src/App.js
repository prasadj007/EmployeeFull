import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmpInfo from './components/ViewEmpInfo';

function App() {
  return (
   <div>
     <Router>
       <div className='container'>
      <Header />
    <div className="container">
<Switch> 
  
      <Route path="/" exact component={ListEmployees}></Route>
      <Route path="/employees" component ={ListEmployees}></Route>
      <Route path="/add-employee/:id" component ={CreateEmployee}></Route>
      <Route path="/add-employee/:id" component ={CreateEmployee}></Route>
      <Route path="/view-info/:id" component ={ViewEmpInfo}></Route>

      {/* <Route path="/update-employee/:id" exact component ={UpdateEmployee}></Route> */}
</Switch>
     </div>
     <Footer />
    </div>
    </Router>
    </div>
  );
}

export default App;
