import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Components/Registation/Register';
import Services from './Components/Home/Services/Services';
import Singleservice from './Components/Home/SingleService/Singleservice';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blogs from './Components/Blogs/Blogs';
import Singleblog from './Components/SingleBlog/Singleblog';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/single-service/:slug">
              <Singleservice></Singleservice>
            </PrivateRoute>
            
            <Route exact path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/single-blog/:slug">
              <Singleblog></Singleblog>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/Appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
